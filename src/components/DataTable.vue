<template>
    <div class="col border">
        <data-table-row
            v-for="(response, index) in numberOfPosts"
            :row="response"
            :key="index"
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

export default {
    name: 'DataTable',
    components: {
        DataTableRow
    },
    data() {
        return {
            currentPosts: 5,
            postsToLoad: 5
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
            return this.responses.slice(0, this.currentPosts);
        },
        showButton() {
            return this.currentPosts < this.responses.length;
        }
    },
    methods: {
        showMorePosts() {
            this.currentPosts += this.postsToLoad;
        }
    }
};
</script>

<style>
.button-container {
    margin: 30px;
}
</style>