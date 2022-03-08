<template>
    <div class="row header-row">
        <div class="dropdown">
            <select
                class="form-control"
                v-model="selectedValue"
                @change="updateNumOfPosts"
                data-testid="dropdown-test"
            >
                <option
                    class="select-options"
                    v-for="option in options"
                    :value="option"
                    :key="option"
                    data-testid="dropdown-options-test"
                >
                {{ option }}
                </option>
            </select>
        </div>
        <div class="left-button">
            <button class="btn btn-secondary" @click="openFilterModal">Filter Submissions</button>
        </div>
        <div class="right-button">
            <button class="btn btn-primary">Create Submission</button>
        </div>
    </div>
</template>
 
<script>
export default {
    name: 'DataTableHeader',
    data() {
        return {
            options: [5, 10, 15, 20, 25],
            selectedValue: 5
        }
    },
    emits: [
        'update-posts',
        'filter-modal'
    ],
    methods: {
        updateNumOfPosts() {
            this.$emit('update-posts', this.selectedValue);
        },
        openFilterModal() {
            this.$emit('filter-modal')
        }
    }
}
</script>
 
<style>
.dropdown {
    margin-left: 15px;
}
 
.header-row {
    display: flex;
    margin-bottom: 10px;
}
 
.left-button {
    margin-left: 20px;
}
 
.right-button {
    margin-left: auto;
    margin-right: 15px;
}
</style>