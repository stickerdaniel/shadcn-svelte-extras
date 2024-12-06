<script lang="ts">
	import { Code } from '$lib/components/ui/code';

	const code = `const sayHello = () => {
    console.log('Hello!');
}`;
</script>

<div class="w-full p-6">
	<Code lang="typescript" class="w-full" {code} />
</div>
