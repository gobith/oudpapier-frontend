<script lang="ts">
  let encrypted = btoa("test");
  console.log(encrypted);
  let decrypted = atob(encrypted);
  console.log(decrypted);
</script>

<div>
  <div class="showcase">
    <div class="overlay">
      <div class="overlay-top">
        <button>Login</button>
      </div>
      <div />
      <div />
      <div class="overlay-bottom">
        <h1>ACW OUDPAPIER</h1>
      </div>
    </div>
  </div>
</div>

<style>
  .showcase {
    background-image: url("/20200919_111401.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    background-blend-mode: difference;
  }

  .overlay {
    background-size: cover;
    height: 100vh;
    display: grid;
    grid-template-rows: min-content 1fr 1fr 1fr;
  }

  .overlay-top {
  }

  .overlay-bottom {
    align-self: end;
    justify-self: center;
  }

  h1 {
    font-size: clamp(3rem, 5vw, 9rem);
    color: rgba(255, 255, 255, 0.8);
    padding: 3rem;
  }

  button {
    margin: 2rem;
    font-size: 2rem;
    background-color: rgba(0, 0, 0, 0);
    color: rgba(255, 255, 255, 1);
    /* padding: 1.5rem; */
    border: 1px solid white;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
</style>
