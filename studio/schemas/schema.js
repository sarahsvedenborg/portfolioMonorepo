// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

// Documents
import project from './documents/project'
import tag from './documents/tag'
import portfolioHome from './documents/portfolioHome'
import education from './documents/education'
import educationalInstitution from './documents/educationalInstitution'
import article from './documents/article'
import topic from './documents/topic'

// Objects
import anyLink from './objects/anyLink'
import anyLinkWithLabel from './objects/anyLinkWithLabel'
import sectionBlockContent from './objects/sectionBlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    project,
    tag,
    portfolioHome,
    education, 
    educationalInstitution,
    article,
    topic,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    anyLink,
    anyLinkWithLabel,
    sectionBlockContent,
  ]),
})
