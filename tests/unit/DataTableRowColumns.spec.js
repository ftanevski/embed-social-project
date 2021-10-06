import { mount } from '@vue/test-utils';
import DataTableRowColumns from '../../src/components/DataTableRowColumns';

describe('DataTableRowColumns', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(DataTableRowColumns, {
			props: {
				title: 'name',
				text: 'Jonathan'
			}
		});
	});

	it('Matches the snapshot.', () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	it('Transforms the current prop value to uppercase using the titleToUpperCase method.', () => {
		expect(wrapper.vm.titleToUpperCase).toBe('Name');
	});

	it('Transforms a different prop value to uppercase using the titleToUpperCase method.', async () => {
		await wrapper.setProps({ title: 'test' });
		expect(wrapper.vm.titleToUpperCase).toBe('Test');
	});

	it('The HTML of <p class="text-muted"> is equal to titleToUpperCase', () => {
		const title = wrapper.find('[data-testid="title-test"]');
		expect(title.text()).toEqual(wrapper.vm.titleToUpperCase);
	});

	it('The HTML of <div class="font-w600"> is equal to the "text" property', () => {
		const textValue = wrapper.find('[data-testid="text-test"]');
		expect(textValue.text()).toEqual(wrapper.vm.text);
	})
});