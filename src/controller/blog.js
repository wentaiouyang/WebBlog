const getList = (author, keywork) => {
  // return mock data
  return [
    {
      id: 1,
      title: "title1",
      content: "content1",
      createTime: 1624190643293,
      author: "tom",
    },
    {
      id: 2,
      title: "title2",
      content: "content2",
      createTime: 1624190612342,
      author: "david",
    },
  ]
}

const getDetail = (id) => {
  return [
    {
      id: 1,
      title: "title1",
      content: "content1",
      createTime: 1624190643293,
      author: "tom",
    },
  ]
}

const newBlog = (blogData = {}) => {
  // blogData is an object
  console.log("newBlog blogData", blogData)

  return {
    id: 3,
  }
}

const updateBlog = (id, updateData = {}) => {
  // updateData is an object
  console.log("updateData", updateData)
  console.log("id", id)

  return ture
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
}
