<script lang="ts">
	import FieldCodeOutput from '$lib/FieldCodeOutput.svelte'
	import FieldEditor from '$lib/FieldEditor.svelte'
</script>

<main class="w-full flex h-fit">
	<FieldEditor />
	<FieldCodeOutput />
</main>

<style lang="scss">
	.h-fit {
		height: calc(100vh - 7.65rem);
	}

	:global(.block-sidebar-container, .code-output-wrapper) {
		@apply px-5 py-4;
	}
</style>
