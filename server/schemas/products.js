import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
   
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'productType',
      title: 'product type',
      type: 'string',
      options: {
        list: [
          {title: "Van", value: "van"},
          {title: "Car", value: "car"},
          {title: "Truck", value: "truck"},
        ],
        layout: 'radio'
      }
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'shortDescrption',
      title: 'Short Description',
      type: 'string',
    }),

    defineField({
      name: 'prize',
      title: 'Prize',
      type: 'number',
      description: 'The price of the product in usd',
      validation: (Rule) => Rule.required().positive(),
      options: {
        format: 'currency'
      } 
    }),
   
  ],

})
