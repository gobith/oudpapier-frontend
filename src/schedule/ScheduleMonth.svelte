<script lang="ts">
    import ScheduleDay from "./ScheduleDay.svelte";
    import SchedulePartTime from "./SchedulePartTime.svelte";
    export let month;
    export let users;
    $: numberOfColumns = month.numberOfColumns;
</script>

<div>
    <div class="columns" style="--number-of-columns: {numberOfColumns}">
        <div class="title" style="--grid-column-end: {numberOfColumns}">
            {month.month}
        </div>
        {#each month.days as day}
            <ScheduleDay {day} />
        {/each}
        {#each month.days as day}
            {#each day.partTimes as partTime}
                <SchedulePartTime {partTime} {users} />
            {/each}
        {/each}
    </div>
</div>

<style>
    .title {
        text-align: center;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
        grid-column-end: span var(--grid-column-end);
    }
    .columns {
        display: grid;
        grid-template-columns: repeat(var(--number-of-columns), auto);
    }
</style>
