import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../components/Posts.vue'
import EmployeeSearch from '../components/EmployeeSearch.vue'
import Board from '../components/Board.vue'
import BoardPost from '../components/BoardPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',component: Board
  },
  {
    path: '/blog',
    name: 'posts',
    component: Posts
  },
  {
    path: '/employee-search',
    name: 'employee-search',
    component: EmployeeSearch
  },
  {
    path: '/board',
    name: 'board',
    component: Board
  },
  {
    path: '/board/posts/:postId',
    name: 'board-post',
    component: BoardPost 
  }
]

const router = new VueRouter({
  routes
})

export default router
