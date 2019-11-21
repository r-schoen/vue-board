<template>
	<div id='board-post-form'>
		<!--<input v-model="authorName" placeholder="Author Name"><br />
		<textarea v-model="messageBody" placeholder="Message Text"></textarea>-->
		<b-form @submit="onSubmit" v-if="show">
			<b-input id="inputAuthorName" placeholder="Author Name" v-model="authorName"></b-input>
			<b-form-textarea id="inputMessageBody" v-model="messageBody" placeholder="Message Body"></b-form-textarea>
			<b-button type='submit'>Submit</b-button>
		</b-form>
	</div>
</template>

<script>
export default {
	data() { return {
		messageBody:"",authorName:"",
		show:true
	}},
	methods: {
		onSubmit: function() {
			const id = this.$store.getters.currentId
			console.log("Posting thread")
			const dt={
				authorName: this.authorName,
				body: this.messageBody,
				authorId: 5,
				postId: id
			}
			console.log(dt)
			this.$store.dispatch('addPost', dt)
			this.messageBody=""
			this.authorName=""
		}
	}
}
</script>