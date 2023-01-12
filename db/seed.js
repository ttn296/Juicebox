const { client, getAllUsers, dropTables} = require('./index');


async function testDB() {
    try {
        client.connect();
        const result = await client.query(`SELECT * FROM users;`);
        console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
        client.end();
    }
  }
  
  async function testDB() {
    try {
      client.connect();
  
      const users = await getAllUsers();
      console.log(users);
      console.log('hello world')
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }
  
  // async function dropTables() {
  //   try {
  //     await client.query(`
  //      DROP TABLE IF EXISTS users;
  //     `);
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  testDB();
 