const express = require('express')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// 指向 Vue 项目的构建目录
const vueAppPath = path.resolve(__dirname, '../web-vue3/dist')

app.use(express.static(vueAppPath))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(vueAppPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
