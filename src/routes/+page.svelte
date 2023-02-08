<script lang="ts">
	import { onMount } from 'svelte'
	import FieldBlock from '$lib/FieldBlock.svelte'

	let output = []

	// Resizable sidebar logic
	let appContainer: HTMLElement
	let grippy: HTMLElement

	onMount(() => {
		const handleGrippy = ({ clientX }: PointerEvent) => {
			let pos = clientX
			if (pos < 0) pos = 0

			let mouseX = `${pos}px`

			appContainer.style.setProperty('--editor-sidebar-width', mouseX)
		}

		grippy.onpointerdown = () => {
			window.addEventListener('pointermove', handleGrippy)
		}

		window.onpointerup = () => {
			window.removeEventListener('pointermove', handleGrippy)
		}
	})
</script>

<main class="w-screen flex h-fit">
	<div class="block-sidebar-container" bind:this={appContainer}>
		<div class="overflow-hidden grid gap-2">
			<FieldBlock />
			<FieldBlock add />
		</div>
		<div id="grip" bind:this={grippy} />
	</div>
	<div class="code-output-wrapper w-full">Code output here</div>
</main>

<style lang="scss">
	.h-fit {
		height: calc(100vh - 7.65rem);
	}

	.block-sidebar-container,
	.code-output-wrapper {
		@apply px-5 py-4 flex-shrink-0;
	}

	.block-sidebar-container {
		@apply relative pr-5;

		width: var(--editor-sidebar-width, 320px);

		#grip {
			@apply -translate-x-1 w-0.5  bg-slate-500 absolute top-2 -right-1.5 bottom-2 cursor-ew-resize;
			transition: color 200ms ease;

			&:hover,
			&:active {
				@apply bg-sky-400;
			}
		}
	}
</style>
