export const state = () => ({
  // 開発時はfalseにしておくとよい
  isFirstLoading: true
})

export const mutations = {
  changeFirstLoading(state, newState) {
    state.isFirstLoading = newState
  }
}
