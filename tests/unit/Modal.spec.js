import { mount } from '@vue/test-utils';
import Modal from '../../src/components/Modal';

describe('Modal', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Modal, {
            slots: {
                header: 'Lorem Ipsum',
                text: '<p>Lorem ipsum dolor sit amet.</p>',
                footer: '<button>Test Button</button>'
            }
        });
    });

    test('Snapshot matches', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    test('Clicking the X button will emit the closeModal to the parent component.', async () => {
        let timesButton = wrapper.find('[data-testid="times-button-test"]');
        await timesButton.trigger('click');

        let emittedEvents = wrapper.emitted('close-modal');
        expect(emittedEvents).toHaveLength(1);
    });

    test('Clicking outside of the modal will emit the closeModal to the parent component', async () => {
        let modalBg = wrapper.find('[data-testid="modal-bg-test"]');
        await modalBg.trigger('click');
        
        let emittedEvents = wrapper.emitted('close-modal');
        expect(emittedEvents).toHaveLength(1);
    });

    test('Clicking inside of the modal will not cause an emit', async () => {
        let modalContent = wrapper.find('[data-testid="modal-content-test"]');
    
        await modalContent.trigger('click');
        let emittedEvents = wrapper.emitted('close-modal');
        expect(emittedEvents).toBeUndefined();
    });

    test('Renders the slot content', () => {
        expect(wrapper.html()).toContain('Lorem Ipsum');
        expect(wrapper.html()).toContain('<p>Lorem ipsum dolor sit amet.</p>');
        expect(wrapper.html()).toContain('<button>Test Button</button>');
    });
});