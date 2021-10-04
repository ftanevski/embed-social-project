<template>
    <div class="row">
        <div class="col-container">
            <data-table-row-columns
                v-for="(key, value, index) in row"
                :title="value"
                :text="key"
                :key="index"
            >
            </data-table-row-columns>
            <div class="col-md-2">
                <p class="text-muted">Action</p>
                <button class="btn btn-default btn-sm push-5-r">
                    <i class="fa fa-edit"></i>
                </button>
                <button class="btn btn-default btn-sm push-5-r" @click="emitOpenModal">
                    <i class="fa fa-eye"></i>
                </button>
                <button class="btn btn-default btn-sm push-5-r">
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import DataTableRowColumns from './DataTableRowColumns';

export default {
    name: 'DataTableRow',
    components: {
        DataTableRowColumns
    },
    emits: [
        'open-modal'
    ],
    props: {
		row: {
			type: Object,
			required: true,
            description: 'Object containing form response information'
		}
	},
    methods: {
        emitOpenModal() {
            this.$emit('open-modal');
        }
    }
};
</script>

<style>
.col-container {
    align-items: center;
    display: flex;
    padding: 20px;
}
</style>