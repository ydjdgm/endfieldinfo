<script lang="ts">
	import "../app.css";

	let { children } = $props();

	// 언어 변경 로직을 모두 레이아웃으로 가져옴
	import { getLocale, setLocale } from "$lib/paraglide/runtime";

	let currentLanguage = getLocale();

	function handleLanguageChange(lang: "ko" | "en") {
		setLocale(lang);
		// 페이지가 새로고침되면서 currentLanguage도 업데이트
	}
</script>

<header>
	<h1>My Game Guide</h1>
	<nav>
		<button
			onclick={() => handleLanguageChange("ko")}
			disabled={currentLanguage === "ko"}>🇰🇷 한국어</button
		>
		<button
			onclick={() => handleLanguageChange("en")}
			disabled={currentLanguage === "en"}>🇬🇧 English</button
		>
	</nav>
</header>

{@render children()}
