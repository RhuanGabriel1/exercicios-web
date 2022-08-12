const fs = require("fs")
fs.readdir("./", (err, paths) => {
  console.log(paths)
})
