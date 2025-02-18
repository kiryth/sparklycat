<script>
	import '$css';
	import { navItems } from '$lib/stores/shared.svelte.js';
	import Nav from '$lib/components/nav.svelte';
	import Logo from "$images/sclogo.png";
	let { headerH } = $props();
</script>

<header
	class="f-row align-a alignx-c pady-8 w-100p"
	bind:clientHeight={headerH}
	>

	<Nav />

<a href="/" aria-label=" logo"><img class="logo" src={Logo} alt="Sparkly Cat logo" /></a>

<div class="">
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M19.5258 4.28691H15.7196V1.43066H14.7633V4.28691H10.9571V1.43066H10.0008V4.28691H5.23833V1.43066H4.28833V4.28691H0.47583V19.5244H19.5258V4.28691ZM12.8571 18.5744H1.43208V5.23691H12.8571V18.5744ZM18.5758 18.5744H17.6196V17.6182H16.6696V16.6682H15.7196V17.6182H14.7633V18.5744H13.8133V17.6182H14.7633V16.6682H15.7196V5.23691H16.6696V16.6682H17.6196V17.6182H18.5758V18.5744Z" fill="#6E4FEB"/>
		<path d="M14.763 0.473633H10.9568V1.42988H14.763V0.473633Z" fill="#6E4FEB"/>
		<path d="M10.0013 0.473633H5.23877V1.42988H10.0013V0.473633Z" fill="#6E4FEB"/>
	</svg>	
</div>

</header>

<style>
	header {
		position: relative;
		}

	img.logo {
		max-width: 180px;
	}

	a .logo {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>