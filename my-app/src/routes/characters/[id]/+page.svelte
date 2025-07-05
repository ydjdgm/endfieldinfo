<script lang="ts">
    import type { PageData } from "./$types";
    import type { Character } from "$lib";
    import * as m from "$lib/paraglide/messages";

    export let data: PageData;

    console.log(data);
</script>

{#if data.character}
    <h1>{data.character.name}</h1>
    <img src={data.character.img_type1} alt={data.character.name} />
    <p>Class: {data.character.class.name}</p>
    <p>Element: {data.character.element.name}</p>
    <p>Weapon: {data.character.weapon_type.name}</p>
{/if}
