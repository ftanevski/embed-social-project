<template>
    <div class="container-fluid">
        <div class="row">
            <data-table
                :responses="tableSubmissions"
            >
            </data-table>
        </div>
    </div>
</template>

<script>
import DataTable from './components/DataTable';
import formattedData from './services/formatSubmissions';

export default {
    name: 'App',
    components: {
        DataTable
    },
    data() {
        return {
            tableSubmissions: []
        }
    },
    async created() {
        try {
            this.tableSubmissions = await formattedData();
        } catch(error) {
            return error;
        }
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 13px;
    padding: 20px;
    margin: 20px;
}
</style>
