<template>
    <div 
        class="modal in modal-bg" 
        data-testid="modal-bg-test"
        @click.self="closeModal"
    >
        <div class="modal-dialog">
            <div class="modal-content" data-testid="modal-content-test">
                <div class="block remove-margin-b">
                    <div class="block-header bg-primary-darker">
                        <ul class="block-options">
                            <li>
                                <button
                                    data-dismiss="modal"
                                    type="button"
                                    @click="closeModal"
                                    data-testid="times-button-test"
                                >
                                    <i class="fa fa-times"></i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            <slot name="header"></slot>
                        </h3>
                    </div>
                    <div class="block-content">
                        <slot name="text"></slot>
                    </div>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'Modal',
    emits: [
        'close-modal'
    ],
    methods: {
        closeModal() {
            this.$emit('close-modal');
        }
    }
}
</script>
 
<style scoped>
.modal-bg {
    background-color: rgba(0, 0, 0, 0.4);
    display: block;
}
.modal-dialog {
    top: 30%;
}
</style>