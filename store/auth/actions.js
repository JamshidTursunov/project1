export function register({ commit }, user) {
  try {
    commit('setIsAuthorized', true)
    commit('setUser', user)
    localStorage.setItem('credentials', JSON.stringify(user))
  } catch {
    commit('setIsAuthorized', false)
    localStorage.removeItem('credentials')
    throw new Error('Could not register')
  }
}

export function login({ commit }) {
  try {
    commit('setIsAuthorized', true)
    console.log('isAuthorized has been set')
  } catch {
    commit('setIsAuthorized', false)
  }
}

export function logout({ commit }) {
  localStorage.removeItem('credentials')
  commit('setIsAuthorized', false)
}
