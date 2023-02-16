<script lang="ts">
	import { onMount } from 'svelte'
	import { jsonOutput } from '../stores'
	import FieldBlock from '$lib/FieldBlock.svelte'

	let blockOutput = $jsonOutput as any[]

	let appRoot: HTMLElement
	let grip: HTMLElement

	onMount(() => {
		const body = document.body

		const handleGrippy = ({ clientX }: PointerEvent) => {
			const HEIGHT_LIMIT = 300

			let pos: number = clientX
			let maxEditorSize = window.innerWidth - HEIGHT_LIMIT

			appRoot.style.paddingRight = '1.25rem'

			pos < HEIGHT_LIMIT
				? appRoot.classList.add('transition-all')
				: appRoot.classList.remove('transition-all')

			if (pos < HEIGHT_LIMIT / 2) {
				pos = 0
				appRoot.style.paddingRight = '0rem'
			} else {
				if (pos < HEIGHT_LIMIT) pos = HEIGHT_LIMIT
				if (pos > maxEditorSize) pos = maxEditorSize
				appRoot.style.paddingRight = '1.25rem'
			}

			let mouseX = `${pos}px`
			appRoot.style.setProperty('--editor-sidebar-width', mouseX)
		}

		window.onresize = () => handleGrippy

		grip.onpointerdown = () => {
			window.addEventListener('pointermove', handleGrippy)
			body.style.cursor = 'ew-resize'
		}

		window.onpointerup = () => {
			window.removeEventListener('pointermove', handleGrippy)
			body.style.cursor = ''
		}
	})
</script>

<div class="block-sidebar-container" bind:this={appRoot}>
	<div class="overflow-hidden grid gap-2">
		{#each Object.entries(blockOutput) as [key, isObjectIterable], index (key)}
			<div>{index} {key}</div>
			{#each isObjectIterable as objV}
				{#each Object.entries(objV) as [key, value], index (key)}
					<div>{key}:{value} {typeof(value)}</div>
				{/each}
			{/each}
		{/each}
		<FieldBlock />
		<FieldBlock add />
	</div>
	<div id="grip" bind:this={grip} />
</div>

<style lang="scss">
	.block-sidebar-container {
		@apply relative flex-shrink-0 select-none;

		width: var(--editor-sidebar-width, 320px);

		#grip {
			@apply -translate-x-1 w-[3px] bg-slate-500 absolute top-4 -right-1.5 bottom-4 cursor-ew-resize rounded-2xl transition-all duration-300;
			transition: color 200ms ease;

			&:hover,
			&:active {
				@apply bg-sky-400;
			}
		}
	}
</style>
