<template>
    <div class="container-fluid ">
        <div class="row headerRow">
            <div class="dropdown">
                <select
                    class="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="false"
                >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div class="leftButton">
                <button class="btn btn-secondary">Filter Submissions</button>
            </div>
            <div class="rightButton">
                <button class="btn btn-primary">Create Submission</button>
            </div>
        </div>
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

.headerRow {
    display: flex;
    margin-bottom: 10px;
}

.leftButton {
    margin-left: 20px;
}

.rightButton {
    margin-left: auto;
}
</style>
