<script lang="ts">
	let projectName = 'Yet Another JSON Generator'
</script>

<header class="border-b border-0 border-slate-400">
	<nav class="flex px-8 py-5 justify-between items-center select-none">
		<div class="flex gap-5 items-center">
			<a href="/" aria-label={projectName} title={projectName}>
				<div class="text-3xl flex items-center gap-x-1 hover:gap-x-2 ml-2 hover:ml-1 transition-all font-inter font-extrabold" role="img">
					<span class="gradient-braces">&lbrace;</span>
					<span>YAJG</span>
					<span class="gradient-braces">&rbrace;</span>
				</div>
			</a>
			<button> Templates </button>
		</div>
		<ul class="flex gap-x-6">
			<li><button>Theme shit</button></li>
			<li><a href="/about">About</a></li>
			<li><button>Export</button></li>
		</ul>
	</nav>
</header>

<style>
	.gradient-braces {
		@apply bg-gradient-to-t bg-clip-text text-transparent  from-cyan-500 to-pink-500;
	}
</style>
