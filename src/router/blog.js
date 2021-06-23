const {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
} = require("../controller/blog")
const { SuccessModel, ErrorModel } = require("../model/resModel")

const handleBlogRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const id = req.query.id
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
    const data = getDetail(id)
    return new SuccessModel(data)
  }

  // post new blog
  if (method === "POST" && req.path === "/api/blog/new") {
    const blogData = req.body
    const data = newBlog(blogData)
    return new SuccessModel(data)
  }

  // update a blog
  if (method === "POST" && req.path === "/api/blog/update") {
    const updateData = req.body
    const result = updateBlog(id, updateData)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel("UPDATE FAIL")
    }
  }

  // delete a blog
  if (method === "POST" && path === "/api/blog/del") {
    const result = delBlog(id)
    if (result) {
      return new SuccessModel()
    } else {
      return new ErrorModel("DELETE FAIL")
    }
  }
}

module.exports = handleBlogRouter
