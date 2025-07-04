<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
</script>

{#each data.characters as character}
  <p>{character.name}</p>
{/each}