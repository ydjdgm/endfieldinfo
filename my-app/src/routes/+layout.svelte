<script lang="ts">
	import "../app.css";
	import Navbar from "$lib/components/navbar/navbar.svelte";
	import Background from "$lib/components/background.svelte";

	let { children } = $props();
</script>

<Navbar />
<Background>
	<div class="relative m-10 flex flex-col items-center">
		{@render children()}
	</div>
</Background>