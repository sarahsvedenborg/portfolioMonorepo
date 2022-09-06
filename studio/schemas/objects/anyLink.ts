export default {
    name: 'anyLink',
    title:  'Link',
    type: 'object',
    options: {collapsible: true},
    fields: [
        {
            name: 'linkType',
            title: 'Link type',
            type: 'string',
            options: {
                list: [
                  {title: 'Tom', value: 'empty'},
                  {title: 'Internal', value: 'internal'},
                  {title: 'External', value: 'external'}
                ], 
                layout: 'radio' ,
                direction: 'horizontal'
              }
        },
        {
            name: 'url',
            title: 'URL',
            description: 'https://',
            type: 'url',
            hidden: ({ parent }) => parent.linkType !== 'external'
        },
        {
            name: 'target',
            title: 'Target',
            type: 'reference',
            to: [
                {type: 'project'}
            ],
            hidden: ({ parent }) => parent.linkType !== 'internal'
        }
    ]
}