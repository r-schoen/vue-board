<template>
	<div class='board-post'>
		<a :href="getPostLink(postId)" v-html="postId"></a>
		<p v-html="authorId"></p>
		<p v-html="body"></p>
	</div>
</template>



<script>

export default {
	props: {
		postId: Number,
		authorId: Number,
		body: String,
		replies: Array
	},
	methods: {
		getPostLink(postId) {
			return `/#/board/posts/${postId}`
		}
	}
}
</script>