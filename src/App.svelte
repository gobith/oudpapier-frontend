<script lang="ts">
  import users from "./stores/users-store";
  import years from "./stores/years-store";
  import ScheduleYears from "./schedule/ScheduleYears.svelte";
</script>

{#if $users}
  {#if $years}
    <ScheduleYears users={$users} years={$years} yearIndex={0} />
  {/if}
{/if}

<style>
  :global(*) {
    box-sizing: border-box;
    font-size: 12px;
  }
</style>
