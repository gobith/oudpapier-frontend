<script lang="ts">
  let encrypted = btoa("test");
  console.log(encrypted);
  let decrypted = atob(encrypted);
  console.log(decrypted);
</script>

<div class="showcase" />
<p>
  Afgelopen jaar heeft het oud papier team van AC Waterland wederom een kleine
  200.000kg oud papier opgehaald in Landsmeer. Dit heeft de club, ondanks de
  coronacrisis, wederom zo’n 8000 euro opgeleverd. Hierdoor kan, mede door jouw
  inzet, de contributie laag worden gehouden. Heel erg bedankt voor je inzet
  afgelopen jaar!
</p>

<style>
  .showcase {
    background-image: url("/20200919_111401.jpg");
    background-size: cover;
    background-position: center;
    height: calc(100vh - 5rem);
  }

  p {
    font-size: 2rem;
    padding: 20px;
  }
</style>
