import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import {Alert} from 'react-native';

import {api} from '../services/api';
import {database} from '../database';
import {OrderItem} from '../interfaces';
import {Item as ItemModel} from '../database/models/Item';
import {Q} from '@nozbe/watermelondb';

interface ItemContextData {
  items: OrderItem[];
  isLoading: boolean;
  selected: OrderItem;
  find: (upc: string, levelPrice: string) => Promise<void>;
  clearSelection: () => void;
}

interface ItemProviderProps {
  children: ReactNode;
}

const ItemContext = createContext<ItemContextData>({} as ItemContextData);

function ItemProvider({children}: ItemProviderProps) {
  const [data, setData] = useState<OrderItem[]>([]);
  const [selected, setSelected] = useState<OrderItem>({} as OrderItem);
  const [isLoading, setIsLoading] = useState(false);

  async function find(upc: string, levelPrice: string) {
    try {
      setIsLoading(true);
      await database.write(async () => {
        const itemsCollection = database.get<ItemModel>('items');

        const [itemSelected] = await itemsCollection
          .query(Q.where('upc', upc), Q.where('level_price', levelPrice))
          .fetch();

        !!itemSelected &&
          setSelected(current => ({
            ...current,
            itemCode: itemSelected.itemCode,
            priceLevel: itemSelected.priceLevel,
            description: itemSelected.description,
            brand: itemSelected.brand,
            pack: itemSelected.pack,
            size: itemSelected.size,
            uom: itemSelected.uom,
            price: itemSelected.price,
            deal: itemSelected.deal,
            dealOff: itemSelected.dealOff,
            status: itemSelected.status,
            date: itemSelected.date,
          }));
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return Alert.alert('Error', 'Unable to find order item data!');
    }
  }

  async function clearSelection() {
    setSelected(current => ({} as OrderItem));
  }

  async function updateItem(item: ItemModel) {
    try {
      setIsLoading(true);
      await database.write(async () => {
        const itemCollection = database.get<ItemModel>('items');

        const itemSelected = await itemCollection.find(item.id);
        await itemSelected.update(itemData => {
          //itemData.item_id = orderItem.itemNo;
          // itemData.brand = orderItem.brand;
          // itemData.description = orderItem.desc;
          // itemData.itemCode = orderItem.itemNo;
        });
        setIsLoading(false);
      });
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
      throw new Error(error);
    }
  }

  useEffect(() => {
    async function loadItems() {
      try {
        setIsLoading(true);
        let items: OrderItem[] = [];
        await database.read(async () => {
          const lastDownloadDate = await database.adapter.getLocal(
            'itemDownloadDate',
          );
          console.log({lastDownloadDate});
          if (lastDownloadDate === null) {
            const token = await database.adapter.getLocal('token');

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            const {data} = await api.get('/ItemsRange/0/1/DPIP1/41/test');

            items = data;
            console.log({items});

            setIsLoading(false);
          }
        });

        if (items.length > 0) {
          await database.write(async () => {
            items.map(async item => {
              console.log({item});
              const newItem = await database
                .get<ItemModel>('items')
                .create(newItem => {
                  newItem.item_id = newItem.id;
                  newItem.itemCode = item.itemCode;
                  newItem.priceLevel = item.priceLevel;
                  newItem.description = item.description;
                  newItem.brand = item.brand;
                  newItem.pack = item.pack;
                  newItem.size = item.size;
                  newItem.uom = item.uom;
                  newItem.price = item.price;
                  newItem.deal = item.deal;
                  newItem.dealOff = item.dealOff;
                  newItem.status = item.status;
                  newItem.date = item.date;
                });
              console.log({newItem});
            });
          });
        }
      } catch (error) {
        console.error({error});
        setIsLoading(false);
        return Alert.alert('Error', 'Unable to load items!');
      }
    }

    loadItems();
  }, []);

  return (
    <ItemContext.Provider
      value={{
        items: data,
        isLoading,
        selected,
        find,
        clearSelection,
      }}>
      {children}
    </ItemContext.Provider>
  );
}

function useItem(): ItemContextData {
  const context = useContext(ItemContext);

  return context;
}

export {ItemProvider, useItem};
