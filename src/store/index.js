import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		lastId:5,
		posts:[],
		testVar: []
	},
	getters: {
		posts: (state) => {
			return state.posts
		},
		post: (state) => (postId) => {
			return state.posts.find(post => post.postId == postId)
		},
		currentId: (state) => {
			return ++state.lastId
		}
	},
	mutations: {
		initialiseStore() {
			if(window.localStorage.getItem('state')) {
				this.replaceState(JSON.parse(window.localStorage.getItem('state')))
				return
			} 
			this.replaceState(
				Object.assign({
					lastId: 5,
					posts:[
						{
							postId:1,
							authorId:2,
							authorName:"Karen",
							body:"So if you're from africa, why are you white?",
							replies: [
								{
									postId: 3,
									authorId:4,
									authorName: 'Gretchen',
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
						}
					
					]
				})
			)
		},
		addReply(state, parentId, post) {
			let parentPost = state.posts.find(post => post.postId == parentId)
			// check to see if this has any replies
			if (!(parentPost.replies instanceof Array)) {
				state.posts.find(post => post.postId == parentId).replies = Array(post)
				return
			} 
			state.posts.find(post => post.postId == parentId).replies.push(post)
		},
		addPost(state, post) {
			state.posts.push(post)
		},
		updateStore(state) {
			window.localStorage.setItem('state',JSON.stringify(state))
		}
	},
	actions: {
		forceInit({commit}) {
			commit('initialiseStore')
		},
		addReply({commit},parentId,post) {
			commit('addReply',parentId,post)
			commit('updateStore')
		},
		addPost({commit},post) {
			commit('addPost',post)
			commit('updateStore')
		}
	}
})