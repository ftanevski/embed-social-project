<template>
    <div 
        class="modal in modal-bg" 
        data-testid="modal-bg-test"
        @click.self="closeModal"
    >
        <div class="modal-dialog modal-card">
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
                    </div>
                    <div>
                        <slot name="header"></slot>
                        <div>
                            <slot name="content"></slot>
                        </div>
                    </div>
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

.modal-card {
    height: fit-content;
    max-height: 95vh;
    margin-top: 1%;
    overflow-x: hidden;
    overflow-y: scroll;
    z-index: 100000;
}

.modal-dialog::-webkit-scrollbar {
    display: none;
}
</style>