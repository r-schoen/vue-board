import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lastId:5,
		posts:[
			{
				postId:1,
				authorId:2,
				authorName:"Karen Smith",
				body:"So if you're from africa, why are you white?",
				replies: [
					{
						postId: 3,
						authorId:4,
						authorName: 'Gretchen Wieners',
						body: "<b>oh my god</b> karen you can't just ask someone why they're white"
					}
				]
			},
			{
				postId:4,
				authorId:4,
				authorName:"Russell Schoen",
				body:"Obligatary uncreative post",
				replies: [
					{
						postId: 5,
						authorId:4,
						authorName: 'Russell Schoen',
						body: "<i>Obligatary uncreative reply, but with italics</i>"
					}
				]
			},
			
		] 
	},
	getters: {
		posts: (state) => {
			return state.posts
		},
		post: (state) => (postId) => {
			return state.posts.find(post => post.postId == postId)
		}
	},
	mutations: {
		addReply(state, parentId, post) {
			state.posts.find(post => post.postId == parentId).replies.push(post)
		},
		addPost(state, post) {
			state.posts.push(post)
		}
	},
	actions: {
		addReply({commit},parentId,post) {
			post.postId = ++this.lastId
			commit('addReply',parentId,post)
		},
		addPost({commit},post) {
			post.postId = ++this.lastId
			commit('addPost',post)
		}
	}
})