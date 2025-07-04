<script lang="ts">
    import { getLocale, setLocale } from "$lib/paraglide/runtime";
    import { Globe } from "@lucide/svelte";

    // 현재 설정된 언어를 가져옴
    const currentLanguage = getLocale();

    // 언어를 변경하는 함수
    function handleLanguageChange(lang: "ko" | "en") {
        setLocale(lang);
        // setLocale을 호출하면 ParaglideJS가 페이지를 자동으로 새로고침하거나
        // 라우트를 업데이트하여 변경된 언어를 적용
    }
</script>

<div class="dropdown dropdown-top pb-2">
    <div tabindex="0" role="button" class="btn btn-ghost btn-sm">
        <Globe />
        <span class="uppercase">{currentLanguage}</span>
    </div>

    <ul
        class="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow"
    >
        <li>
            <button
                class:active={currentLanguage === "en"}
                on:click={() => handleLanguageChange("en")}>English</button
            >
        </li>
        <li>
            <button
                class:active={currentLanguage === "ko"}
                on:click={() => handleLanguageChange("ko")}>한국어</button
            >
        </li>
    </ul>
</div>
