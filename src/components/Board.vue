<template>
	<div id='board-root'>
		<h1>Message Board</h1>
		<board-preview v-for="post in posts" v-bind:key="post.postId" :postId='post.postId' :authorId='post.authorId' :body="post.body" :replies="post.replies" />
	</div>
</template>



<script>
import BoardPostPreview from '@/components/BoardPostPreview.vue'

export default {
	components: {
		'board-preview': BoardPostPreview
	},
	data() { return {
		posts: []
	}},
	mounted() {
		this.posts=this.$store.getters.posts
	}
}
</script>