import Image from "next/image";
import React from "react";

interface ItemCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 m-4'>
      <Image
        src={image}
        width={30}
        height={30}
        alt={title}
        className='h-20 mx-auto mb-4'
      />
      <h2 className='text-xl font-bold'>{title}</h2>
      <p className='text-gray-500'>{description}</p>
      <p className='text-lg font-semibold mt-2'>${price}</p>
      <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded'>
        ADD TO CART
      </button>
    </div>
  );
};

export default ItemCard;
