import { mount } from '@vue/test-utils';
import App from '../../src/App';
import DataTable from '../../src/components/DataTable';

describe('App', () => {
	let wrapper;

    beforeEach(() => {
        wrapper = mount(App);
    })

	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot();
	})

	test('App renders the DataTable component', () => {
		const dataTable = wrapper.findComponent(DataTable);
		expect(dataTable.exists()).toBe(true);
	})
})