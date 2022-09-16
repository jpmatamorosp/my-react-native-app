import { tableSchema } from '@nozbe/watermelondb';

const itemSchema = tableSchema({
  name: 'items',
  columns: [
    {
      name: 'item_id',
      type: 'string'
    },
    {
      name: 'item_code',
      type: 'string'
    },
    {
      name: 'price_level',
      type: 'string'
    },
    {
      name: 'description',
      type: 'string'
    },
    {
      name: 'brand',
      type: 'string'
    },
    {
      name: 'pack',
      type: 'string'
    },
    {
      name: 'size',
      type: 'string'
    },
    {
      name: 'uom',
      type: 'string'
    },
    {
      name: 'price',
      type: 'string'
    },
    {
      name: 'deal',
      type: 'string'
    },
    {
      name: 'deal_off',
      type: 'string'
    },
    {
      name: 'status',
      type: 'string'
    },
    {
      name: 'date',
      type: 'string'
    },
  ]
})

export { itemSchema }