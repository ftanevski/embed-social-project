<template>
    <div class="col border tableContainer">
        <data-table-row 
                   v-for="response in responses" 
                   :row="response" 
                   :key="response.id"
		>
        </data-table-row>
    </div>
</template>

<script>
import DataTableRow from './DataTableRow';
import dummyData from '../assets/data/DummyData';

export default {
    name: 'DataTable',
    components: {
      DataTableRow
    },
    data() {
        return {
            responses: dummyData
        };
    }
};
</script>