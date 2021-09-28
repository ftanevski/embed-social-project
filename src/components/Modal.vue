<template>
    <div class="modal in modal-bg" @click.self="closeModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="block remove-margin-b">
                    <div class="block-header bg-primary-darker">
                        <ul class="block-options">
                            <li>
                                <button data-dismiss="modal" type="button" @click="closeModal">
                                    <i class="fa fa-times">
                                    </i>
                                </button>
                            </li>
                        </ul>
                        <h3>
                            <slot name="header">
                                Lorem Ipsum
                            </slot>
                        </h3>
                    </div>
                    <div class="block-content">
                        <slot name="text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                                labore et dolore magna aliqua.
                            </p>
                        </slot>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-dismiss="modal" @click="closeModal">
                        <i class="fa fa-times push-10-r">
                        </i>
                        Cancel
                    </button>
                    <button class="btn btn-primary">
                        <i class="fas fa-check push-10-r">
                        </i>
                        Confirm
                    </button>
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