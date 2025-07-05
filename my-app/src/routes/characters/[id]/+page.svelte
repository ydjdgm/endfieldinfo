<script lang="ts">
    import type { PageData } from "./$types";
    import type { Character } from "$lib";
    import * as m from "$lib/paraglide/messages";

    export let data: PageData;

    console.log(data);
</script>

<!-- 전체 카드 -->
<div class="w-[70vw] flex space-x-3">
    <!-- 왼쪽 전체 블럭 -->
    <div class="w-[20vw] bg-amber-50">
        <img class="w-full" src={data.character.img_type1} alt={data.character.name} />
        <!-- <div
            class="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"
        ></div> -->
    </div>
    <!-- 오른쪽 전체 블럭 -->
    <div class="w-[50vw] bg-amber-100">
        <!-- 티어 -->
        <div class="bg-amber-900"></div>
        <!-- 기어 -->
        <div></div>
        <!-- 스킬 -->
        <div></div>
        <!-- 무기&파티추천 -->
        <div>
            <!-- 무기 -->
            <div></div>
            <!-- 피타추천 -->
            <div></div>
        </div>
    </div>
</div>
