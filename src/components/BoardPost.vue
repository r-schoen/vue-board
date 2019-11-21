<template>
	<div class='board-post'>
		<a href="/#/board">Back</a>
		<board-reply-form />
		<board-single-post :postObject="this.post"  />
		<div>
			<board-single-post v-for="reply in this.post.replies" v-bind:key="reply.postId" :postObject=reply />
		</div>
	</div>
</template>



<script>
import BoardSinglePost from '@/components/BoardSinglePost.vue'
import BoardReplyForm from '@/components/BoardReplyForm.vue'

export default {
	components: {
		'board-single-post': BoardSinglePost,
		'board-reply-form': BoardReplyForm
	},
	data() { return {
		post: this.$store.getters.post(this.$route.params.postId)
	}}
}
</script>