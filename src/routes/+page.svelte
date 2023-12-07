<script>
    import * as jq from "jquery";
    export let data;
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const daysInCurrentMonth = getDaysInMonth(currentYear,currentMonth-1);
    // console.log(daysInCurrentMonth);
    function showPopup(id){
        if(jq(`.popup${id}`).attr('id')){
            console.log('Has id, showing');
            jq(`.popup${id}`).removeAttr('id');
        }else{
            console.log('No id, hiding.');
            jq(`.popup${id}`).attr('id', 'hidden');
        }
    }
    //onclick show box position absolute
    // export let form;
    // console.log(data.data);
</script>

<main>
<div class="calendar">
    {#each Array(daysInCurrentMonth) as _, i}
    <!-- <p>{data.data}</p> -->
        {#each data.data as event}
            {#if new Date(event['startDate']).getDate() == i+1 }
                <!-- <div class="tile" id="{i+1}" style="background-color: {event['color']};">{i + 1} <a href="/events/{event['id']}">{event['eventName']}</a></div> -->
                <div class="tile" id="{i+1}" style="background-color: {event['color']};" on:click={() => showPopup(i+1)}>{i + 1} <p>{event['eventName']}</p></div>
                <div id="hidden" class="popup{i+1} box">
                    <button on:click={() => showPopup(i+1)}>X</button>
                    <div class="cen col">
                        <p class="box-data">{event['eventName']}</p>
                        <p class="box-data">{event['startDate']}</p>
                        <p class="box-data">{event['startTime']}</p>
                        <p class="box-data">{event['eventDescription']}</p>
                        <p>Kontakti:</p>
                        <p class="box-data">{event['contactPhone']}</p>
                        <p class="box-data">{event['contactEmail']}</p>
                    </div>
                </div>
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
:root{
    --calendarWidth: 60%;
    --calendarHeight: 80%;
}
#hidden{
    display: none;
}
.cen{
    display: flex;
    justify-content: center;
    align-items: center;
}
.col{
    display: flex;
    flex-direction: column;
}
.box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(50, 50, 50, 0.7);
    padding-bottom: 1rem;
}
/* .box > p{
    margin-top: 3rem;
} */
.box-data{
    width: 90%;
    margin: 0;
}
.box > button{
    position: relative;
    /* right: 0%; */
    top: -35%;
    margin: 0;
    margin-left: auto;
    border-radius: 0.1rem;
    background-color: brown;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: small;
    width: 1.2rem;
    height: 1.2rem;
}
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
    width: var(--calendarWidth);
    height: var(--calendarHeight);
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
.tile > p{
    font-size: auto;
}
/* a{
    display: flex;
    align-items: center;
    position: absolute;
    width: calc(var(--calendarWidth)/7);
    height: calc(var(--calendarHeight)/5);
    color: black;
    text-decoration: none;
} */
@media only screen and (max-width: 600px) {
    .calendar{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 100vw;
        height: calc(100vh - 40%);
    }
    .tile{
        font-size: 10px;
        width: calc(100%/7);
        height: calc(100%/5);
        border: 1px solid cornflowerblue;
        background-color: azure;
    }
    .box{
        width: 90vw;
        height: 50vh;
        font-size: 10px;
    }
    .tile > p{
        font-size: 10px;
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