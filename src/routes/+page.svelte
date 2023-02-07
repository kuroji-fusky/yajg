<script lang="ts">
	let output = []

	// Resizable sidebar logic
</script>

<div class="w-screen flex h-fit">
	<div class="block-sidebar-container">
		<div>Component blocks here</div>
		<div id="grip" />
	</div>
	<div class="code-output-wrapper">Code output here</div>
</div>

<style lang="scss">
	.h-fit {
		height: calc(100vh - 7.65rem);
	}

	.block-sidebar-container {
		@apply relative pr-2.5;

		#grip {
			@apply w-1 hover:w-1.5 bg-slate-500 absolute top-0 right-0 bottom-0 cursor-ew-resize;
		}
	}
</style>
