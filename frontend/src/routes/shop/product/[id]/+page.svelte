<script lang="ts">
	import { error } from "@sveltejs/kit";
	import type { PageProps } from "./$types";

    const { data }:PageProps= $props()
    const product = data?.product;
    if (!product) {
        error(404)
    }
    const {images, title, description } = product

</script>



<h2 class="font-cirrus-cumulus font-bold text-7xl">
    {title}
</h2>
{#if images}
<div class="grid md:grid-cols-3 grid-cols-2 gap-2">

    {#each images as {url,metadata}}
    <div class="border-4 border-violet-800">
        <img src={url} alt=""/>
    </div>
    {/each}
</div>
{/if}
<p>{description}</p>