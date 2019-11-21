<template>
	<div id='board-root'>
		<h1>Message Board</h1>
		<board-post-form />
		<board-preview v-for="post in posts" v-bind:key="post.postId" :postId='post.postId' :authorName='post.authorName' :authorId='post.authorId' :body="post.body" :replies="post.replies" />
	</div>
</template>



<script>
import BoardPostPreview from '@/components/BoardPostPreview.vue'
import BoardPostForm from '@/components/BoardPostForm.vue'


export default {
	components: {
		'board-preview': BoardPostPreview,
		'board-post-form': BoardPostForm
	},
	data() { return {
		posts: []
	}},
	mounted() {
		this.$store.dispatch('forceInit')
		this.posts = this.$store.getters.posts

	}
}
</script>