import { e, jarvis } from 'https://unpkg.com/ironjs'

// State:

export const links = [
	{
		title: 'Follow me on X',
		url: 'https://x.com/sam_holmes'
	},
	{
		title: 'Checkout my GitHub',
		url: 'https://github.com/samholmes'
	},
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
	}
]

const bio = [
	`I am me. Currently building freedom tech at `, 
	e.a({ href: 'https://edge.app' }, 'Edge'),
	`.`
]

// View:

const link = (title, href) => e.a.link({
	target: '_blank',
	href,
}, title)

export const page = e.div.container(
	e.h1("Sam Holmes"),
	e.p(bio),	
	e.div.links(
		links.map(({ title, url }) => link(title, url))
	)
)

jarvis.render(page, document.body)
