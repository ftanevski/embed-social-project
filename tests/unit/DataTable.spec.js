import { mount } from '@vue/test-utils';
import DataTable from '../../src/components/DataTable';
import DataTableRow from '../../src/components/DataTableRow';
import DataTableHeader from '../../src/components/DataTableHeader';
import Modal from '../../src/components/Modal';
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
 
	it('Matches the snapshot', () => {
		expect(wrapper.element).toMatchSnapshot();
	});
 
	it('Initially renders 5 rows based on the displayedPosts data property in DataTable', () => {
		let dataTableRow = wrapper.findAllComponents(DataTableRow);
		expect(dataTableRow).toHaveLength(wrapper.vm.displayedPosts);
	});
 
    it('Loads 5 more rows when the Load More button is clicked', async () => {
        let button = wrapper.find('[data-testid="load-more-test"]');
        let rows = wrapper.findAllComponents(DataTableRow);
 
        expect(rows).toHaveLength(5);
 
        await button.trigger('click');
        let newRows = wrapper.findAllComponents(DataTableRow);
 
        expect(newRows).toHaveLength(10);
    });
 
	it('Hides the Load More button When all submissions are added to the table', async () => {
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeTruthy();
 
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeTruthy();
 
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeTruthy();
 
        await wrapper.find('[data-testid="load-more-test"]').trigger('click');
        expect(wrapper.find('[data-testid="load-more-test"]').exists()).toBeFalsy();
	});
 
    it('Changes the number of posts displayed depending on which value is selected and emitted from the DataTableHeader component to the DataTable component', async () => {
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

    it('Passes the value in updateNumOfPosts and changes the number of rows in the table', async () => {
        expect(wrapper.vm.displayedPosts).toBe(5);
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(5);

        await wrapper.vm.updateNumOfPosts(10);
        expect(wrapper.vm.displayedPosts).toBe(10);
        expect(wrapper.findAllComponents(DataTableRow)).toHaveLength(10);        
    });

    it('Opens the modal with the correct data', async () => {
        let modalWrapper = wrapper.findComponent(Modal);
        expect(modal.exists()).toBeFalsy();

        let secondRowFromDataTable = wrapper.findAllComponents(DataTableRow)[1];
        let modalPreviewButton = secondRowFromDataTable.find('[data-testid="preview-button-test"]');

        await modalPreviewButton.trigger('click');

        modalWrapper = wrapper.findComponent(Modal);
        expect(modalWrapper.exists()).toBeTruthy();
        expect(modalWrapper.html()).toContain('ivana_ar@example.com');
    });
});