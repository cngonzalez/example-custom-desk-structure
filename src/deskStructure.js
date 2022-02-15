import S from '@sanity/desk-tool/structure-builder'

export default () => 
	S.list()
		.title('Content')
		.items([
			S.listItem('region')
			.title('Items by region')
			.id('region')
			.child(
				S.documentList()
					.title('Regions')
					.schemaType('region')
					.filter('_type == "region"')
					.child(regionId => // Returns the id for the selected region document
						S.list()
							.title('Pagebuilder options by region')
							.items([
                //explicitly make an item in the structure for access to edit pane
                S.documentListItem()
                  .schemaType('region')
                  .id(regionId)
                  .title('Region settings'),
								S.listItem('heroPanel')
								 .title('Hero Panels for region')
								 .child(
									 S.documentTypeList('heroPanel')
									 	.title('Heros for region')
										.filter('_type == "heroPanel" && region._ref == $regionId')
										.params({regionId})
										.initialValueTemplates([
											S.initialValueTemplateItem('heroPanel-has-region', {regionId})
										])
								 ),
									S.listItem('carousel')
									.title('Carousels for region')
									.child(
										S.documentList()
											.title('Carousels for region')
											.schemaType('carousel')
											.filter('_type == "carousel" && region._ref == $regionId')
											.params({regionId})
											.initialValueTemplates([
												S.initialValueTemplateItem('carousel-has-region', {regionId})
											])
									)
							])
					)
					// needed to preserve create, edit, etc. actions on "region" document type
					.canHandleIntent(() => false)
			)
		])
//fix spaces
