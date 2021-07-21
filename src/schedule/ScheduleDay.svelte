<script lang="ts">
    import SchedulePartTime from "./SchedulePartTime.svelte";
    export let day;
    export let users;

    let numberOfColumns = day.partTimes.length;
</script>

<div>
    <div class="title">{day.dayOfMonth}</div>
    <div class="columns" style="--number-of-columns: {numberOfColumns}">
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
    }
    .columns {
        display: grid;
        grid-template-columns: repeat(var(--number-of-columns), auto);
    }
</style>
