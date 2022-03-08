<template @click.self="changeFilterModalStatus">
    <modal @close-modal="changeFilterModalStatus">
        <template #header>
            <h3 class="font-w600 push-20-l">
                Filter options
            </h3>
        </template>
        <template #content>
            <div class="block">
                <div class="block-content">
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="form-group">
                                <label class="push-10-l">Form</label>
                                <select class="form-control">
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="push-10-l">Form Type</label>
                                <select class="form-control">
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="push-10-l">Recommendation</label>
                                <select class="form-control">
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="push-10-l">Date</label>
                                <select class="form-control">
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="push-10-l">Status</label>
                                <select class="form-control">
                                    <option>1</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button class="btn btn-secondary" type="button">Cancel</button>
                                <button class="btn btn-primary" type="button">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </modal>
</template>
 
<script>
import Modal from './Modal';
 
export default {
    name: 'DataFilter',
    components: {
        Modal
    },
    emits: [
        'change-filter-modal-status'
    ],
    methods: {
        changeFilterModalStatus() {
            this.$emit('change-filter-modal-status')
        }
    }
}
</script>