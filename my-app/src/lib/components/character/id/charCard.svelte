<script lang="ts">
    import type { Character, Rarity, Class, WeaponType, Element } from "$lib";
    import * as m from "$lib/paraglide/messages";
    import { Sparkle } from "@lucide/svelte";

    export let character: Character;
</script>

<div
    class="w-full max-w-6xl mx-auto flex flex-row gap-4 p-4 bg-base-300 rounded-box"
>
    <div
        class="card flex-shrink-0 w-[300px] h-[500px] bg-base-100 shadow-xl image-full"
    >
        <img
            class="w-full h-full object-cover"
            src={character.img_type1}
            alt={(m as any)[character.name]()}
        />

        <div class="card-body p-0 justify-end">
            <div class="absolute top-4 left-4 flex flex-col gap-3">
                <div
                    class="avatar tooltip tooltip-left"
                    data-tip={(m as any)[character.element.name]()}
                >
                    <div class="w-7">
                        <img
                            src={character.element.img}
                            alt={character.element.name}
                        />
                    </div>
                </div>
                <div
                    class="avatar tooltip tooltip-left"
                    data-tip={(m as any)[character.weapon_type.name]()}
                >
                    <div class="w-7">
                        <img
                            src={character.weapon_type.img}
                            alt={character.weapon_type.name}
                        />
                    </div>
                </div>
                <div
                    class="avatar tooltip tooltip-left"
                    data-tip={(m as any)[character.class.name]()}
                >
                    <div class="w-7">
                        <img
                            src={character.class.img}
                            alt={character.class.name}
                        />
                    </div>
                </div>
            </div>

            <div class="h-[50%] bg-gradient-to-t from-black/100 to-transparent">
                <div class="absolute bottom-0 p-4">
                    <h2 class="card-title text-3xl text-white">
                        {(m as any)[character.name]()}
                    </h2>

                    <div class="flex mt-2 text-yellow-400 gap-1">
                        {#each Array(character.rarity.id) as _}
                            <Sparkle class="fill-current" />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex-grow flex flex-col gap-4">
        <div class="card bg-base-100 shadow-md p-4">
            <h3 class="text-2xl font-bold">S 티어</h3>
            <div class="divider mt-1 mb-0"></div>
        </div>

        <div class="card bg-base-100 shadow-md p-4">
            <h3 class="text-lg font-bold mb-2">기어</h3>
            <div
                class="w-full h-24 bg-base-200 rounded-lg flex items-center justify-center"
            >
                <p class="text-base-content/50">기어 추천 내용</p>
            </div>
        </div>

        <div class="card bg-base-100 shadow-md p-4">
            <h3 class="text-lg font-bold mb-4">스킬 레벨업</h3>
            <div class="flex items-center justify-around text-xl font-mono">
                <div
                    class="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-base-200"
                >
                    1
                </div>
                <span class="text-primary">{">"}</span>
                <div
                    class="w-16 h-16 rounded-full border-2 border-secondary flex items-center justify-center bg-base-200"
                >
                    2
                </div>
                <span class="text-secondary">{"="}</span>
                <div
                    class="w-16 h-16 rounded-full border-2 border-accent flex items-center justify-center bg-base-200"
                >
                    3
                </div>
                <span class="text-accent/70">{"≥"}</span>
                <div
                    class="w-16 h-16 rounded-full border-2 border-base-content/50 flex items-center justify-center bg-base-200"
                >
                    4
                </div>
            </div>
        </div>

        <div class="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="card bg-base-100 shadow-md p-4">
                <h3 class="text-lg font-bold mb-2">무기</h3>
                <div class="flex items-end justify-center gap-2 h-full">
                    <div
                        class="w-20 h-20 bg-base-200 rounded-lg border-2 border-primary"
                    ></div>
                    <div
                        class="w-16 h-16 bg-base-200 rounded-lg border-2 border-secondary"
                    ></div>
                    <div
                        class="w-16 h-16 bg-base-200 rounded-lg border-2 border-secondary"
                    ></div>
                </div>
            </div>

            <div class="card bg-base-100 shadow-md p-4">
                <h3 class="text-lg font-bold mb-2">파티 추천</h3>
                <div class="flex items-end justify-center gap-2 h-full">
                    <div
                        class="w-20 h-20 bg-base-200 rounded-lg border-2 border-accent"
                    ></div>
                    <div
                        class="w-16 h-16 bg-base-200 rounded-lg border-2 border-base-content/50"
                    ></div>
                    <div
                        class="w-16 h-16 bg-base-200 rounded-lg border-2 border-base-content/50"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</div>
