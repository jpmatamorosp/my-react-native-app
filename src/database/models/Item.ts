import { Model } from '@nozbe/watermelondb';
import { field } from '@nozbe/watermelondb/decorators';

class Item extends Model {
  static table = 'items'

  @field('item_id')
  item_id!: string;

  @field('item_code')
  itemCode!: string;

  @field('price_level')
  priceLevel!: string;

  @field('description')
  description!: string;

  @field('brand')
  brand!: string;

  @field('pack')
  pack!: string;

  @field('size')
  size!: string;

  @field('uom')
  uom!: string;

  @field('price')
  price!: string;

  @field('deal')
  deal!: string;

  @field('deal_off')
  dealOff!: string;

  @field('status')
  status!: string;

  @field('date')
  date!: string;
}

export { Item }

