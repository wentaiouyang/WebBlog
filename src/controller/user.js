const loginCheck = (username, password) => {
  if (username === "tom" && password === "123") {
    return true
  } else {
    return false
  }
}

module.exports = {
  loginCheck,
}
