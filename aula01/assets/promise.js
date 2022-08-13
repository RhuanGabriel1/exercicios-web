const fs = require("fs")

const readFiles = async () => {
  try {
      const paths = await fs.promises.readdir("../");
      return paths;
  } catch (error) {
      return new Error("Deu erro!");
  }
};

(async () => {
  console.log(await readFiles());
})()