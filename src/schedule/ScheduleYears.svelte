<script lang="ts">
  import ScheduleYear from "./ScheduleYear.svelte";

  export let users;
  export let years;
  export let yearIndex;

  $: year = years[yearIndex];
  $: scheduleUsers = users.filter((user) => {
    return user.showInSchedule;
  });

  const forewards = () => {
    if (yearIndex === 0) {
      yearIndex = years.length - 1;
    } else {
      yearIndex = yearIndex - 1;
    }
  };

  const backwards = () => {
    if (yearIndex === years.length - 1) {
      yearIndex = 0;
    } else {
      yearIndex = yearIndex + 1;
    }
  };
</script>

<div class="container">
  <div class="schedule">
    <button on:click={backwards}>&#8592;</button>
    <button on:click={forewards}>&#8594;</button>
    <ScheduleYear {year} users={scheduleUsers} />
  </div>
</div>

<style>
  .container {
  }
  .schedule {
    margin: 0 auto;
    width: 800px;
  }
</style>
