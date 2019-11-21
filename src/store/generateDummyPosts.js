import Axios from 'axios'

// const hipster_ipsum = "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents."
const name = "anonymous"



export const getPosts = function() { 
	return [
			{
				"postId":1,
				"authorId":2,
				"authorName":"Karen",
				"body":"So if you're from africa, why are you white?",
				"replies": [
					{
						"postId": 3,
						"authorId":4,
						"authorName": "Gretchen",
						"body": "<b>oh my god</b> karen you can't just ask someone why they're white"
					}
				]
			},
			{
				"postId":4,
				"authorId":4,
				"authorName":"Russell Schoen",
				"body":"Obligatary uncreative post",
				"replies": [
					{
						"postId": 5,
						"authorId":4,
						"authorName": "Russell Schoen",
						"body": "<i>Obligatary uncreative reply, but with italics</i>"
					}
				]
			}

		]
}

export const generatePosts = function(postCount, replyCount) {
	let posts = Array()
	let postId = 50132
	const url = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text'
	for (var i=0;i<postCount;i++) {
		let replies = Array()
		for (var j=0;j<replyCount;j++) {
			Axios.get(url).then(function(response) {
				replies.push({
					postId: postId++,
					authorId: 5,
					authorName: name,
					body: response.data
				})
			})
		}
		Axios.get(url).then(function(response) {
			posts.push({
				postId: postId++,
				authorId: 5,
				authorName: name,
				body: response.data,
				replies: replies
			})
		})
	}
	return posts
}