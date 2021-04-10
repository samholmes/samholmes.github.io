import { e } from 'https://unpkg.com/ironjs'
import { links } from './state.js'

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