import Vue from 'vue'
import Vuex from 'vuex'
import posts from '@/assets/posts.json'

Vue.use(Vuex)

// Store objects are declared seperately for unit testing
export const mutations = {
	initialiseStore() {
		if(window.localStorage.getItem('state')) {
			this.replaceState(JSON.parse(window.localStorage.getItem('state')))
			return
		}
	},
	addReply(state, payload) {
		let parentPost = state.posts.find(post => post.postId == payload.parentId)
		// check to see if this has any replies
		if (!(parentPost.replies instanceof Array)) {
			// TODO: Find out why 'thisPost' is null
			parentPost.replies = Array(payload.post)
			return
		} 
		state.posts.find(post => post.postId ==  payload.parentId).replies.push(payload.post)
	},
	addPost(state, post) {
		state.posts.push(post)
	},
	updateStore(state) {
		window.localStorage.setItem('state',JSON.stringify(state))
	} 
}
export const getters = {
	posts: (state) => {
		return state.posts
	},
	post: (state) => (postId) => {
		return state.posts.find(post => post.postId == postId)
	},
	currentId: (state) => {
		return ++state.lastId
	}
}
export const actions = {
	forceInit({commit}) {
		commit('initialiseStore')
	},
	addReply({commit},payload) { 
		commit('addReply',payload)
		commit('updateStore')
	},
	addPost({commit},post) {
		commit('addPost',post)
		commit('updateStore')
	}
}
export default new Vuex.Store({
	state: {
		lastId:5,
		posts:posts,
	},
	getters: getters,
	mutations: mutations,
	actions: actions
})