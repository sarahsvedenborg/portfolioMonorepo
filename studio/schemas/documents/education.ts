import {GiTiedScroll as icon} from 'react-icons/gi'
import {getGroups, localeDocument} from '../../utils'

const localeFields = [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'subject',
        title: 'Subject',
        type: 'string',
    },
]

export default {
    name: 'education',
    title: 'Education',
    type: 'document',
    icon,
    groups: getGroups(),
    fields: [
         ...localeDocument(localeFields), 
        {
            name: 'level',
            title: 'Level',
            type: 'string',
            group: 'common',
            options: {
                list: [
                  {title: 'Årsstudium', value: 'year'},
                  {title: 'Bachelor', value: 'bachelor'},
                  {title: 'Master', value: 'master'}
                ], 
                layout: 'radio' ,
                direction: 'horizontal'
              }
        },
        {
            name: 'startDate',
            title: 'Start date',
            type: 'date',
            group: 'common',
        },
        {
            name: 'endDate',
            title: 'End date',
            type: 'date',
            group: 'common',
        },
        {
            name: 'institution',
            title: 'Institution',
            type: 'reference',
            to: [{type: 'educationalInstitution'}],
            group: 'common',
        }, 
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