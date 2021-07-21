<script lang="ts">
    import SchedulePartTime from "./SchedulePartTime.svelte";
    export let day;
    export let users;

    let numberOfColumns = day.partTimes.length;
    let gridColumnEnd = numberOfColumns + 1;
</script>

<div>
    <div
        class="columns"
        style="--number-of-columns: {numberOfColumns}; --grid-column-end: {gridColumnEnd}"
    >
        <div class="title">{day.dayOfMonth}</div>
        {#each day.partTimes as partTime}
            <SchedulePartTime {partTime} {users} />
        {/each}
    </div>
</div>

<style>
    .title {
        text-align: center;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
        grid-column-start: 1;
        grid-column-end: var(--grid-column-end);
    }
    .columns {
        display: grid;
        grid-template-columns: repeat(var(--number-of-columns), auto);
    }
</style>
