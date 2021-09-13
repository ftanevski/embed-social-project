import { mount } from '@vue/test-utils';
import DataTable from '../../src/components/DataTable';
import DataTableRow from '../../src/components/DataTableRow';
import dummyData from '../../src/assets/data/DummyData';
import formattedData from '../../src/services/formatSubmissions';

jest.mock('../../src/services/formatSubmissions.js')

describe('DataTable', () => {
	let wrapper;

	beforeEach(async () => {
        jest.clearAllMocks();
		wrapper = mount(DataTable);
	});

	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	test('DataTable renders all rows from component', () => {
		const dataTableRow = wrapper.findAllComponents(DataTableRow);
		expect(dataTableRow).toHaveLength(dummyData.length);
	});

    test('Calls the function', () => {
        expect(formattedData).toHaveBeenCalledTimes(1);
    })
});