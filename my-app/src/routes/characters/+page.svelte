<script lang="ts">
  import type { PageData } from "./$types";
  import CharacterList from "$lib/components/character/characterList.svelte";
  import CharacterFilter from "$lib/components/character/characterFilter.svelte";
  import type { Character } from "$lib";

  let selectedRarity: number | null = null;
  let selectedElement: number | null = null;
  let selectedClass: number | null = null;
  let selectedWeaponType: number | null = null;

  $: filteredCharacters = data.response.characters.filter(
    (c: Character) =>
      (selectedRarity === null || c.rarity.id === selectedRarity) &&
      (selectedElement === null || c.element.id === selectedElement) &&
      (selectedClass === null || c.class.id === selectedClass) &&
      (selectedWeaponType === null || c.weapon_type.id === selectedWeaponType),
  );

  export let data: PageData;

  console.log(data.response);
</script>

<h1 class="font-bold text-4xl">캐릭터</h1>
<CharacterFilter
  bind:selectedRarity
  bind:selectedElement
  bind:selectedClass
  bind:selectedWeaponType
  rarities={data.response.rarities}
  elements={data.response.elements}
  classes={data.response.classes}
  weapon_types={data.response.weapon_types}
/>
<CharacterList characters={filteredCharacters} />
