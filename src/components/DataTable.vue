<template>
    <modal 
        v-if="responseModalActive"
        @close-modal="responseModalStatus"
    >
        <template #header>
            <h2 class="font-w600 push-20-l">{{ modalResponse.name }}'s Response</h2>
        </template>
        <template #content>
            <data-table-row
                :row="modalResponse"
                :vertical="true"
                @open-modal="responseModalStatus"
            >
            </data-table-row>
        </template>
    </modal>
    <data-filter
        v-if="filterModalActive"
        @change-filter-modal-status="changeFilterModalStatus">
    </data-filter>
    <data-table-header
        @update-posts="updateNumOfPosts"
        @filter-modal="changeFilterModalStatus"
    >
    </data-table-header>
    <div class="col border">
        <data-table-row
            v-for="(response, index) in numberOfPosts"
            :row="response"
            :key="index"
            @open-modal="responseModalStatus"
            :vertical="false"
		>
        </data-table-row>
    </div>
    <div class="button-container justify-content-center mt-5">
        <button
            class="btn btn-primary"
            v-if="showButton"
            @click="showMorePosts"
            data-testid="load-more-test"
        >
        Load More
        </button>
    </div>
</template>
 
<script>
import DataTableRow from './DataTableRow';
import DataTableHeader from './DataTableHeader';
import DataFilter from './DataFilter';
import Modal from './Modal';
 
export default {
    name: 'DataTable',
    components: {
        DataTableRow,
        DataTableHeader,
        DataFilter,
        Modal
    },
    data() {
        return {
            displayedPosts: 5,
            postsToLoad: 5,
            responseModalActive: false,
            filterModalActive: false,
            modalResponse: false
        }
    },
    props: {
        responses: {
            type: Array,
            default: () => [],
            description: 'Array of objects that contain data for each row in the table.'
        }
    },
    computed: {
        numberOfPosts() {
            return this.responses.slice(0, this.displayedPosts);
        },
        showButton() {
            return this.displayedPosts <= this.responses.length;
        }
    },
    methods: {
        showMorePosts() {
            this.displayedPosts += this.postsToLoad;
        },
        updateNumOfPosts(option) {
            this.displayedPosts = option;
            this.postsToLoad = option;
        },
        responseModalStatus(row) {
            this.responseModalActive = !this.responseModalActive;
            this.modalResponse = row;
        },
        changeFilterModalStatus() {
            this.filterModalActive = !this.filterModalActive;
        }
    }
};
</script>
 
<style>
.button-container {
    margin: 30px;
}
</style>