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

module.exports = {
  getList,
}
