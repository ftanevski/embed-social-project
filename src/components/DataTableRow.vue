<template>
    <div class="row">
        <div class="colContainer">
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
                <button class="btn btn-default btn-sm push-5-r">
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
    props: {
		row: {
			type: Array,
			required: true,
            description: 'Array of objects containing form response information'
		}
	}
};
</script>

<style>
.colContainer {
    align-items: center;
    display: flex;
    padding: 20px;
}
</style>