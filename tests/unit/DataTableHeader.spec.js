import { mount } from '@vue/test-utils';
import DataTableHeader from '../../src/components/DataTable';
 
describe('DataTableHeader', () => {
    let wrapper;
 
    beforeEach(() => {
		wrapper = mount(DataTableHeader);
	});
 
    test('Snapshot matches', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
 
    test('Emits the event with the selected value payload', async () => {
        let dropdownSelector = '[data-testid="dropdown-test"]';
        let dropdownOptionsSelector = '[data-testid="dropdown-options-test"]';
 
        wrapper.findAll(dropdownOptionsSelector)[1].element.selected = true;

        await wrapper.find(dropdownSelector).trigger('change');
        // I want to test whether the 'update-posts' event is emitted after changing the value of the dropdown menu. With this I keep
        // receiving that the received value (emittedEvents) is undefined and I can't see if the event is properly emitted and store as
        // an array in the emittedEvents variable.
        let emittedEvents = wrapper.emitted('update-posts');
        expect(emittedEvents).toHaveLength(1);
        console.log(emittedEvents);
    });
})