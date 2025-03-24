<script lang="ts">
	import type { Product } from '@medusajs/client-types';

	const { product }: { product: Product } = $props();

	const { thumbnail, id, title } = product;
</script>

<ul class="flex flex-col border-4 border-zinc-700">
	<li class="overflow-hidden">
		<img src={thumbnail} alt="" class="object-contain w-full h-full" />
	</li>
	<li
		class="flex bg-zinc-700 p-2 text-fuchsia-400 transition-colors focus-within:text-emerald-400 hover:text-emerald-400"
	>
		<a href="/shop/product/{id}" class="flex flex-col gap-2">
			<h3 class="font-medium md:text-2xl">{title}</h3>
		</a>
	</li>
</ul>
