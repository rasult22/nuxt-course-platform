export default function ({ route, store, redirect }) {
  // If the user is not authenticated
  const token = localStorage.getItem('_token')
  const user = JSON.parse(JSON.stringify(localStorage.getItem('_user')))
  if (token) {
    console.log('1')
    store.commit('SET_TOKEN', token)
    store.commit('SET_USER', user)
  }
  if (!store.state.token && route.name !== 'login') {
    return redirect('/login')
  }
}
