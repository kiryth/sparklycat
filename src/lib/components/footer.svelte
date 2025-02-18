<script>
    import '$css';
    import { navItems } from '$lib/stores/shared.svelte.js';
    let { footerH } = $props();
    let currentYear = $state( new Date().getFullYear());

</script>


<footer bind:clientHeight={footerH}>
    <div class="socials flex f-row gap-20">
        Follow us
        <a 
            href="/"
            aria-label="LinkedIn"
            >
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_68_1469)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0.5C18.8798 0.5 20 1.6202 20 3V18C20 19.3798 18.8798 20.5 17.5 20.5H2.5C1.1202 20.5 0 19.3798 0 18V3C0 1.6202 1.1202 0.5 2.5 0.5H17.5ZM2.38489 7.47919H5.73489V17.5558H2.38489V7.47919ZM4.0825 2.6203C2.93637 2.6203 2.1875 3.37382 2.1875 4.36143C2.1875 5.32831 2.91359 6.10261 4.03816 6.10261H4.0598C5.22789 6.10261 5.95496 5.32831 5.95496 4.36143C5.93328 3.37382 5.22797 2.6203 4.0825 2.6203ZM10.9376 8.90585C11.3833 8.21944 12.1792 7.24222 13.9562 7.24222C16.1599 7.24222 17.8124 8.68206 17.8124 11.7773V17.5558H14.4632V12.1644C14.4632 10.8103 13.9779 9.88597 12.7664 9.88597C11.8411 9.88597 11.2897 10.5091 11.048 11.1107C10.9592 11.3259 10.9375 11.6271 10.9375 11.9283V17.5558H7.58844C7.58844 17.5558 7.63285 8.42437 7.58844 7.47917H10.9376V8.90585Z" fill="currentColor"/>
                </g>
                <defs>
                <clipPath id="clip0_68_1469">
                <rect width="20" height="20" fill="transparent" transform="translate(0 0.5)"/>
                </clipPath>
                </defs>
                </svg>
                
                
        </a>
        <a 
            href="/"
            aria-label="X (Twitter)"
            >
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5.04781C19.2627 5.33553 18.4724 5.52871 17.6416 5.61639C18.4896 5.16975 19.1411 4.46279 19.4467 3.62157C18.6548 4.03396 17.7741 4.33401 16.8405 4.49567C16.0923 3.7942 15.0261 3.35715 13.8462 3.35715C11.5798 3.35715 9.74203 4.97109 9.74203 6.96317C9.74203 7.2454 9.77944 7.52079 9.84958 7.78521C6.43909 7.6345 3.41672 6.19867 1.39194 4.01615C1.03811 4.55048 0.837035 5.16975 0.837035 5.83012C0.837035 7.081 1.56028 8.18527 2.6623 8.83331C1.98893 8.81413 1.35609 8.6511 0.802743 8.38119C0.802743 8.39626 0.802743 8.41133 0.802743 8.4264C0.802743 10.1746 2.21807 11.631 4.09321 11.9639C3.75029 12.0461 3.38711 12.09 3.01302 12.09C2.74803 12.09 2.49084 12.068 2.23989 12.0242C2.76362 13.4559 4.2787 14.5013 6.07279 14.5301C4.66994 15.4973 2.90079 16.0728 0.97732 16.0728C0.645312 16.0728 0.319539 16.0563 0 16.0221C1.81436 17.0469 3.97163 17.6429 6.28945 17.6429C13.8368 17.6429 17.9643 12.1475 17.9643 7.38241C17.9643 7.22622 17.9596 7.06867 17.9534 6.91522C18.7546 6.40692 19.4498 5.77121 20 5.04781Z" fill="currentColor"/>
                </svg>
                
        </a>
    </div>

	<ul class="map flex f-col">
		{#each navItems as navItem (navItem.name)}
        <li>
			<a href={navItem.path}><h4>{navItem.name}</h4></a>
			<ul>
				{#each navItem.dropdown as dropdownItem (dropdownItem.name)}
					<li>
						<a href={dropdownItem.path}>{dropdownItem.name}</a>
					</li>
				{/each}
			</ul>
		</li>		
		{/each}
	</ul> 

<p class="last flex f-row width-fill gap-20">
    © {currentYear} SPARKLY CAT. ALL RIGHTS RESERVED. 
    
    <a href="/legal/privacy">Privacy</a>
    <a href="/legal/terms">Terms</a>    
</p>
</footer>


<style>
	footer {
        position: relative;
        width: 100%;
        background-color: none;
		font-size: .625rem;
		font-weight: 300;
		padding: 0 2rem;
        gap: 2rem;
		display: flex;
        flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
        text-align: center;
	}

    footer p {
        width: auto;
    }

    
    .socials {
        width: 100%;
        padding: 2rem 0;
        font-size: .75rem;
        color: var(--footer-color);
    }

    .socials svg path {
        color: white;
    }

    ul {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    li {
        padding: 0;
        margin: 0;
    }

    h4 {
        margin: 0;
    }

    .map {
        width: auto;
        font-size: .875rem;
        text-align: left;
    }

    .map li {
        padding: .025rem;
    }

    /*.map h4 {
        padding: .5rem 0;
    } Adjust this if/when split out into columns */

    .map a {
        color: var(--footer-color);
    }

    .last {
        width: 100%;
        padding: .5rem 0;
        font-size: .75rem;
    }

    .last a {
        font-weight: 500;
        letter-spacing: .075rem;
        text-transform: uppercase;
        text-decoration: none;
    }

    @media (max-width: 768px) {
    
        footer {
            gap: .5rem;

        }

        footer .socials {
            padding: 1.25rem 0;
        }

        footer ul.map {
            display: none;
        }
    
        footer p.last {
            flex-flow: column-reverse;
            text-align: left;
            gap: 1rem;
            padding: 1rem 0;
        }
    
    }
</style>