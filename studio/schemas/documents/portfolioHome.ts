import {BiHome as icon} from 'react-icons/bi'
import { getGroups, localeDocument } from '../../utils'

const localeFields = [
    {
        name: 'title',
        title: 'Title - line 1',
        type: 'string',
    },
    {
        name: 'subtitle',
        title: 'Title - line 2',
        type: 'string',
    },
    {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
            {type: 'sectionBlockContent'}
        ]
    },
]

export default {
    name: 'portfolioHome',
    title: 'Portfolio LandingPage',
    type: 'document',
    icon,
    groups: getGroups(),
    fields: [
...localeDocument(localeFields)
        
    ],
    preview: {
        select: {
            title: 'no.title',
        },
        prepare({title}){
            return {title}
        }
    }

}