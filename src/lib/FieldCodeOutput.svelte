<script lang="ts">
	import { jsonOutput } from '../stores'

	let out = JSON.stringify($jsonOutput, undefined, 2)
</script>

<div class="code-output-wrapper w-full">
	<pre>{out}</pre>
</div>

<style lang="scss">
	.code-output-wrapper {
		@apply py-4 bg-zinc-200 border-zinc-400 border mx-5 my-4 rounded-lg;
	}
</style>
