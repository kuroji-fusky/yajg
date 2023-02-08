<script lang="ts">
	export let add: boolean = false
	export const editMode: boolean = false
	export const objType: string = ''
	export const objName: string = ''
	export const objVal: string = ''
</script>

<div class="field-block" class:add>
	{#if add}
		Add object/value
	{:else}
		Empty object
	{/if}
</div>

<style lang="scss">
	.field-block {
		@apply px-4 py-3.5 rounded-md whitespace-nowrap bg-green-400 text-sm;

		&.add {
			@apply bg-yellow-200;
		}
	}
</style>
