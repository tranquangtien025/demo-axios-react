import axios from "axios"

const instance = axios.create({
  baseURL: "https://62e5f10dde23e2637924f2ba.mockapi.io/api/v1/",
  timeout: 3000
})

export const getService = (endpoint, config) => {
  return instance.get(endpoint, config)
}

export const getDetailService = (id, config) => {
  return instance.get(`/users/${id}`, config)
}

export const postService = (endpoint, body, config) => {
  return instance.post(endpoint, body, config)
}

export const putService = (id, body, config) => {
  return instance.put(`/users/${id}`, body, config)
}

export const deleteService = (id, config) => {
  return instance.delete(`/users/${id}`, config)
}