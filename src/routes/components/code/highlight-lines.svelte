<script lang="ts">
	import { Code } from '$lib/components/ui/code';

	const code = `export type CheckOptions = {
	categories: Category[];
	options: (string | number)[];
	config: RegistryConfig;
};

export type Rule = {
	description: string;
	check: (block: Block, { categories }: CheckOptions) => string[] | undefined;
};

export type CheckOptions = {
	categories: Category[];
	options: (string | number)[];
	config: RegistryConfig;
};

export type Rule = {
	description: string;
	check: (block: Block, { categories }: CheckOptions) => string[] | undefined;
};

export type CheckOptions = {
	categories: Category[];
	options: (string | number)[];
	config: RegistryConfig;
};

export type Rule = {
	description: string;
	check: (block: Block, { categories }: CheckOptions) => string[] | undefined;
};

export type CheckOptions = {
	categories: Category[];
	options: (string | number)[];
	config: RegistryConfig;
};

export type Rule = {
	description: string;
	check: (block: Block, { categories }: CheckOptions) => string[] | undefined;
};`;
</script>

<div class="w-full p-6 relative h-[300px]">
	<Code lang="typescript" {code} highlightLines={[[7, 10], 4]}/>
</div>
