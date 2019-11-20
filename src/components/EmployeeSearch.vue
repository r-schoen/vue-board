<template>
	<div id="employee-search">
		<h1>Employee Search</h1>
		<div class="md-form mt-0">
			<label>Employee ID:</label>
			<b-form-input class='inputBox' v-model="searchText" placeholder="Search" @update="getEmployee($event)"></b-form-input>
		</div>
		<div id="results">
			<span v-html="currentEmployee"></span>
		</div>
	</div>
</template>

<script>
import Axios from 'axios'
const base_url = 'http://dummy.restapiexample.com/api/v1'

// use http://dummy.restapiexample.com/ for the api
export default {
	data() { return {
		searchText: '',
		currentEmployee: "No Employee Found..."
	}},
	methods: {
		getEmployee(search) {
			
			Axios.get(`${base_url}/employee/${search}`).then(response =>{
				this.currentEmployee = response
			}).catch(() => {})
			
		}
	}
}
</script>