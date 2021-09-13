<template>
	<div class="col-md-2">
		<p class="text-muted" data-testid="title-test">
			{{ titleToUpperCase }}
		</p>
        <div class="font-w600" data-testid="text-test">
            {{ text }}
        </div>
	</div>
</template>

<script>
export default {
	name: 'DataTableRowColumns',
	props: {
		title: {
            type: String,
			required: true,
			description: 'String that defines the key from the key: value properties of the submissions'
		},
		text: {
            type: String,
			required: true,
			description: 'String that defines the value of the key: value properties from the submissions'
		}
	},
	computed: {
		titleToUpperCase() {
            return this.title.charAt(0).toUpperCase() + this.title.slice(1, this.title.length)
		} 
	}
}
</script>