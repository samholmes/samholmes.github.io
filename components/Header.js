import { e } from 'https://unpkg.com/ironjs'
import { SocialLink } from './SocialLink.js'

export const Header = ({ name, socials }) => e.header(
	e.h1(name),
	e.nav.socials(
		socials.map((social, i) => SocialLink(social, i))
	)
)
