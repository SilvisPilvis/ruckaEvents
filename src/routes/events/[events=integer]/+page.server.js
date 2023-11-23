import { error } from '@sveltejs/kit';
import { mysqlConnection } from "$lib/db/mysql";

export async function load({params}) {
    if(!Number.isInteger(parseInt(params.events)) || parseInt(params.events) < 0){
        throw error(404);
    }
    let mysqlconn = await mysqlConnection();
    try {
      let results = await mysqlconn
        .query(`SELECT * FROM events WHERE id=?;`, [parseInt(params.events)])
        .then(function ([rows, fields]) {
          //        console.log(rows);
          return rows;
        });
        // console.log(results['length']);
      if(results['length'] <= 0){
        // console.log("No results");
        // throw error(404);
        throw error(404);
      }else{
        return {
        data: results,
        };
      }
    } catch (error) {
      console.error("Got an error!!!");
      console.log(error);
      return error;
    }
}