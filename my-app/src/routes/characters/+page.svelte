<script lang="ts">
  import type { PageData } from "./$types";
  import CharacterList from "$lib/components/character/characterList.svelte";
  import CharacterFilter from "$lib/components/character/characterFilter.svelte";

  export let data: PageData;
</script>

<h1 class="font-bold text-4xl">캐릭터</h1>

<CharacterList characters={data.characters}/>
