const handleUserRouter = require("./src/router/user")
const handleBlogRouter = require("./src/router/blog")

const serverHandle = (req, res) => {
  res.setHeader("Content-type", "application/json")

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
}

module.exports = serverHandle
