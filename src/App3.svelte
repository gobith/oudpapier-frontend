<script lang="ts">
  import { Router, Route, navigate, link } from "svelte-navigator";

  import Algemeen from "./user/Algemeen.svelte";
  import Inschrijven from "./user/Inschrijven.svelte";
  import Rooster from "./user/Rooster.svelte";
  import Landing from "./Landing1.svelte";
  import userStore from "./stores/user-store";

  const logout = () => {
    fetch("/logout")
      .then((response) => response.json())
      .then((json) => userStore.set(json));
    navigate("/");
  };
</script>

<div>
  {#if $userStore.loggedIn}
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="./algemeen" use:link>Algemeen</a>
          </li>
          <li>
            <a href="./inschrijven" use:link>Inschrijven</a>
          </li>
          <li>
            <a href="./rooster" use:link>Rooster</a>
          </li>

          {#if $userStore.isAdmin}
            <a href="./" use:link>Admin</a>
          {/if}

          <li>
            <a href="./" use:link
              ><img
                class="logo"
                src="logo-ac-waterland-100x100px.png"
                alt="acw"
              /></a
            >
          </li>

          <li><button on:click={logout}>Uitloggen</button></li>
        </ul>
      </nav>

      <div class="main-content">
        <Router primary={false}>
          <Route path="/algemeen">
            <Algemeen />
          </Route>

          <Route path="/inschrijven">
            <Inschrijven />
          </Route>

          <Route path="/rooster">
            <Rooster />
          </Route>
        </Router>
      </div>
    </div>
  {:else}
    <Landing />
  {/if}
</div>

<style>
  :global(*) {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 12px;
  }
  :global(body) {
    height: 100vh;
    width: 100vw;
    margin: 0px;
    padding: 0px;
  }
  .container {
    display: grid;
    height: 100vh;
    grid-template-rows: 5rem 1fr;
  }

  .main-content {
    z-index: 1;
    overflow: auto;
  }

  nav {
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 2;
  }

  nav a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background: rgba(255, 255, 255, 1);
    font-size: 1.5rem;
    height: 5rem;
  }

  button {
    color: black;
    background: rgba(255, 255, 255, 1);
    font-size: 1.5rem;
    height: 5rem;
    border: none;
    cursor: pointer;
  }

  button:hover,
  nav a:hover {
    color: rgba(236, 25, 33, 1);
    text-decoration: none;
  }

  nav ul {
    list-style: none;
    display: flex;
  }

  nav li {
    position: relative;
    width: 100%;
    text-align: center;
  }

  nav li:hover .dropdown-1 > li {
    display: block;
    top: 0;
  }

  nav li:hover .dropdown-1 {
    border: 2px solid rgba(0, 0, 0, 0.16);
    border-top: none;
  }

  .dropdown-1 li {
    display: none;
    position: relative;
  }

  .dropdown-1 {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .dropdown-1 li:hover {
    display: block;
  }

  .logo {
    width: 4.5rem;
    height: 4.5rem;
  }
</style>
