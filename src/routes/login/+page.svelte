<script>
export let form;
</script>

<main>
    {#if form?.success}
        <p>Token</p>
        <p>{form?.token}</p>
        <!-- <p>{localStorage.getItem("auth")}</p> -->
    {/if}
    {#if form?.error}
        <div class="notice error">
        {form?.error}
        </div>
    {/if}
    <form action="" method="post">
        <input type="text" placeholder="lietotajvards" name="username">
        <input type="password" name="password" id="" placeholder="parole">
        <input type="submit" value="Ielogoties">
    </form>
</main>

<style>
    form{
        display: flex;
        flex-direction: column;
    }
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