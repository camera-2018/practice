import axios from 'axios'

axios.defaults.baseURL = 'http://api.xyxsw.ltd'

export const ApiGet = (path, params, config) => {
  return axios.get(path, {
    params,
    ...config,
  })
}

export const ApiPost = (path, data, config) => {
  return axios.post(path, data, config)
}