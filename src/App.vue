<template>
    <data-table :responses="tableSubmissions">
    </data-table>
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
    font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    padding: 20px;
    margin: 20px;
}
</style>
