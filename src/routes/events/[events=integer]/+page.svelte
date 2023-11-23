<script>
export let data;
// console.log(data.data);
</script>

<main>
    {#each data.data as event}
    <article style="border: 10px solid {event['color']}; border-radius:0.2rem; background-image: url('http://localhost:5173/src/lib/images/{event['bgImage']}'); background-size: cover; background-repeat: no-repeat; width: 35rem; height: 25rem;">
        <img class="logo" src="/src/lib/images/{event['logo']}" alt="">
        <div style="background-color: {event['color']}; position: relative; bottom: 0px;">
            <h3>{event['eventName']}</h3>
            <p>{event['eventDescription']}</p>
            <input type="date" name="" id="" value={event['startDate']} style="background-color: {event['color']};" disabled>
            <input type="date" name="" id="" value="{event['endDate']}" readonly style="background-color: {event['color']};" disabled>
        </div>
    </article>
    {/each}
</main>

<style>
input{
    border: none;
}
.logo{
    margin-right: auto;
    max-width: 10rem;
    max-height: 10rem;
    min-width: 5rem;
    min-height: 5rem;
}
div{
    margin-top: auto;
    margin-left: auto;
    width: calc(35rem / 3 * 2);
    padding: 0.2rem;
}
article{
    display: flex;
    flex-direction: column;
    align-items: end;
}

/* article > div{
    align-items: end;
} */
</style>