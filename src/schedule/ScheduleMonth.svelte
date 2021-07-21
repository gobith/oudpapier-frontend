<script lang="ts">
    import ScheduleDay from "./ScheduleDay.svelte";
    export let month;
    export let users;
    let numberOfColumns = month.days.length;
</script>

<div>
    <div class="title">{month.month}</div>
    <div class="columns" style="--number-of-columns: {numberOfColumns}">
        {#each month.days as day}
            <ScheduleDay {day} {users} />
        {/each}
    </div>
</div>

<style>
    .title {
        text-align: center;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
    }
    .columns {
        display: grid;
        grid-template-columns: repeat(var(--number-of-columns), auto);
    }
</style>
