<script>
    import '$css';
    import { bannerMessage } from '$lib/stores/shared.svelte.js';
    let { bannerH } = $props();

</script>


    <span 
        class="w-p100 h-24 text-c pad-8"
        bind:clientHeight={bannerH}
        >
        {bannerMessage}
    </span>


<style>
span {
    color: var(--purple1);
    background-color: var(--teal);
    border-bottom: 2px var(--teal2) solid;
}
</style>