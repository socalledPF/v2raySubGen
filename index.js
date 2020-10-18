const Gists = require('gists')
const { GH_USERNAME, PASSWORD, SUBSCRIBE_GIST_ID, VMESS_GIST_ID } = process.env

const gists = new Gists({
  username: GH_USERNAME,
  password: PASSWORD
})

async function getVmess() {
  const { files: { 'v2ray_vmess.txt': { content } } } = await gists.get(VMESS_GIST_ID)
  console.log(content)
  return content
}

async function writeSubscribeContent() {
  const subscribeContent = await getVmess()
  await gists.edit(SUBSCRIBE_GIST_ID, {
    files: {
      'v2ray_subscribe.txt': {
        content: subscribeContent
      }
  
    }
  })
} 

async function run() {
  try {
    await writeSubscribeContent()
    console.log('😊 successfully generate subscribe link!')
  }
  catch (err) {
    console.log(err)
  }
}

run()