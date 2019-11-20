<template>
	<div class="home">
		<h1>Blog</h1>
		<ul class="posts">
			<li
				v-for="post in payload"
				:key="post.title"
				class="post">
				<h2 v-html="post.title">
				</h2>
				<p v-html="post.body"></p>
			</li>
		</ul>
	</div>
</template>

<script>
import { FULL_URL } from '@/utils/constants'
import Axios from 'axios'
// @ is an alias to /src
export default {
	name: 'home',
	data() {return {
		payload: []
	}},
	mounted() {	
		Axios.get(FULL_URL).then(response => {this.payload = response.data})
	}
}
</script>
