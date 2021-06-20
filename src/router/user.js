const handleUserRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split("?")[0]

  // Login
  if (method === "POST" && req.path === "/api/user/login") {
    return {
      msg: "this is api for login",
    }
  }
}

module.exports = handleUserRouter
