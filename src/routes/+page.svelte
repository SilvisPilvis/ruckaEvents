<script>
    export let data;
    // export let form;
    // console.log(data.data);
</script>

<main>
<div class="calendar">
    {#each Array(31) as _, i}
    <!-- <p>{data.data}</p> -->
        {#each data.data as event}
            {#if event['startDate'].slice(-2) == i+1 }
                <div class="tile" id="{i+1}" style="background-color: {event['color']};">{i + 1} <a href="/events/{event['id']}">{event['eventName']}</a></div>
            {:else}
            <div class="tile" id="{i+1}">{i + 1}</div>
            {/if}
        {/each}
    {/each}
</div>

<!-- {#each data.data as event}
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
        </div>
    </article>
</a>
{/each} -->
</main>

<style>
/* .grid{
    display: grid;
} */
main{
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
}
.calendar{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
}
.tile{
    display: flex;
    flex-direction: column;
    width: calc(100%/7);
    height: calc(100%/5);
    border: 1px solid cornflowerblue;
    background-color: azure;
    color: black;
}
a{
    display: flex;
    align-items: center;
    position: absolute;
    width: calc(100%/7);
    height: calc(100%/5);
    color: black;
    text-decoration: none;
    /* border: 1px solid cornflowerblue; */
}
@media only screen and (max-width: 600px) {
    .calendar{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: calc(100vw - 2.5rem);
        height: calc(100vh - 20rem);
    }
    .tile{
        width: calc(100%/7);
        height: calc(100%/5);
        border: 1px solid cornflowerblue;
        background-color: azure;
    }
}
/* .row{
    display: flex;
    flex-direction: row;
}
p{
    margin: 0;
    margin-left: 0.3rem;
}
main{
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
h3{
    margin-bottom: 0.2rem;
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
} */
</style>