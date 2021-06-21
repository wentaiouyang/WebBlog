const { getList, getDetail } = require("../controller/blog")
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split("?")[0]
  // const query = url.split("?")[1]

  // get blog list
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || ""
    const keyword = req.query.keyword || ""
    const listData = getList(author, keyword)

    return new SuccessModel(listData)
  }

  // get blog detail
  if (method === "GET" && req.path === "/api/blog/detail") {
    const id = req.query.id
    const data = getDetail(id)

    return new SuccessModel(data)
  }

  // post new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    return {
      msg: "this is api for posting new blog",
    }
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
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
