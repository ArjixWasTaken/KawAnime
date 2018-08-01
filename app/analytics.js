const path = require('path')
const fs = require('fs')
const axios = require('axios')
const { userInfo, homedir } = require('os')

// Let's send some data to kawanime.com/_api
const { username } = userInfo()

const tokenPath = path.join(homedir(), '.KawAnime', '_token')
const token = fs.readFileSync(tokenPath, 'utf-8')

axios.post('https://kawanime.com/_api', {
  id: `${username}/${token}`
})
  .catch((err) => { console.error('Couldn\'t reach KawAnime.com\'s api:', err.message) })
