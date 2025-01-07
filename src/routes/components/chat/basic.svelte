<script lang="ts">
	import * as Chat from '$lib/components/ui/chat';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import { Info, Paperclip, Phone, Send, VideoIcon } from 'lucide-svelte';
	import { Input } from '$lib/components/ui/input';

	let message = $state('');

	type User = {
		id: string;
		username: string;
		name: string;
		img: string;
	};

	type Message = {
		senderId: string;
		message: string;
		sentAt: string;
	};

	const user: User = {
		id: '123456',
		name: 'Jane Doe',
		username: '@janedoe',
		img: 'https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg?fmt=webp&h=350'
	};

	const friend: User = {
		id: '654321',
		name: 'John Doe',
		username: '@johndoe',
		img: 'https://images.freeimages.com/images/large-previews/fdd/man-avatar-1632964.jpg?fmt=webp&h=35'
	};

	const users = [user, friend];

	const messages: Message[] = $state([
		{
			senderId: '123456',
			message: 'Hey, hows it going!',
			sentAt: '11:05 AM'
		},
		{
			senderId: '654321',
			message: 'Good! How about you?',
			sentAt: '11:10 AM'
		},
		{
			senderId: '654321',
			message: 'I have been working on something verry big!',
			sentAt: '11:12 AM'
		},
		{
			senderId: '123456',
			message: 'Oh really well you will have to show me when you are done!',
			sentAt: '11:14 AM'
		},
		{
			senderId: '654321',
			message:
				'Basically it is a library where you can copy paste the code and it will just work in your project. But the real hook is that it comes with a CLI!',
			sentAt: '11:17 AM'
		}
	]);
</script>

<div class="w-full p-2">
	<div class="w-full border border-border">
		<div class="flex place-items-center justify-between border-b p-2 bg-background">
			<div class="flex place-items-center gap-2">
				<Avatar.Root>
					<Avatar.Image src={friend.img} alt={friend.username} />
					<Avatar.Fallback>
						{friend.name
							.split(' ')
							.map((n) => n[0])
							.join('')}
					</Avatar.Fallback>
				</Avatar.Root>
				<div class="flex flex-col">
					<span class="text-sm font-medium">{friend.name}</span>
					<span class="text-xs">Active 2 mins ago</span>
				</div>
			</div>
			<div class="flex place-items-center">
				<Button variant="ghost" size="icon" class="rounded-full">
					<Phone />
				</Button>
				<Button variant="ghost" size="icon" class="rounded-full">
					<VideoIcon />
				</Button>
				<Button variant="ghost" size="icon" class="rounded-full">
					<Info />
				</Button>
			</div>
		</div>
		<Chat.List class="max-h-[400px]">
			{#each messages as message}
				{@const sender = users.find((u) => u.id === message.senderId)}

				<Chat.Bubble variant={message.senderId === user.id ? 'sent' : 'received'}>
					{#snippet avatar()}
						<Avatar.Root>
							<Avatar.Image src={sender?.img} alt={sender?.username} />
							<Avatar.Fallback>
								{sender?.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</Avatar.Fallback>
						</Avatar.Root>
					{/snippet}
					<div class="flex flex-col gap-1">
						<p>{message.message}</p>
						<div class="w-full text-xs group-data-[variant='sent']/chat-bubble:text-end">
							{message.sentAt}
						</div>
					</div>
				</Chat.Bubble>
			{/each}
		</Chat.List>
		<form
			onsubmit={(e) => {
				e.preventDefault();

				messages.push({ message, senderId: '123456', sentAt: '11:20 AM' });

				message = '';
			}}
			class="flex place-items-center gap-2 p-2"
		>
			<Button variant="ghost" size="icon" class="shrink-0 rounded-full">
				<Paperclip />
			</Button>
			<Input bind:value={message} class="rounded-full" placeholder="Type a message..." />
			<Button
				type="submit"
				variant="default"
				size="icon"
				class="shrink-0 rounded-full"
				disabled={message === ''}
			>
				<Send />
			</Button>
		</form>
	</div>
</div>
