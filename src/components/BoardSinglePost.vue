<template>
	<div class="board-single-post">
		<span class="post-body" v-html="postObject.body"></span><br />
		- <span class="post-author" v-html="postObject.authorName"></span>
	</div>
</template>

<script>
export default {
	props: {
		postObject: Object
	}
}
/*<script>
import BoardPostPreview from '@/components/BoardPostPreview.vue'
import BoardPostForm from '@/components/BoardPostForm.vue'

const localStorage = window.localStorage 

export default {
	components: {
		'board-preview': BoardPostPreview,
		'board-post-form': BoardPostForm
	},
	data() { return {
		posts: []
	}},
	mounted() {
		console.log(localStorage.posts)
		if (localStorage.posts) {
			this.posts = localStorage.posts
		} else {
			this.posts=this.$store.getters.posts
		}
		console.log(localStorage.posts)
	}
}
*/
</script>