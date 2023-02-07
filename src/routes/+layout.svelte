<script lang="ts">
	import '../app.scss'
	import { page } from '$app/stores'
	import BaseNavbar from '../components/BaseNavbar.svelte'
	import BaseFooter from '../components/BaseFooter.svelte'

	const t = 'Yet another JSON Generator'
	const d = 'Generate JSON shit'
	const url = `${$page.url.origin}${$page.url.pathname}`
</script>

<svelte:head>
	<meta name="description" content={d} />
	<meta name="twitter:title" content={t} />
	<meta name="twitter:description" content={d} />
	<meta name="twitter:url" content={url} />
	<meta property="og:title" content={t} />
	<meta property="og:description" content={d} />
	<meta property="og:url" content={url} />
	<title>{t}</title>
</svelte:head>

<BaseNavbar />
<slot />
<BaseFooter />
