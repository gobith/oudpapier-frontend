<script lang="ts">
  import ScheduleMonth from "./ScheduleMonth.svelte";
  import ScheduleUsers from "./ScheduleUsers.svelte";
  export let year;
  export let users;
</script>

<div>{year.year}</div>
<div class="columns">
  <ScheduleUsers {users} />
  {#each year.months as month}
    <ScheduleMonth {month} {users} />
  {/each}
</div>

<style>
  .columns {
    display: grid;
    grid-template-columns: repeat(12, auto);
    /* gap: 4px; */
  }
</style>
