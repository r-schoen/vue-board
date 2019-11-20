<template>
	<div class='board-post'>
		<a href="/#/board">Back</a>
		<h2 v-html="this.post.authorName"></h2>
		<board-single-post :postObject="this.post"  />
		<div>
			<board-single-post v-for="reply in this.post.replies" v-bind:key="reply.postId" :postObject=reply />
		</div>
	</div>
</template>



<script>
import BoardSinglePost from '@/components/BoardSinglePost.vue'

export default {
	components: {
		'board-single-post': BoardSinglePost
	},
	data() { return {
		post: this.$store.getters.post(this.$route.params.postId)
	}}
}
</script>