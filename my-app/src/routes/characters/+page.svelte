<script lang="ts">
  export let data;
</script>

<div class="container">
  <h1>Characters</h1>
  {#if data.error}
    <p class="error">{data.error}</p>
  {/if}
  <div class="character-list">
    {#each data.characters as character}
      <div class="character-card">
        <h2>{character.name}</h2>
        <p>{character.description}</p>
      </div>
    {/each}
  </div>
</div>

<style>
  .container {
    padding: 2rem;
  }
  .error {
    color: red;
  }
  .character-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  .character-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
  }
</style>