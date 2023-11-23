<script>
import { mysqlConnection } from "$lib/db/mysql";
connection = mysqlConnection();
connection.execute(
  'SELECT * FROM events WHERE `name` = ? AND `age` > ?',
  ['Rick C-137', 53],
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available

    // If you execute same statement again, it will be picked from a LRU cache
    // which will save query preparation time and give better performance
  }
);

let password, username;
async function login() {
    // console.log(username, password, apikey);
    try {
        const response = await axios.post('/api.php');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
</script>

<main>
    <input type="text" placeholder="lietotajvards" bind:value={username}>
    <input type="password" name="" id="" placeholder="parole" bind:value={password}>
    <input type="submit" value="Ielogoties" on:click={login}>
</main>

<style>
    main{
        height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    input{
        background-color: #9e004f;
        color: white;
        font-size: 26px;
        border: none;
        border-radius: 0.2rem;
        margin: 0.5rem;
        width: 20rem;
        height: 3rem;
    }
</style>