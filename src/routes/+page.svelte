<script>
    export let data;

    // console.log(data.data);
</script>

<main>
{#each data.data as event}
<a href="/events/{event['id']}">
    <article style="border: 10px solid {event['color']}; border-radius:0.2rem; background-image: url('src/lib/images/{event['bgImage']}'); background-size: cover; background-repeat: no-repeat; width: 35rem; height: 25rem;">
        <img class="logo" src="/src/lib/images/{event['logo']}" alt="">
        <div style="background-color: {event['color']}; position: relative; bottom: 0px;">
            <h3>{event['eventName']}</h3>
            <p>{event['eventDescription']}</p>
            <div class="row">
                <p>{event['contactPhone']}</p>
                <p>{event['contactEmail']}</p>
            </div>
            <!-- <input type="date" name="" id="" value={event['startDate']} style="background-color: {event['color']};" disabled>
            <input type="date" name="" id="" value="{event['endDate']}" readonly style="background-color: {event['color']};" disabled> -->
        </div>
    </article>
</a>
{/each}
</main>

<style>
.row{
    display: flex;
    flex-direction: row;
}
p{
    margin: 0;
    margin-left: 0.3rem;
}
main{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
h3{
    margin-bottom: 0.2rem;
}
a{
    text-decoration: none;
    color: white;
    padding: 0;
    margin: 1rem;
    height: auto;
}
[role=link], a {
    color: white;
}
article{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0;
    margin: 0;
    align-items: end;
}
div{
    width: calc(35rem / 3 * 2);
    height: 50%;
    padding: 0.2rem;
    margin-top: auto;
    margin-left: auto;
}
input{
    border: none;
    height: 1rem;
}
.logo{
    max-width: 10rem;
    max-height: 10rem;
    min-width: 5rem;
    min-height: 5rem;
    margin-right: auto;
}
</style>