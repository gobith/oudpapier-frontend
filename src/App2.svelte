<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Landing from "./Landing.svelte";
  import Oudpapier from "./Oudpapier.svelte";
</script>

<Router primary={false}>
  <Route path="*">
    <Landing />
  </Route>
  <Route path="/oudpapier">
    <Oudpapier />
  </Route>
</Router>

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
</style>
