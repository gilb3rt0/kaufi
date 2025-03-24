<script lang="ts">
	import { ProductCard } from '$lib';
	import type { PageProps } from './$types';
	import type { Product } from '@medusajs/client-types';
	import {error} from "@sveltejs/kit"

	const { data }: PageProps = $props();
	const {products} = data;
	if (!products) error(404)
	
</script>

	<ul class="grid gap-6 p-4 md:grid-cols-2">
		{#each products as product}
			<li>
				<ProductCard product={product as unknown as Product} />
			</li>
		{/each}
	</ul>
