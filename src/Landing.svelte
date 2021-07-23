<script lang="ts">
  import userStore from "./stores/user-store";
  import { fade } from "svelte/transition";
  import ScheduleInfo from "./ScheduleInfo.svelte";

  const login = () => {
    let url = "/login";
    let username = "Coos Lohman";
    let password = "9230";
    let headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(username + ":" + password));

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

<div class="container">
  <div class="showcase">
    <div class="overlay">
      <div class="overlay-top">
        {#if $userStore.loggedIn}
          <button on:click={logout}>Log uit</button>
        {:else}
          <button on:click={login}>Log in</button>
        {/if}
      </div>
      <div />
      <div />
      <div class="overlay-bottom">
        <h1>ACW OUDPAPIER</h1>
        {#if $userStore.loggedIn}
          <p class="under-title" in:fade>Welkom {$userStore.name}</p>
        {/if}
      </div>
    </div>
  </div>

  {#if $userStore.loggedIn}
    <div class="info">
      <p class="scheduled-title">
        Je bent de rest van het jaar nog ingepland op de volgende dagdelen:
      </p>

      {#each $userStore.scheduled as scheduleInfo}
        <ScheduleInfo {scheduleInfo} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .container {
  }
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
    /* justify-self: end; */
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
  .scheduled-title {
    font-size: clamp(1.5rem, 5vw, 3rem);
    padding: 3rem;
    text-align: center;
  }
</style>
