export default {
  name: 'carousel',
  title: 'Carousel',
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
      type: 'array',
      of: [{ type: 'image' }],
    },
  ],
}