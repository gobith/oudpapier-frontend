<script>
  import users from "./stores/users-store.ts";
  import years from "./stores/years-store.ts";
</script>

<main>
  {#if $users}
    {#each $users as user}
      <div>{user.name}</div>
    {/each}
  {/if}
  {#if $years}
    {#each $years as year}
      <div>{year.year}</div>
    {/each}
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
