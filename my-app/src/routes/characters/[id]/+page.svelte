<script lang="ts">
    import type { PageData } from "./$types";
    import type { Character } from "$lib";
    import * as m from "$lib/paraglide/messages";
    import CharCard from "$lib/components/character/id/charCard.svelte";

    export let data: PageData;
    let character: Character = data.character;
</script>

<CharCard {character} />
<img src={character.img_type2} alt={character.name} />
