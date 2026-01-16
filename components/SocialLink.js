import { e } from 'https://unpkg.com/ironjs'

export const SocialLink = ({ name, url, icon }, index) => e.a.social({
	href: url,
	target: '_blank',
	title: name,
	'data-icon': index
})

export const injectSocialIcons = (socials) => {
	socials.forEach((social, i) => {
		const link = document.querySelector(`a[data-icon="${i}"]`)
		if (link) link.innerHTML = social.icon
	})
}
