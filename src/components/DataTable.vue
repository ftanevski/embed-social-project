<template>
    <modal 
        v-if="modalActive"
        @click.self="changeModalStatus(false)"
        @close-modal="changeModalStatus(false)"
    >
        <template #header>
            Lorem Ipsum
        </template>
        <template #text>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
            </p>
        </template>
        <template #footer>
            <button class="btn btn-secondary" data-dismiss="modal" @click="changeModalStatus(false)">
                <i class="fa fa-times push-10-r"></i> Cancel
            </button>
            <button class="btn btn-primary">
                <i class="fas fa-check push-10-r"></i> Confirm
            </button>
        </template>
    </modal>
    <data-table-header @update-posts="updateNumOfPosts"></data-table-header>
    <div class="col border">
        <data-table-row
            v-for="(response, index) in numberOfPosts"
            :row="response"
            :key="index"
            @open-modal="changeModalStatus(true)"
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
            modalActive: false
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
        changeModalStatus(value) {
            this.modalActive = value;
        }
    }
};
</script>
 
<style>
.button-container {
    margin: 30px;
}
</style>