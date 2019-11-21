<template>
	<div class='board-post'>
		<a :href="getPostLink(postId)" v-html="body"></a><br />
		- <span v-html="authorName"></span>
	</div>
</template>



<script>

export default {
	props: {
		postId: Number,
		authorId: Number,
		authorName: String,
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