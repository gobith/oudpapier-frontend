<script lang="ts">
    import userStore from "./stores/user-store";
    import { fade } from "svelte/transition";

    const login = () => {
        let url = "/login";
        let username = "Georges Kerssies";
        let password = "1275";
        let headers = new Headers();
        headers.set(
            "Authorization",
            "Basic " + btoa(username + ":" + password)
        );

        fetch(url, { method: "GET", headers: headers })
            .then((response) => response.json())
            .then((json) => userStore.set(json));
    };

    const logout = () => {
        fetch("/logout")
            .then((response) => response.json())
            .then((json) => userStore.set(json));
    };
</script>

<div>
    <div class="showcase" />

    {#if true}
        <div class="info">
            <p>
                Blahasfdjaspdjfhsadkjfhaskjdfhpsadh fpsakjdfhpsakjdfhpaskjdf
                hpaskjdfhpaskjdfhpasfhpaskjdfhpaskjdhfpa
                skjdhfpaskjdhfpkjasdhfpkjsadhfpkjsadhfpkjhsadp fkjsdahf psadjfh
                sajdhf pasd hfpkajsdh fpjkasdh fpkjashd pfkjhas dpkfjh psakjdfh
                psakjdfh psadf
            </p>
        </div>
    {/if}
</div>

<style>
    .showcase {
        background-image: url("/20200919_111401.jpg");
        background-size: cover;
        background-position: center;
        height: 100vh;
        background-blend-mode: difference;
    }

    .overlay {
        background-size: cover;
        height: 100vh;
        display: grid;
        grid-template-rows: min-content 1fr 1fr 1fr;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .overlay-top {
        justify-self: end;
    }

    .overlay-bottom {
        justify-self: center;
    }

    h1 {
        font-size: clamp(3rem, 5vw, 9rem);
        color: rgba(255, 255, 255, 0.8);
        padding-top: 3rem;
        padding-bottom: 1rem;
    }

    button {
        margin: 2rem;
        font-size: 2rem;
        background-color: rgba(0, 0, 0, 0.4);
        color: rgba(255, 255, 255, 1);
        /* padding: 1.5rem; */
        border: 1px solid white;
        cursor: pointer;
    }

    button:hover {
        background-color: rgba(0, 0, 0, 0.6);
    }
    .under-title {
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.9);
        padding: 1.2rem;
        text-align: center;
    }
    .info {
    }
</style>
