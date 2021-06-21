const handleUserRouter = require("./src/router/user")
const handleBlogRouter = require("./src/router/blog")
const querystring = require("querystring")

// handle post data
const getPostData = (req) => {
  const promise = new Promise((resolve, reject) => {
    if (req.method !== "POST") {
      resolve({})
      return
    }
    if (req.headers["content-type"] !== "application/json") {
      resolve({})
      return
    }
    let postData = ""
    req.on("data", (chunk) => {
      postData += chunk.toString()
    })

    req.on("end", () => {
      if (!postData) {
        resolve({})
        return
      }
      resolve(JSON.parse(postData))
    })
  })
  return promise
}

const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json")

  // get path
  const url = req.url
  req.path = url.split("?")[0]

  // query
  req.query = querystring.parse(url.split("?")[1])

  // handle postData
  getPostData(req).then((postData) => {
    req.body = postData

    // handle blog router
    const blogData = handleBlogRouter(req, res)
    if (blogData) {
      res.end(JSON.stringify(blogData))
      return
    }

    // handle user router
    const userData = handleUserRouter(req, res)
    if (userData) {
      res.end(JSON.stringify(userData))
      return
    }

    // router not exist, return 404
    res.writeHead(404, { "Content-type": "text/plain" })
    res.write("404 Not Found\n")
    res.end()
  })
}

module.exports = serverHandle
