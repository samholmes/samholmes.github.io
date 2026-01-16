import { e } from 'https://unpkg.com/ironjs'
import { TimelineItem } from './TimelineItem.js'

export const Timeline = ({ items }) => e.section.timeline(
	items.map(TimelineItem)
)
