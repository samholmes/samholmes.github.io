import { e } from 'https://unpkg.com/ironjs'

export const TimelineItem = ({ date, endDate, title, description, active, url }) => {
	const classes = ['timeline_item']
	if (active) classes.push('active')
	if (url) classes.push('linkable')
	
	const content = [
		e.div.date_range(
			e.span.date(date),
			e.span.date_end(endDate)
		),
		e.div.content(
			e.h3.title(title),
			e.p.description(description)
		)
	]
	
	return url
		? e.a({ class: classes.join(' '), href: url, target: '_blank' }, ...content)
		: e.div({ class: classes.join(' ') }, ...content)
}
