<script lang="ts">
    const {children} = $props()
</script>

    <a href="/shop">
        <h2 class="font-resistance text-5xl">shop</h2>
    </a>
    <div class="grid md:grid-cols-3 md:grid-rows-1">
        <section class="hidden md:block border-4 border-fuchsia-400 bg-emerald-200 col-span-1 col-start-1">
            nav here...
        </section>
        <section class="col-span-2 md:col-start-2 bg-yellow-100 border-4 border-blue-400">
            {@render children()}
        </section>
    </div>