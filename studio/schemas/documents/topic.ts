import { getGroups, localeDocument } from "../../utils"

const localeFields = [
    {
        name: 'label',
        title: 'Label',
        type: 'string'
    }
]

export default {
    name: 'topic',
    title: 'Topic',
    type: 'document',
    groups: getGroups(),
    fields: [
      ...localeDocument(localeFields)
    ]
}