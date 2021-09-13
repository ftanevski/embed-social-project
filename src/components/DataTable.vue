<template>
    <div class="col border">
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
import formattedData from '../services/formatSubmissions';

export default {
    name: 'DataTable',
    components: {
      DataTableRow
    },
    data() {
        return {
            responses: dummyData,
        };
    },
    async created() {
        try {
            let submissions = await formattedData();
            return submissions;
        } catch(error) {
            return error;
        }
    }
};
</script>