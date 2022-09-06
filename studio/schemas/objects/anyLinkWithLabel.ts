export default {
    name: 'anyLinkWithLabel',
    title: 'Link with label',
    type: 'object',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'string'
        }, {
            name: 'link',
            title: 'Link',
            type: 'anyLink'
        }
    ]
}