<template>
    <div class="col border">
        <data-table-row
            v-for="(response, index) in responses"
            :row="response"
            :key="index"
		>
        </data-table-row>
    </div>
</template>

<script>
import DataTableRow from './DataTableRow';

export default {
    name: 'DataTable',
    components: {
        DataTableRow
    },
    props: {
        responses: {
            type: Array,
            default: () => [],
            description: 'Array of objects that contain data for each row in the table.'
        }
    }
};
</script>