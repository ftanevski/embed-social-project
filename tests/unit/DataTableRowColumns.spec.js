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
		})
	})

	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot()
	})

	test('Computed property titleToUpperCase works with current prop value', () => {
		expect(wrapper.vm.titleToUpperCase).toBe('Name')
	})

	test('Computed property titleToUpperCase works with different prop value', async () => {
		await wrapper.setProps({ title: 'test' })
		expect(wrapper.vm.titleToUpperCase).toBe('Test')
	})
})