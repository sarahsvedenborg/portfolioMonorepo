import {BiPurchaseTagAlt as icon} from 'react-icons/bi'
import { getGroups, localeDocument } from '../../utils'

const localeFields = [
    {
        name: 'title',
        title: 'Title',
        type: 'string'
        }
]

export default {
    name: 'tag',
    title: 'Tag',
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