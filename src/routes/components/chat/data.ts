import type { Message, User } from './types';

export const messages: Message[] = [
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
];

export const user: User = {
	id: '123456',
	name: 'Jane Doe',
	username: '@janedoe',
	img: 'https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg?fmt=webp&h=350'
};

export const friend: User = {
	id: '654321',
	name: 'John Doe',
	username: '@johndoe',
	img: 'https://images.freeimages.com/images/large-previews/fdd/man-avatar-1632964.jpg?fmt=webp&h=35'
};

export const users = [user, friend];
