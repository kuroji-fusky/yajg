<script lang="ts">
	import { onMount } from 'svelte'

	let output = []

	// Resizable sidebar logic
	let appContainer: HTMLElement
	let grippy: HTMLElement

	onMount(() => {
		function handleGrippy({ clientX }: MouseEvent) {
			let pos = clientX
			if (pos < 0) pos = 0

			let mouseX = `${pos}px`

			appContainer.style.setProperty('--editor-sidebar-width', mouseX)
		}

		grippy.onmousedown = () => {
			window.addEventListener('mousemove', handleGrippy)
		}

		window.onmouseup = () => {
			window.removeEventListener('mousemove', handleGrippy)
		}
	})
</script>

<div class="w-screen flex h-fit" bind:this={appContainer}>
	<div class="block-sidebar-container">
		<div class="overflow-hidden">Component blocks here</div>
		<div id="grip" bind:this={grippy} />
	</div>
	<div class="code-output-wrapper">Code output here</div>
</div>

<style lang="scss">
	.h-fit {
		height: calc(100vh - 7.65rem);
	}

	.block-sidebar-container,
	.code-output-wrapper {
		@apply px-5 py-4;
	}

	.block-sidebar-container {
		@apply relative pr-2.5;

		width: var(--editor-sidebar-width, 320px);

		#grip {
			@apply w-1 bg-slate-500 absolute top-0 -right-1.5 bottom-0 cursor-ew-resize;
		}
	}
</style>
