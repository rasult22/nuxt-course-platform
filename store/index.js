
export const state = () => ({
  token: '',
  auth: {
    user: null
  }
})

export const getters = {
  token: ({token}) => `Bearer ${ token }`,
  isAuthenticated: ({ token }) => !!token
}
export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },

  SET_USER: (state, user) => {
    state.auth.user = user
  }
}

  // actions
export const actions = {
  async register ({ commit }, { username, password, email }) {
    try {
      const { data } = await this.$axios.post('/auth/local/register', {
        username,
        email,
        password
      })
      localStorage.setItem('_token', data.jwt)
      localStorage.setItem('_user', JSON.stringify(data.user))
      commit('SET_USER', data.user)
      commit('SET_TOKEN', data.jwt)
      
    } catch (err) {
      console.error(err)
    }
  },
  async login ({ commit }, { identifier, password }) {
    try {
      const { data } = await this.$axios.post('/auth/local', {
        identifier,
        password
      })
      localStorage.setItem('_token', data.jwt)
      localStorage.setItem('_user', JSON.stringify(data.user))
      commit('SET_USER', data.user)
      commit('SET_TOKEN', data.jwt)
    } catch (err) { 
      console.error(err)
    }
  }
}