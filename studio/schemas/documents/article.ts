import {BiDetail as icon} from 'react-icons/bi'
import { getGroups, localeDocument } from "../../utils"

const localeFields = [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
    }
]

export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    icon,
    groups: getGroups(),
    fields: [
        ...localeDocument(localeFields),
        {
            name: 'topics',
            title: 'Topics',
            type: 'array',
            of: [
                {type: 'reference', to: {type: 'topic'} }
            ]
        }
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