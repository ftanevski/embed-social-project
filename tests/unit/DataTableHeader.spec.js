import { mount } from '@vue/test-utils';
import DataTableHeader from '../../src/components/DataTableHeader';
 
describe('DataTableHeader', () => {
    let wrapper;
 
    beforeEach(() => {
		wrapper = mount(DataTableHeader);
	});
 
    it('Matches the snapshot', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
 
    it('Emits the event with the selected value payload', async () => {
        let dropdownSelector = '[data-testid="dropdown-test"]';
        let dropdownOptionsSelector = '[data-testid="dropdown-options-test"]';
 
        wrapper.findAll(dropdownOptionsSelector)[1].element.selected = true;
        await wrapper.find(dropdownSelector).trigger('change');

        let emittedEvents = wrapper.emitted('update-posts');
        expect(emittedEvents).toHaveLength(1);

        let expectedPayload = 10;
        expect(toString(emittedEvents[0][0])).toMatch(toString(expectedPayload));
    });

    it('Emits the selected value from the dropdown using the updateNumOfPosts method', async () => {
        await wrapper.vm.updateNumOfPosts();
        expect(wrapper.emitted('update-posts')[0][0]).toBe(5);

        let dropdownSelector = '[data-testid="dropdown-test"]';
        let dropdownOptionsSelector = '[data-testid="dropdown-options-test"]';
 
        wrapper.findAll(dropdownOptionsSelector)[1].element.selected = true;
        await wrapper.find(dropdownSelector).trigger('change');

        await wrapper.vm.updateNumOfPosts();
        expect(wrapper.emitted('update-posts')[1][0]).toBe(10);
    });
});