<script lang="ts">
	let { children, href }: {href: string} = $props();
</script>

<a href={href} class="h-full py-4 px-4 hover:bg-neutral-200 flex justify-center items-center gap-2 no-underline text-black">
	{@render children()}
</a>