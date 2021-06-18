const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split("?")[0]
  // const query = url.split("?")[1]

  // get blog list
  if (method === "GET" && path === "/api/blog/list") {
    return {
      msg: "this is api for blog list",
    }
  }

  // get blog detail
  if (method === "GET" && path === "/api/blog/detail") {
    return {
      msg: "this is api for blog detail",
    }
  }

  // post new blog
  if (method === "POST" && path === "/api/blog/new") {
    return {
      msg: "this is api for posting new blog",
    }
  }

  // update a blog
  if (method === "POST" && path === "/api/blog/update") {
    return {
      msg: "this is api for updating blog",
    }
  }

  // delete a blog
  if (method === "POST" && path === "/api/blog/del") {
    return {
      msg: "this is api for deleting blog",
    }
  }
}

module.exports = handleBlogRouter
