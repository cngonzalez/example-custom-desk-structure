export default {
	name: 'region',
	title: 'Region',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
validation: (rule) => rule.custom(name => (!name.includes('dog') && 'Please include "Dog"')).info(),
		},
	],
}
