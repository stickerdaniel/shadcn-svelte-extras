<script>
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';

	let loading = $state(false);
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>Create an account</Card.Title>
		<Card.Description>Enter your email below to create your account.</Card.Description>
	</Card.Header>
	<Card.Content class="flex flex-col gap-4">
		<div class="flex flex-col gap-2">
			<Label>Username</Label>
			<Input placeholder="Username" />
			<Label>Password</Label>
			<Input placeholder="Password" />
		</div>
		<Button
			{loading}
			class="w-full"
			onclick={() => {
				loading = true;
				setTimeout(() => {
					loading = false;
				}, 500);
			}}
		>
			Create Account
		</Button>
	</Card.Content>
</Card.Root>
