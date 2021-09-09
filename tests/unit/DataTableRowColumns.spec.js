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

	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	test('Computed property titleToUpperCase works with current prop value', () => {
		expect(wrapper.vm.titleToUpperCase).toBe('Name');
	});

	test('Computed property titleToUpperCase works with different prop value', async () => {
		await wrapper.setProps({ title: 'test' });
		expect(wrapper.vm.titleToUpperCase).toBe('Test');
	});

	test('The HTML of <p class="text-muted"> is equal to titleToUpperCase', () => {
		const title = wrapper.find('[data-testid="title-test"]');
		expect(title.text()).toEqual(wrapper.vm.titleToUpperCase);
	});

	test('The HTML of <div class="font-w600"> is equal to the "text" property', () => {
		const textValue = wrapper.find('[data-testid="text-test"]');
		expect(textValue.text()).toEqual(wrapper.vm.text);
	})
});