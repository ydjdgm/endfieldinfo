<script>
    import Logo from "./logo.svelte";
    import NavbarItems from "./navbarItems.svelte";
    import LanSelecter from "./lanSelecter.svelte";
</script>

<!-- navbar 틀 -->
<div
    class="hidden lg:flex lg:flex-col lg:w-64 lg:min-h-screen lg:bg-base-300 lg:shadow-sm lg:fixed lg:top-0 lg:left-0 lg:overflow-x-hidden lg:overflow-y-auto"
>
    <Logo />
    <NavbarItems />
    <LanSelecter />
</div>
