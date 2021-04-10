import { e, jarvis } from 'https://unpkg.com/ironjs'

// State:

export const links = [
	{
		title: 'Download Edge', 
		url: 'https://edge.app',
	},
	{
		title: 'Strike Me', 
		url: 'https://strike.me/samholmes',
	},
	{
		title: 'Download Strike, Get $5 Free', 
		url: 'https://invite.strike.me/VR4K6D',
	},
	{
		title: 'Get $100 at Digital Ocean', 
		url: 'https://m.do.co/c/6f680d1e7f05',
	},
	{
		title: 'IronJS', 
		url: 'https://ironjs.org',
	},
]

// View:

const link = (title, href) => e.a.link({
	target: '_blank',
	href,
}, title)

export const page = e.div.container(
	e.img.photo({
		src: 'photo.jpg',
		alt: 'My face'
	}),
	e.h1("Sam Holmes"),
	e.div.links(
		links.map(({ title, url }) => link(title, url))
	)
)

jarvis.render(page, document.body)