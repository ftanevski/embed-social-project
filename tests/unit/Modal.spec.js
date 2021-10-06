import { mount } from '@vue/test-utils';
import Modal from '../../src/components/Modal';

describe('Modal', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Modal, {
            slots: {
                header: 'Lorem Ipsum',
                content: '<p>Lorem ipsum dolor sit amet.</p>'
            }
        });
    });

    it('Matches the snapshot.', () => {
        expect(wrapper.element).toMatchSnapshot();
    });

    it('Emits the closeModal to the parent component when clicking the X button.', async () => {
        let timesButton = wrapper.find('[data-testid="times-button-test"]');
        await timesButton.trigger('click');

        let emittedEvents = wrapper.emitted('close-modal');
        expect(emittedEvents).toHaveLength(1);
    });

    it('Emits the closeModal to the parent component when clicking outside of the modal.', async () => {
        let modalBg = wrapper.find('[data-testid="modal-bg-test"]');
        await modalBg.trigger('click');
        
        let emittedEvents = wrapper.emitted('close-modal');
        expect(emittedEvents).toHaveLength(1);
    });

    it('Doesn\'t emit anything when clicking inside of the modal.', async () => {
        let modalContent = wrapper.find('[data-testid="modal-content-test"]');
    
        await modalContent.trigger('click');
        let emittedEvents = wrapper.emitted('close-modal');
        expect(emittedEvents).toBeUndefined();
    });

    it('Renders the slot content', () => {
        expect(wrapper.html()).toContain('Lorem Ipsum');
        expect(wrapper.html()).toContain('<p>Lorem ipsum dolor sit amet.</p>');
    });
});