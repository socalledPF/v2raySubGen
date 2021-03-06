
import axios from 'axios'
const { GH_TOKEN, SUBSCRIBE_GIST_ID, VMESS_GIST_ID } = process.env



const ghRequest = axios.create({
  headers: {
    "Authorization": `token ${GH_TOKEN}`
  },
  baseURL: 'https://api.github.com'
})

async function getVmess() {
  const { data: { files: { 'v2ray_vmess.txt': { content } } } }= await ghRequest.get(`/gists/${VMESS_GIST_ID}`)
  return content
}

async function editVemss(files, gistId) {
  const res = await ghRequest.patch(`/gists/${gistId}`, {
    "gist_id": gistId,
    files
  })
  console.log(res.data)
}

async function writeSubscribeContent() {
  const vmessContent = await getVmess()
  const subscribeContent = Buffer.from(vmessContent).toString('base64')
  const files = {
    'v2ray_subscribe.txt': {
      content: subscribeContent
    }
  }
  await editVemss(files, SUBSCRIBE_GIST_ID)
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