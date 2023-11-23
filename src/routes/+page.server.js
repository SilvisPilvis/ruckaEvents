import { mysqlConnection } from "$lib/db/mysql";

export async function load() {
  let mysqlconn = await mysqlConnection();
  try {
    let results = await mysqlconn
      .query("SELECT * FROM events;")
      .then(function ([rows, fields]) {
        //        console.log(rows);
        return rows;
      });

    return {
      data: results,
    };
  } catch (error) {
    console.error("Got an error!!!");
    console.log(error);
    return error;
  }
}