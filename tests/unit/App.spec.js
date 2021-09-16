import { mount } from '@vue/test-utils';
import App from '../../src/App';
import DataTable from '../../src/components/DataTable';
import formattedData from '../../src/services/formatSubmissions';

jest.mock('../../src/services/formatSubmissions.js');

describe('App', () => {
	let wrapper;

    beforeEach(() => {
		jest.clearAllMocks();
        wrapper = mount(App);
    });

	test('Snapshot matches', () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	test('App renders the DataTable component', () => {
		const dataTable = wrapper.findComponent(DataTable);
		expect(dataTable.exists()).toBe(true);
	});

	test('Makes a request for the formatted data', () => {
        expect(formattedData).toHaveBeenCalledTimes(1);
    })
});