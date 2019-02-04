const axios = require('axios')
const querystring = require('querystring')
const url = 'https://api.airtable.com/v0'
const key = process.env.AIRTABLE_KEY
axios.defaults.headers.common['Authorization'] = `Bearer ${key}`

module.exports = (req, res) => {

  const qs = querystring.parse(req.url.split('?')[1])
  const base = qs.base
  const tab = qs.tab
  const api = `${url}/${base}/${tab}`

  if (!base || !tab) {
    console.error('Please define "base" and "tab" querystring params',
      api, qs, url, base, tab, key)
    process.exit(1)
  }

  axios.get(api)
    .then(function (response) {
      res.end(JSON.stringify(response.data))
    })
    .catch(function (error) {
      res.end(error)
    })
}