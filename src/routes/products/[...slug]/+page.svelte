<script>
	// this data comes from the function in `+page.server.js`, which runs on the server only
	export let data;
</script>

<svelte:head>
	<title>PDP</title>
</svelte:head>

<main>
	<h1>Product Description Page</h1>
	{#if !data.content?.data?.slug}
		<div>Enter a slug to preview product</div>
	{:else}
		<div>Product Name: {data.content?.data?.name || 'Unpublished'}</div>
		<div>Product Description: {data.content?.data?.description || 'Unpublished'}</div>
	{/if}
</main>

<footer>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</footer>

<style>
	h1 {
		width: 100%;
		font-size: 2rem;
		text-align: center;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
