<script lang="ts">
  export let scheduleInfo;
</script>

<section>
  <ul>
    <li>
      <b>{scheduleInfo.date}</b>
      <ul>
        <li>{scheduleInfo.time}</li>
        <li>{scheduleInfo.route}</li>
      </ul>
    </li>
  </ul>
</section>

<style>
  li,
  b {
    font-size: clamp(1.5rem, 5vw, 3rem);
  }

  section {
    margin: 0 auto;
    width: 80%;
    margin-bottom: 4rem;
  }
</style>
