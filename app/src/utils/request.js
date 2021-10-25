const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
}

const request = async (URL, options, headers = {}) => {
  return fetch(`${process.env.VUE_APP_API_URL}/${URL}`, {
    headers: {
      ...DEFAULT_HEADERS,
      ...headers
    },
    ...options
  }).then((response) => {
    if (response.ok) return response.json()
    throw response
  })
}

export const post = async (URL, data, headers) => {
  return request(URL, {
    ...headers,
    method: 'POST',
    body: JSON.stringify(data)
  })
}
