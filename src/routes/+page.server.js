import { mysqlConnection } from "$lib/db/mysql";

export async function load() {
  let mysqlconn = await mysqlConnection();
  try {
    let results = await mysqlconn
      // .query("SELECT * FROM events;")
      .query('SELECT e.*, t.eventCount FROM events e JOIN ( SELECT DATE(startDate) as eventDate, COUNT(*) as eventCount FROM events GROUP BY eventDate) t ON DATE(e.startDate) = t.eventDate;')
      .then(function ([rows, fields]) {
        //        console.log(rows);
        return rows;
      });

    return {
      data: results,
    };
    // return results;
  } catch (error) {
    console.error("Got an error!!!");
    console.log(error);
    return error;
  }
}