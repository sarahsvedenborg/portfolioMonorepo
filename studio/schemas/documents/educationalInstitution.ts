import { FaUniversity as icon } from 'react-icons/fa'

export default {
    name: 'educationalInstitution',
    title: 'Institution',
    type: 'document',
    icon,
    fields: [
        {
            name: 'institutionName',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'institutionLocation',
            title: 'Location',
            type: 'string'
        }
    ]
} 
