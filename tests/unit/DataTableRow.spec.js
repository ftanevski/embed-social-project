import { mount } from '@vue/test-utils';
import DataTableRow from '../../src/components/DataTableRow';
import DataTableRowColumns from '../../src/components/DataTableRowColumns';

describe('DataTableRow', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(DataTableRow, {
			props: {
				row: {
					name: "Nicole",
		    	    email: "nicole@yahoo.com",
		            recommendation: "no",
		            feedback: "The box this comes in is 4 yard by 5 inch and weights 12 pound! i use it profusely when i'm in my garage.",
		            date: "02/04/2021",
		            form_name: "Form 4",
		            form_type: "popup",
		            status: "pending"
				},
                vertical: true
			}
		});
	});
	 
	it('Matches the snapshot', () => {
		expect(wrapper.element).toMatchSnapshot();
	});

	it('Renders a total of 8 columns in each DataTableRow', () => {
		const dataTableRowColumns = wrapper.findAllComponents(DataTableRowColumns);
		expect(dataTableRowColumns).toHaveLength(8);
	});
});