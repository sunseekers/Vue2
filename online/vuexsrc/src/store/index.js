
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const getters={
	count(state){
		return state.count
	}
}
const state={
	count: 80
};
const actions={
	increase:({commit})=>{
		commit('increase');
	}
};
const mutations={
	increase(state){
		state.count++
	}
};
export default new Vuex.Store({
 	getters,
 	actions,
 	state,
 	mutations
 });