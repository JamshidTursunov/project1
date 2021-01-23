export function register({ commit }, { email, name, password }) {
  try {
    commit('setIsAuthorized', true)
    const user = {
      email,
      name,
      password,
    }
    commit('setUser', user)
    localStorage.setItem('credentials', JSON.stringify(user))
  } catch {
    commit('setIsAuthorized', false)
    localStorage.removeItem('credentials')
    throw new Error('Could not register')
  }
}

export function login({ commit }, { email, password }) {
  try {
    commit('setIsAuthorized', true)
  } catch {
    commit('setIsAuthorized', false)
  }
}

export function logout({ commit }) {
  commit('setIsAuthorized', false)
}
