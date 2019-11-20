<template>
	<div class="board-single-post">
		<p class="post-author" v-html="postObject.authorName"></p>
		<p class="post-body" v-html="postObject.body"></p>
	</div>
</template>

<script>
export default {
	props: {
		postObject: Object
	}
}
</script>