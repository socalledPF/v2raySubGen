const Gists = require('gists')
const { VMESS_LINK, GH_USERNAME, PASSWORD, GIST_ID } = process.env

const gists = new Gists({
  username: GH_USERNAME,
  password: PASSWORD
})

const vmessBuf = Buffer.from(VMESS_LINK)
const subscribeContent = vmessBuf.toString('base64')

gists.edit(GIST_ID, {
  files: {
    'v2ray_subscribe.txt': {
      content: subscribeContent
    }

  }
})
  .then(() => console.log('😊 successfully generate subscribe link!'))
  .catch(err => console.error(err))