<script lang="ts">
    export let user;
</script>

<div class="container">{user.name}</div>

<style>
    .container {
        height: 1.2rem;
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
        font-size: 1rem;
    }
</style>
