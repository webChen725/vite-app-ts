import { ActionContext } from "vuex";

interface HomeState {
  msg: string
}

// 等待ajax数据注入
const state: HomeState = {
  msg: "Hello World"
}

const mutations = {
  setMsg(state: HomeState, msg: string) {
    state.msg = msg;
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}