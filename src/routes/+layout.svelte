<script>
	import { onMount } from 'svelte';
	import '$css';
	import { viewport } from '$lib/stores/shared.svelte.js'
	import Banner from '$lib/components/banner.svelte';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import DebugButton from '$lib/components/debugButton.svelte';
	let { children } = $props();
	let debug = true;
	let bannerH = $state(0);
	let headerH = $state(0);
	let footerH = $state(0);
	let minMainH = $derived( () => viewport.vh - (bannerH + headerH + footerH) );

	function updateHeights() {
		bannerH = Banner?.offsetHeight || 0;
		headerH = Header?.offsetHeight || 0;
		footerH = Footer?.offsetHeight || 0;
	};

	function updateViewport() {
		viewport.vh = window.innerHeight;
		viewport.vw = window.innerWidth;
		viewport.scrollX = window.scrollX;
		viewport.scrollY = window.scrollY;
		updateHeights();
	};

	onMount( () => {
		window.addEventListener('resize', updateViewport);
		updateViewport();
		return () => window.removeEventListener('resize', updateViewport)
	});

</script>
<svelte:window 
	bind:innerHeight={viewport.vh} 
	bind:innerWidth={viewport.vw} 
	bind:scrollX={viewport.scrollX}
	bind:scrollY={viewport.scrollY}
	/>
<Banner bannerH={bannerH}/>
<Header headerH={headerH}/>
<main style="min-height: {minMainH}px">

	{@render children()}
	
	{#if debug}
	<div class="debug f-row">
		<div class=" f-col text-r">
			<span>vW:</span> 
			<span>vH:</span>
			<span>scroll X:</span>
			<span>scroll Y:</span>
			<span>Min Main H:</span>
		</div>
		<div class="w-52 f-col text-r align-e text-blue">
			<span>{viewport.vw}px</span>
			<span> {viewport.vh}px</span>
			<span> {viewport.scrollX}px</span>
			<span>{viewport.scrollY}px</span>
			<span>{minMainH}px</span>
		</div>
	</div>
	<DebugButton />
	{/if}
</main>
<Footer footerH={footerH} />
<style>
main {
	position: relative;
    flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding: 0 2rem;
}

.debug {
	position: fixed;
	bottom: 0;
	right: 0;
	margin: 4rem 1rem;
	font-size: .875rem;
	color: magenta;
	gap: .375rem;
}

@media (max-width: 768px) {


}


@media (max-width: 1024px) {


}



</style>
