import axios from 'axios'

const api = (pat: string) =>
  axios.create({
    headers: {
      'Content-Type': 'application/json',
      'X-Figma-Token': pat,
    },
    baseURL: 'https://api.figma.com',
  })

export const getDesignToken = (pat: string, nodeId: string) =>
  api(pat).get(`/v1/files/${nodeId}/variables/local`)
