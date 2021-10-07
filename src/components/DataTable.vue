<template>
    <modal 
        v-if="modalActive"
        @close-modal="changeModalStatus"
    >
        <template #header>
            <h1 class="page-heading push-20-l">{{ modalResponse.name }}'s Response</h1>
        </template>
        <template #content>
            <data-table-row
                :row="modalResponse"
                :vertical="true"
                @open-modal="changeModalStatus"
            >
            </data-table-row>
        </template>
    </modal>
    <data-table-header @update-posts="updateNumOfPosts"></data-table-header>
    <div class="col border">
        <data-table-row
            v-for="(response, index) in numberOfPosts"
            :row="response"
            :key="index"
            @open-modal="changeModalStatus"
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
import Modal from './Modal';
 
export default {
    name: 'DataTable',
    components: {
        DataTableRow,
        DataTableHeader,
        Modal
    },
    data() {
        return {
            displayedPosts: 5,
            postsToLoad: 5,
            modalActive: false,
            modalResponse: null
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
        changeModalStatus(row) {
            this.modalActive = !this.modalActive;
            this.modalResponse = row;
        }
    }
};
</script>
 
<style>
.button-container {
    margin: 30px;
}
</style>