const PORT = 3001;
const server = require("./index");
const { db } = require("./db");

const init = async () => {
  try {
    await db.sync();
    server.listen(PORT, () =>
      console.log(`
       Listening on port ${PORT}
       http://localhost:${PORT}
       `)
    );
  } catch (error) {
    console.log("There was an error!", error);
  }
};

init();
