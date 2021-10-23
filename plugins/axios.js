export default ({ $axios, store }) => {
  $axios.onRequest((config) => {
    config.headers.common['X-Auth-Token'] = store.state.token
  })
}
