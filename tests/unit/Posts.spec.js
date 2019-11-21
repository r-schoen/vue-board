import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {FULL_URL} from '@/utils/constants.js'
import Posts from '@/components/Posts.vue'
import {shallowMount, createLocalVue} from '@vue/test-utils'
import {assert, expect} from 'chai'
import Vuex from 'vuex'
import flushPromises from 'flush-promises'

//import Vue from 'vue'
const mock = new MockAdapter(Axios)
const localVue = createLocalVue()
localVue.use(Vuex)

describe("Posts page", () => {
	let actions
	let store 

	before(() => {
		actions = {
			fetchPosts: function() {}
		},
		store = new Vuex.Store({
			state: {},
			actions
		})
	})
	const test_posts = [
		{title: "title 1", body: "post 1"},{title: "title 2", body: "post 2"}
	]
	mock.onGet(FULL_URL).reply(200, test_posts)
	it("Contains a list", () => {
		const wrapper = shallowMount(Posts, {store, localVue})
		assert(wrapper.find("ul"))
	})
	it(`Contains every single post (${test_posts.length} for the test)`, async () => {
	//const wrapper = shallowMount(Posts, {store, localVue})
		const wrapper = shallowMount(Posts, {store, localVue})
		await flushPromises()
		assert(wrapper.vm.payload.length == test_posts.length, `is of length ${test_posts.length}`)
		expect(wrapper.find(".posts li").html()).contain("title 1")
	})
})