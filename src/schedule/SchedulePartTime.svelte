<script lang="ts">
    import SchedulePartTimeUser from "./SchedulePartTimeUser.svelte";
    export let partTime;
    export let users;
</script>

<div>
    <div class="title">{partTime.shortName}</div>
    {#each users as user}
        <SchedulePartTimeUser {user} {partTime} />
    {/each}
</div>

<style>
    .title {
        text-align: center;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
        padding-right: 0.3rem;
        padding-left: 0.3rem;
    }
</style>
