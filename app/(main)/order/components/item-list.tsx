import { Button } from "@/components/ui/button";
import { Item } from "@/lib/items";
import Image from "next/image";

interface ItemListProps {
  items: Item[];
  addToCart: (item: Item) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ items, addToCart }) => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className='bg-white border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300'
        >
          <Image
            width={48}
            height={48}
            src={item.imgSrc ? item.imgSrc : "/no-image.jpg"}
            alt={item.name}
            className='mb-2 rounded'
          />
          <h2 className='text-xl font-semibold'>{item.name}</h2>
          <p>{item.description}</p>
          <p className='text-sm text-gray-500'>{item.category}</p>
          <p className='font-bold'>${item.price}</p>
          <p className='font-bold'>{item.amount}</p>
          <Button
            variant={"secondary"}
            onClick={() => addToCart(item)}
            className='mt-2'
          >
            Add to Cart
          </Button>
        </div>
      ))}
    </>
  );
};
