import { mount } from '@vue/test-utils';
import DataTable from '../../src/components/DataTable';
import DataTableRow from '../../src/components/DataTableRow';
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

	test('DataTable initially renders 5 rows based on the currentPosts data property', () => {
		let dataTableRow = wrapper.findAllComponents(DataTableRow);
		expect(dataTableRow).toHaveLength(wrapper.vm.currentPosts);
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
});