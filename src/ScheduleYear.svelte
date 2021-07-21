<script lang="ts">
  export let year;
  export let users;
</script>

<div>{year.year}</div>

{#each year.months as month}
  <div>{month.month}</div>
{/each}

<style>
</style>
