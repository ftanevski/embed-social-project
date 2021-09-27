import { mount } from '@vue/test-utils';
import DataTable from '../../src/components/DataTable';
import DataTableRow from '../../src/components/DataTableRow';
import DataTableHeader from '../../src/components/DataTableHeader';
import testData from '../../public/testData.json';
 
describe('DataTable', () => {
	let wrapper;
 
	beforeEach(() => {
		wrapper = mount(DataTable, {
            props: {
                responses: testData,
            }
        });
	});
 
	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot();
	});
 
	test('DataTable initially renders 5 rows based on the displayedPosts data property', () => {
		let dataTableRow = wrapper.findAllComponents(DataTableRow);
		expect(dataTableRow).toHaveLength(wrapper.vm.displayedPosts);
	});
 
    test('Load more button loads 5 more rows to the table', async () => {
        let button = wrapper.find('[data-testid="load-more-test"]');
        let rows = wrapper.findAllComponents(DataTableRow);
 
        expect(rows).toHaveLength(5);
 
        await button.trigger('click');
        let newRows = wrapper.findAllComponents(DataTableRow);
 
        expect(newRows).toHaveLength(10);
    });
 
	test('When all submissions are added to the table, the button disappears meaning the computed property works', async () => {
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeTruthy();
 
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeTruthy();
 
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeTruthy();
 
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeFalsy();
	});
 
    test('Selecting a value will change the number of posts displayed and number of posts loaded with each click', async () => {
        let dropdownSelector = '[data-testid="dropdown-test"]';
        let dropdownOptionsSelector = '[data-testid="dropdown-options-test"]';
 
        wrapper.find(dropdownSelector);
        wrapper.findAll(dropdownOptionsSelector)[1].element.selected = true;
 
        await wrapper.find(dropdownSelector).trigger('change');
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(10);
 
        let button = wrapper.find('[data-testid="load-more-test"]');
        await button.trigger('click');
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(20);
 
        wrapper.findAll(dropdownOptionsSelector)[0].element.selected = true;
        await wrapper.find(dropdownSelector).trigger('change');
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(5);
    });
});