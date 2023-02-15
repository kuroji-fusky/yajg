<script lang="ts">
	import { onMount } from 'svelte'
	import FieldBlock from '$lib/FieldBlock.svelte'

	let appContainer: HTMLElement
	let grippy: HTMLElement

	onMount(() => {
		const bodyRoot = document.body

		const handleGrippy = ({ clientX }: PointerEvent) => {
			const HEIGHT_LIMIT = 300

			let pos = clientX
			let maxEditorSize = window.innerWidth - HEIGHT_LIMIT

			appContainer.style.paddingRight = '1.25rem'

			pos < HEIGHT_LIMIT
				? appContainer.classList.add('transition-all')
				: appContainer.classList.remove('transition-all')

			if (pos < HEIGHT_LIMIT / 2) {
				pos = 0
				appContainer.style.paddingRight = '0rem'
			} else {
				if (pos < HEIGHT_LIMIT) pos = HEIGHT_LIMIT
				if (pos > maxEditorSize) pos = maxEditorSize
				appContainer.style.paddingRight = '1.25rem'
			}

			let mouseX = `${pos}px`
			appContainer.style.setProperty('--editor-sidebar-width', mouseX)
		}

		window.onresize = () => handleGrippy

		grippy.onpointerdown = () => {
			window.addEventListener('pointermove', handleGrippy)
			bodyRoot.style.cursor = 'ew-resize'
		}

		window.onpointerup = () => {
			window.removeEventListener('pointermove', handleGrippy)
			bodyRoot.style.cursor = ''
		}
	})
</script>

<div class="block-sidebar-container" bind:this={appContainer}>
	<div class="overflow-hidden grid gap-2">
		<FieldBlock />
		<FieldBlock add />
	</div>
	<div id="grip" bind:this={grippy} />
</div>

<style lang="scss">
	.block-sidebar-container {
		@apply relative flex-shrink-0 select-none;

		width: var(--editor-sidebar-width, 320px);

		#grip {
			@apply -translate-x-1 w-[3px] bg-slate-500 absolute top-4 -right-1.5 bottom-4 cursor-ew-resize rounded-2xl transition-[border] duration-300;
			transition: color 200ms ease;

			&:hover,
			&:active {
				@apply bg-sky-400;
			}
		}
	}
</style>
