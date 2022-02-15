export default {
  name: 'heroPanel',
  title: 'Hero panel',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },	
    {
      name: 'region',
      title: 'Region',
      type: 'reference',
      to: [{ type: 'region' }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },	
    {
      name: 'otherArray',
      title: 'Other Array',
      type: 'array',
      of: [
        {type: 'string'}
      ]
    },	

  ],
}