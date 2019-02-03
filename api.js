const axios = require('axios')
const querystring = require('querystring')

module.exports = (req, res) => {
  const url = 'https://api.airtable.com/v0'
  const qs = querystring.parse(req.url.split('?')[1])
  const key = process.env.AIRTABLE_KEY
  const base = qs.base || 'NO_BASE_SPECIFIED'
  const tab = qs.tab || 'NO_TAB_SPECIFIED'
  const api = `${url}/${base}/${tab}?api_key=${key}`

  console.log(api, qs, url, base, tab, key)

  axios.get(api)
    .then(function (response) {
      res.end(JSON.stringify(response.data))
    })
    .catch(function (error) {
      res.end(error)
    })
}