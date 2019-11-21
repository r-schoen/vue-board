import { expect } from 'chai'
import { mutations } from '@/store/index'

const { addReply, addPost } = mutations 


describe('mutations', () => {
	it("addPost should add a post",() => {
		const state = {
			lastId: 1,
			posts: []
		}
		const post = {
			"postId":1,
			"authorId":2,
			"authorName":"jane doe",
			"body":"Parent post body",
		}
		addPost(state, post)
		expect(state.posts).to.have.lengthOf(1)
		expect(state.posts[0].body).to.equal("Parent post body")
	})

	it('addReply should add reply array in case of no replies', () =>{
		const state = {
			lastId: 1,
			posts: [
				{
					"postId":1,
					"authorId":2,
					"authorName":"jane doe",
					"body":"Parent post body",
				}
			]
		}
		const payload = {
			parentId: 1,
			post: {
				postId: 2,
				body:"reply body",
				authorId: 5,
				authorName: "john doe"
			}
		}
		addReply(state,payload)
		expect(state.posts[0]).to.have.property('replies')
		expect(state.posts[0].replies).to.have.lengthOf(1)
		expect(state.posts[0].replies[0].body).to.equal("reply body")
	}),
	it("addReply should add to existing reply array if it exists", () => {
		const state = {
			lastId: 1,
			posts: [
				{
					postId:1,
					authorId:2,
					authorName:"jane doe",
					body:"Parent post body",
					replies: [
						{
							postId: 2,
							body:"first reply",
							authorId: 5,
							authorName: "john doe"
						}
					]
				}
			]
		}
		const payload = {
			parentId: 1,
			post: {
				postId: 3,
				body:"second reply",
				authorId: 5,
				authorName: "john doe"
			}
		}
		addReply(state, payload)
		expect(state.posts[0].replies).to.have.lengthOf(2)
		expect(state.posts[0].replies[1].body).to.equal("second reply")
	})
})