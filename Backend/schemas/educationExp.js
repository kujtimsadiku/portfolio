export default {
  name: 'educationExp',
  title: 'Education Experience',
  type: 'document',
  fields: [
    {
      name: 'school',
      title: 'School',
      type: 'string',
    },
    {
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [{name: 'field', title: 'Field', type: 'string'}],
    },
  ],
}
