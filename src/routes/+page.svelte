<script>
    // import JSDOM from "JSDOM";
    // const { window } = new JSDOM( "" );
    import * as jq from "jquery";
    export let data;
    
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const daysInCurrentMonth = getDaysInMonth(currentYear,currentMonth-1);
    function showPopup(id){
        if(jq(`.popup${id}`).attr('id')){
            console.log('Has id, showing');
            jq(`.popup${id}`).removeAttr('id');
        }else{
            console.log('No id, hiding.');
            jq(`.popup${id}`).attr('id', 'hidden');
        }
    }
    //nonemt otru foreach loop

    //removes duplicate dates
    let filteredDates = [];
    for(let i = 0 ; i<data.data.length; i++ ){
        if(i <= data.data.length-2){
            if(new Date(data.data[i]['startDate']).getDate() == new Date(data.data[i+1]['startDate']).getDate()){
                console.log(`Duplicate @ ${i+1}`);
                filteredDates.push(data.data[i+1]);
                data.data.splice(i+1, 1);
            }
        }
    }
    // console.log(filteredDates);

    let eventDates = [];
    data.data.forEach(element => {
        // console.log(new Date(element.startDate).getDate());
        eventDates.push(new Date(element.startDate).getDate());
    });
    // console.log(data.data);
    // console.log(eventDates);
    // let test = jq(`.tile`).length;
    // console.log(test);
    //onclick show box position absolute
    // export let form;
    // console.log(jq('.tile'));
</script>
<!-- {#each filteredDates as event (event.id)}
<div class="tile" id="box-{event.id}" style="background-color: {event.color};" on:click={() => showPopup(event.id)}>
    <div>{event.id} <p>{event.eventName}</p></div>
    <div><p>{event.eventName}</p></div>
</div>
{/each} -->
<main>
<div class="calendar">
    <!-- paradit 1 tile bet taja box paradit info par visiem notikumiem -->
    {#each Array(daysInCurrentMonth) as _, i}
            {#if eventDates.includes(i+1)}
                {#each data.data as event, index}
                    {#if new Date(event.startDate).getDate() == i+1 && event.eventCount > 1 }
                        <!-- Ja ir vairaki eventi paradit vinus ka child elemetus -->
                        <div class="tile" id="box-{i+1} {index}" style="background-color: {event.color};" on:click={() => showPopup(i+1)}>
                            <!-- <div>{i + 1} <p>{event['eventName']} <b>+{event['eventCount']-1}</b></p></div> -->
                            <div id="{index}">{i + 1} <p>{event.eventName}</p></div>
                            {#each filteredDates as date, index}
                                <div id="{index}"><p>{date.eventName}</p></div>
                            {/each}
                        </div>
                        <!-- popup -->
                        <div id="hidden" class="popup{i+1} box">
                            <button on:click={() => showPopup(i+1)}>X</button>
                            <div class="cen col">
                                <p class="box-data">{event['eventName']}</p>
                                <p class="box-data">Datums: {new Date(event['startDate']).getDate()}/{new Date(event['startDate']).getMonth()}/{new Date(event['startDate']).getFullYear()}</p>
                                <p class="box-data">Laiks: {event['startTime']}</p>
                                <p class="box-data">{event['eventDescription']}</p>
                                <p>Kontakti:</p>
                                <p class="box-data">{event['contactPhone']}</p>
                                <p class="box-data">{event['contactEmail']}</p>
                            </div>
                            <!-- {#each filteredDates as filtered}
                                {#if new Date(filtered['startDate']).getDate() == new Date(event['startDate']).getDate()}
                                {console.log(filtered)}
                                    {filtered}
                                    <div class="cen col">
                                        <p class="box-data">{filtered['eventName']}</p>
                                        <p class="box-data">Datums: {new Date(filtered['startDate']).getDate()}/{new Date(filtered['startDate']).getMonth()}/{new Date(filtered['startDate']).getFullYear()}</p>
                                        <p class="box-data">Laiks: {filtered['startTime']}</p>
                                        <p class="box-data">{filtered['eventDescription']}</p>
                                        <p>Kontakti:</p>
                                        <p class="box-data">{filtered['contactPhone']}</p>
                                        <p class="box-data">{filtered['contactEmail']}</p>
                                    </div>
                                {/if}
                            {/each} -->
                        </div>
                    <!-- ja ir tikai 1 events -->
                    {:else if new Date(event['startDate']).getDate() == i+1}
                        <div class="tile" id="box-{i+1}" style="background-color: {event['color']};" on:click={() => showPopup(i+1)}>{i + 1} <p>{event['eventName']}</p>
                        </div>
                        <!-- popup -->
                        <div id="hidden" class="popup{i+1} box">
                            <button on:click={() => showPopup(i+1)}>X</button>
                            <div class="cen col">
                                <p class="box-data">{event['eventName']}</p>
                                <p class="box-data">Datums: {new Date(event['startDate']).getDate()}/{new Date(event['startDate']).getMonth()}/{new Date(event['startDate']).getFullYear()}</p>
                                <p class="box-data">Laiks: {event['startTime']}</p>
                                <p class="box-data">{event['eventDescription']}</p>
                                <p>Kontakti:</p>
                                <p class="box-data">{event['contactPhone']}</p>
                                <p class="box-data">{event['contactEmail']}</p>
                            </div>
                        </div>
                    {/if}
                {/each}
                    {:else}
                <!-- ja nav eventu -->
                <div class="tile" id="box-{i+1}">{i + 1}</div>
            {/if}
    {/each}
</div>
</main>

<style>
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