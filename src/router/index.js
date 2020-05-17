import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'
import Category from '../views/Category.vue'
import FilteredCategory from '../views/FilteredCategory.vue'
import Ingredient from '../views/Ingredient.vue'
import FilteredIngredient from '../views/FilteredIngredient.vue'
import Cuisine from '../views/Cuisine.vue'
import FilteredCuisine from '../views/FilteredCuisine.vue'
import Favorite from '../views/Favorite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/filteredCategory/:name',
    name: 'FilteredCategory',
    component: FilteredCategory
  },
  {
    path: '/ingredient',
    name: 'Ingredient',
    component: Ingredient
  },
  {
    path: '/filteredIngredient/:name',
    name: 'FilteredIngredient',
    component: FilteredIngredient
  },
  {
    path: '/cuisine',
    name: 'Cuisine',
    component: Cuisine
  },
  {
    path: '/filteredCuisine/:name',
    name: 'FilteredCuisine',
    component: FilteredCuisine
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
