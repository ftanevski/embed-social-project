import { mount } from '@vue/test-utils';
import DataTable from '../../src/components/DataTable';
import DataTableRow from '../../src/components/DataTableRow';
import dummyData from '../../src/assets/data/DummyData';

describe('DataTable', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(DataTable);
	});

	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	test('DataTable renders all rows from component', () => {
		const dataTableRow = wrapper.findAllComponents(DataTableRow);
		expect(dataTableRow).toHaveLength(dummyData.length);
	});
});