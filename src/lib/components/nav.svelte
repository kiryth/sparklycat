<script>
    import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fly , fade , slide } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
    import { navItems, viewport } from '$lib/stores/shared.svelte.js';
    import '$css';
    let navH = $state(0);
	let openDropdown = $state(null);
	let expanded = $state(false);

	function showDropdown(name) {
    	openDropdown = openDropdown === name ? null : name;
	};	
	function expandDropdown(name) {
    	openDropdown = openDropdown === name ? null : name;
		expanded = !expanded
	};	

	function hideDropdown() {
		openDropdown = null;
	};

</script>

<nav>
	<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M25.1401 20.5703H6.86008V22.0903H5.33008V25.1403H6.86008V23.6203H25.1401V25.1403H26.6701V22.0903H25.1401V20.5703Z" fill="#6E4FEB"/>
		<path d="M25.1401 12.9502H6.86008V14.4702H5.33008V17.5202H6.86008V16.0002H25.1401V17.5202H26.6701V14.4702H25.1401V12.9502Z" fill="#6E4FEB"/>
		<path d="M25.1401 5.33008H6.86008V6.85008H5.33008V9.90008H6.86008V8.38008H25.1401V9.90008H26.6701V6.85008H25.1401V5.33008Z" fill="#6E4FEB"/>
		<path d="M25.1401 25.1396H6.86011V26.6596H25.1401V25.1396Z" fill="#6E4FEB"/>
		<path d="M25.1401 17.5205H6.86011V19.0405H25.1401V17.5205Z" fill="#6E4FEB"/>
		<path d="M25.1401 9.90039H6.86011V11.4304H25.1401V9.90039Z" fill="#6E4FEB"/>
	</svg>
		

	<ul class="w-a">
		{#each navItems as navItem (navItem.name)}
		<li 
			class="w-a"
			bind:clientHeight={navH}
			onmouseover={() => showDropdown(navItem.name)}
			onfocus={() => showDropdown(navItem.name)}
			onmouseleave={hideDropdown}
		>
			<a href={navItem.path}>{navItem.name}</a>
		</li>		
		{/each}
	</ul>
</nav>

{#if viewport.vw < 768 }
	<style>
	nav {
		width: 100%;
		height: 100%;
	}
	</style>

{:else if viewport.vw < 1024}
	<style>

	</style>

{:else}
	<style>

	</style>
{/if}