<script>
    // import logo_8f9a50 from '$lib/images/rucka_8f9a50.png';
    // import logo_9e004f from '$lib/images/rucka_9e004f.png';
    // import logo_548eaf from '$lib/images/rucka_548eaf.png';
    // import logo_616359 from '$lib/images/rucka_616359.png';
    // import logo_af4836 from '$lib/images/rucka_af4836.png';
    // import logo_d9992d from '$lib/images/rucka_d9992d.png';
// import { mysqlConnection } from "$lib/db/mysql";
let logo = 0;
let title, description, startDate, endDate, phone, email;
let color, bgImage;

function upload() {
    bgImage[0]['name'];
    // const formData = new FormData();
    // formData.append('damName', value);
    // formData.append('dataFile', files[0]);
}

function test(){
    console.log(bgImage[0]['name']);
}

</script>

<main>
    <form method="POST" enctype="multipart/form-data">
        {#if logo !== 0}
            <p>Izvēlēts {logo}</p>
            <img src="http://localhost:5173/src/lib/images/{logo}" alt="">
        {/if}
        <label>
            Logo:
            <select name="muizaLogo" id="" bind:value={logo}>
                <option value="rucka_8f9a50.png">Dabas Zaļa</option>
                <option value="rucka_9e004f.png">Aveņu Sarkana</option>
                <option value="rucka_548eaf.png">Debesu Zila</option>
                <option value="rucka_616359.png">Akmens Pelēka</option>
                <option value="rucka_af4836.png">Māla Brūna</option>
                <option value="rucka_d9992d.png">Smilšu Dzeltena</option>
            </select>
        </label>
        <label>
            Pasākuma nosaukums:
            <input type="text" name="eventName" bind:value={title}>
        </label>
        <label>
            Pasākuma apraksts:
            <textarea name="eventDescription" id="" cols="30" rows="10" bind:value={description}></textarea>
        </label>
        <!-- <label>
            Sākuma datums:
            <input type="date" name="startDate" id="" bind:value={startDate}>
        </label>
        <label>
            Beigu datums:
            <input type="date" name="endDate" id="" bind:value={endDate}>
        </label> -->
        <label>
            Pasakuma pieteiksanas epasts:
            <input type="email" name="contactEmail" id="" placeholder="ruckasm@gmail.com" bind:value={email}>
        </label>
        <label>
            Pasakuma pieteiksanas talrunis:
            <input type="tel" name="contactPhone" id="" placeholder="29437258" bind:value={phone}>
        </label>
        <label>
            Fona Bilde:
            <input type="file" name="bgImage" id="fileUpload" accept="image/*" bind:files={bgImage} on:change={test}>
        </label>
        <button>Saglabāt</button>
    </form>
</main>

<style>
    form{
        height: 100vh;
    }
    form{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }
    img{
        min-width: 7rem;
        max-width: 7rem;
        min-height: 5rem;
        max-height: 5rem;
    }
    input, select, button{
        width: 16rem;
        height: 3rem;
    }
    textarea{
        width: 20rem;
        resize: none;
    }
</style>