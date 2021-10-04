import { mount } from '@vue/test-utils';
import DataTable from '../../src/components/DataTable';
import DataTableRow from '../../src/components/DataTableRow';
import DataTableHeader from '../../src/components/DataTableHeader';
import testData from '../../public/testData.json';
 
describe('DataTable', () => {
	let wrapper;

    let spyOnUpdateNumOfPosts = jest.spyOn(DataTable.methods, 'updateNumOfPosts')
 
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
 
    test('Header component emits an event with a value, which will trigger the updateNumOfPosts method and changes will be reflected on the table', async () => {
        let dataTableHeader = mount(DataTableHeader);
        dataTableHeader.vm.$emit('update-posts', 10);

        let emitValue = dataTableHeader.emitted('update-posts')[0][0];
        expect(wrapper.vm.displayedPosts).toBe(5);
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(5);

        await wrapper.vm.updateNumOfPosts(emitValue);
        expect(wrapper.vm.displayedPosts).toBe(10);
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(10);
        expect(spyOnUpdateNumOfPosts).toHaveBeenCalled();
    });

    test('updateNumOfPosts takes a value and changes the number of rows in the table', async () => {
        expect(wrapper.vm.displayedPosts).toBe(5);
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(5);

        await wrapper.vm.updateNumOfPosts(10);
        expect(wrapper.vm.displayedPosts).toBe(10);
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(10);        
    });
});