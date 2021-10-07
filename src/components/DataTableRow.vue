<template>
    <div :class="{ 'table-column': vertical, 'table-row': !vertical }">
        <data-table-row-columns
            v-for="(key, value, index) in row"
            :title="value"
            :text="key"
            :key="index"
            :class="{ 'table-column': vertical, 'col-md-2': !vertical }"
        >
        </data-table-row-columns>
        <div v-if="!vertical" class="col-md-2">
            <p class="text-muted">Action</p>
            <button class="btn btn-default btn-sm push-5-r">
                <i class="fa fa-edit"></i>
            </button>
            <button
                class="btn btn-default btn-sm push-5-r"
                @click="emitOpenModal"
                data-testid="preview-button-test"
            >
                <i class="fa fa-eye"></i>
            </button>
            <button class="btn btn-default btn-sm push-5-r">
                <i class="fa fa-trash"></i>
            </button>
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
		},
        vertical: {
            type: Boolean,
            required: true,
            description: 'Boolean that sets the layout for the table rows'
        }
	},
    methods: {
        emitOpenModal() {
            this.$emit('open-modal', this.row);
        }
    }
};
</script>

<style>
.table-row {
    align-items: center;
    display: flex;
    padding: 20px;
}

.table-column {
    display: block;
    padding: 10px;
    margin-top: 10px;
}
</style>