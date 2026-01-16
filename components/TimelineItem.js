import { e } from 'https://unpkg.com/ironjs'

export const TimelineItem = ({ date, endDate, title, description, active }) => {
	const className = active ? 'timeline_item active' : 'timeline_item'
	return e.div({ class: className },
		e.div.date_range(
			e.span.date(date),
			e.span.date_end(endDate)
		),
		e.div.content(
			e.h3.title(title),
			e.p.description(description)
		)
	)
}
