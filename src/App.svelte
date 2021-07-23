<script lang="ts">
    import userStore from "./stores/user-store";
    import Landing from "./Landing.svelte";
    import Admin from "./Admin.svelte";
</script>

<div>
    {#if $userStore.showAdmin}
        <Admin />
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
        margin: 0px;
        padding: 0px;
    }
</style>
