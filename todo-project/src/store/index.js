import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

/**
 * 状態を保持したい変数の管理
 */
const state = {
  todoList: []
}
/**
 * actionsはmutationsを利用して，アクションの処理を実装
 */
const actions = {
  addTodo ({ commit }, todo) {
    commit('addTodo', todo)
  },


}
/**
 * gettersはstateの値を取得するのに利用
 */
const getters = {
  getTodoList (state) {
    return state.todoList
  },
  getCount (state) {
    return state.todoList.length
  },

  
}
/**
 * mutationsは値の移り変わりの処理を実装
 */
const mutations = {
  addTodo (state, todo) {
    state.todoList.push(todo)
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})