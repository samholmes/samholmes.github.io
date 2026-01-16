import { e, jarvis } from 'https://unpkg.com/ironjs'
import { Header, Timeline, injectSocialIcons } from './components/index.js'
import { socials, timeline } from './state/index.js'

// App:

const page = e.div.container(
	Header({ name: 'Sam Holmes', socials }),
	Timeline({ items: timeline })
)

jarvis.render(page, document.body)

// Post-render: inject SVG icons
injectSocialIcons(socials)
