<script lang="ts">
  import type { PageData } from "./$types";
  import CharacterList from "$lib/components/character/characterList.svelte";
  import CharacterFilter from "$lib/components/character/characterFilter.svelte";
  import type { Character } from "$lib";
  import * as m from "$lib/paraglide/messages";

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

  console.log(data);
</script>

<h1 class="font-bold text-4xl">{m.menu_characters()}</h1>
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
