<script>
    import { slide } from 'svelte/transition';
    import '$css';
    let { 
            onclick, 
            title = 'Accordion Title',
            content = 'Accordion text content goes here.',
            expanded = false,
        } = $props();

</script>

<button onclick={() => expanded = !expanded}>
    <h3 class="pad-8 text-left">
    {title}
    </h3>
    <svg 
        class:expanded={expanded}
        width="8" 
        height="4" 
        viewBox="0 0 17 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
    <path d="M4.5 6L8.5 10L12.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</button>
{#if expanded}
    <p class="faq width-fill nopad text-left" transition:slide>
        {content}
    </p>
{/if}


<style>
button {
    width: 100%;
    margin-bottom: 1.125rem;
    appearance: none;
    background-color: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
}

svg {
    width: var(--d40);
    height: var(--d40);
    transition: transform 0.2s ease;
}

.expanded {
    transform: rotate(180deg);
}

p.faq {
	justify-content: flex-start;
	align-items: flex-start;
	padding: 1rem 12rem 3.5rem 8rem;
}
</style>
