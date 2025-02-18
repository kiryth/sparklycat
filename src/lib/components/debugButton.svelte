<script>
    import '$css';
    let isDebugging = false;

function toggleDebug() {
    isDebugging = !isDebugging;
}

function handleKeydown(event) {
    // Prevent the action if an input is focused
    if (document.activeElement.tagName === 'INPUT') {
      return;
    };
    if (event.shiftKey && event.key === 'D') {
            toggleDebug();
    };
  }
</script>
<svelte:window on:keydown|preventDefault={handleKeydown} />

<button class="debug-button" on:click={toggleDebug}>
    <!-- Generator: Adobe Illustrator 28.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 80 80" style="enable-background:new 0 0 80 80;" xml:space="preserve">
        <path class="icon" d="M46.2,43l-2.6-2.6l5.3-5.3l12.2,2.3c0.2,0,0.3,0,0.5,0c0.9,0,1.8-0.4,2.3-1.2l9.4-13.5c0.8-1.1,0.6-2.6-0.3-3.6
            L60.9,7c-1-1-2.5-1.1-3.6-0.3l-13.5,9.4c-0.9,0.6-1.4,1.7-1.2,2.8l2.3,12.2l-5.3,5.3L37,33.8c-2.4-2.4-6.4-2.4-8.8,0L10,52
            c-2.4,2.4-3.7,5.6-3.7,9s1.3,6.6,3.7,9l0,0c2.4,2.4,5.6,3.7,9,3.7s6.6-1.3,9-3.7l18.2-18.2C48.6,49.4,48.6,45.5,46.2,43z M58.6,12.6
            l8.8,8.8l-7,10.1l-10-1.8l-1.8-10L58.6,12.6z M42.3,47.9L24.1,66.1c-1.4,1.4-3.2,2.1-5.1,2.1s-3.7-0.7-5.1-2.1l0,0
            c-1.4-1.4-2.1-3.2-2.1-5.1c0-1.9,0.7-3.7,2.1-5.1l18.2-18.2c0.1-0.1,0.3-0.2,0.5-0.2s0.3,0.1,0.5,0.2l9.2,9.2
            C42.5,47.2,42.5,47.7,42.3,47.9z"/>
        <path class="icon" d="M34.4,5.6c1.5,0,2.8-1.2,2.8-2.8S36,0,34.4,0H10.8C4.8,0,0,4.8,0,10.8v23.6c0,1.5,1.2,2.8,2.8,2.8
            s2.8-1.2,2.8-2.8V10.8c0-2.9,2.3-5.2,5.2-5.2C10.8,5.6,34.4,5.6,34.4,5.6z"/>
        <path class="icon" d="M77.2,42.8c-1.5,0-2.8,1.2-2.8,2.8v23.6c0,2.9-2.3,5.2-5.2,5.2H45.6c-1.5,0-2.8,1.2-2.8,2.8
            c0,1.5,1.2,2.8,2.8,2.8h23.6c6,0,10.8-4.8,10.8-10.8V45.6C80,44,78.8,42.8,77.2,42.8z"/>
    </svg>

</button>

<style>
button {
    background: none;
}

.debug-button {
    cursor: pointer;
    width: 2.25rem;
    height: 2.25rem;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem 1rem;
    padding: .25rem;
    z-index: 100;
    background-color: none;
    border: none;
    border-radius: .5rem;
    transition: all 0.3s ease-in-out;
}

.debug-button:hover {
    transform: translateY(-.125rem);
    box-shadow: 0 .125rem .75rem 0 #909090;
    transition: all .3s ease-in-out;
}

.debug-button:active {
    transform: translateY(.125rem);
    box-shadow: inset .125rem .125rem .25rem 0 #909090;
}

.debug-button svg {
    width: 100%;
    height: 100%;
    background-color: none;
    object-fit: contain;
}

.icon {
    fill: var(--text-color);
}
</style>

{#if isDebugging}
	<style>
		* {
			box-sizing: border-box;
			box-shadow: 0 0 0 1px magenta !important;
		}
	</style>
{/if}
