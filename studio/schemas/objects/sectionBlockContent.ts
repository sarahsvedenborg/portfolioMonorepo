import {BiText as icon} from 'react-icons/bi'

export default {
    name: 'sectionBlockContent',
    title: 'Rich text',
    type: 'object',
    icon,
    fields: [
        {
            name: 'content',
            title: 'Text',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
          content: 'content'
        },
        prepare({content}) {
          return {
              title: content[0]
              ? content[0].children
                .filter(child => child._type === 'span')
                .map(span => span.text)
                .join('')
              : 'No title'
          }
        }
      }
}