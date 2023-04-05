#!/usr/bin/env node

import axios from 'axios'

let data = {
  msg_type: 'text',
  content: {
    text: '有新的笔记上传👻',
  },
}

const res = await axios({
  method: 'post',
  url: 'https://open.feishu.cn/open-apis/bot/v2/hook/e00f91d3-a673-4577-ac44-818cb98f2b6d',
  data,
})

console.log(res.data)
