<script lang="ts">
    export let day;

    $: numberOfColumns = day.partTimes.length;
</script>

<div class="title" style="--grid-column-end: {numberOfColumns}">
    {day.dayOfMonth}
</div>

<style>
    .title {
        text-align: center;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;

        grid-column-end: span var(--grid-column-end);
    }
</style>
