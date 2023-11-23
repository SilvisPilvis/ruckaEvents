// import { mysqlConnection } from "$lib/db/mysql";
// export async function POST({ request }) {
//     const formData = await request.formData()
//     console.log(formData);
//     return;
//     // const todo = String(formData.get('todo'))
  
//     // const data = {
//     //   success: false,
//     //   errors: {}
//     // }
  
//     // if (!todo) {
//     //   data.errors.todo = 'required'
//     //   return json(data, { status: 400 })
//     // }
  
//     // // addTodo(todo)
//     // data.success = true
  
//     // return json(data)
// }
// let mysqlconn = await mysqlConnection();
    //     try {
    //         let results = await mysqlconn.execute(
    //         'INSERT INTO events(eventName, eventDescription, startDate, endDate, contactPhone, comtactEmail, logo, color, bgImage) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);',
    //         [title, description, startDate, endDate, phone, email, color, bgImage[0]['name']],
    //         function(err, results, fields) {
    //             console.log(results); // results contains rows returned by server
    //             console.log(fields); // fields contains extra meta data about results, if available
        
    //             // If you execute same statement again, it will be picked from a LRU cache
    //             // which will save query preparation time and give better performance
    //         }
    //         )
    //         //   .query("INSERT INTO events(eventName, eventDescription, startDate, endDate, contactPhone, comtactEmail, logo, color, bgImage) VALUES();")
    //         // .query("SELECT * FROM events;")
    //         .then(function ([rows, fields]) {
    //             //        console.log(rows);
    //             return rows;
    //         });

    //         return {
    //         data: results,
    //         };
    //     } catch (error) {
    //         console.error("Got an error!!!");
    //         console.log(error);
    //         return error;
    //     }