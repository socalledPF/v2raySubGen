const Gists = require('gists')
const { GH_USERNAME, PASSWORD, SUBSCRIBE_GIST_ID, VMESS_GIST_ID } = process.env

const gists = new Gists({
  username: GH_USERNAME,
  password: PASSWORD
})

async function getVmess() {
  const { body: { files: { 'v2ray_vmess.txt': { content } } } }= await gists.get(VMESS_GIST_ID)
  return content
}

async function writeSubscribeContent() {
  const vmessContent = await getVmess()
  const subscribeContent = Buffer.from(vmessContent).toString('base64')
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