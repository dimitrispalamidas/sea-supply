"use client";

import { useState } from "react";
import { useOrder } from "@/context/OrderContext";
import Image from "next/image";
import { categories, Item } from "@/lib/items";

interface ItemListProps {
  items: Item[];
  addToCart: (item: Item) => void;
}

interface SectionProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSubcategory: (subcategory: string | null) => void;
  setSelectedSubSubcategory: (subsubcategory: string | null) => void;
}

const getItemsByCategory = (
  categoryName: string,
  subcategoryName: string,
  subsubcategoryName: string
): Item[] => {
  const category = categories.find((cat) => cat.name === categoryName);
  if (!category) return [];

  const subcategory = category.subcategories?.find(
    (sub) => sub.name === subcategoryName
  );
  if (!subcategory) return [];

  const subsubcategory = subcategory.subSubCategories?.find(
    (subSub) => subSub.name === subsubcategoryName
  );
  if (!subsubcategory) return [];

  return subsubcategory.items || [];
};

const ItemList: React.FC<ItemListProps> = ({ items, addToCart }) => {
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
            src={item.imgSrc || "/public/no-image.jpg"}
            alt={item.name}
            className='mb-2 rounded'
          />
          <h2 className='text-xl font-semibold'>{item.name}</h2>
          <p>{item.description}</p>
          <p className='text-sm text-gray-500'>{item.category}</p>
          <p className='font-bold'>${item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className='mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300'
          >
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
};

const PersonalItemsSection: React.FC<SectionProps> = ({
  setSelectedCategory,
  setSelectedSubcategory,
  setSelectedSubSubcategory,
}) => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4 flex justify-center'>
        Personal Items
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories[0]?.subcategories?.map((sub) => (
          <button
            key={sub.name}
            onClick={() => {
              setSelectedCategory("Personal");
              setSelectedSubcategory(sub.name);
              setSelectedSubSubcategory(null);
            }}
            className='mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300'
          >
            {sub.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProfessionalItemsSection: React.FC<SectionProps> = ({
  setSelectedCategory,
  setSelectedSubcategory,
  setSelectedSubSubcategory,
}) => {
  return (
    <div className='p-4 mt-10'>
      <h2 className='text-2xl font-bold mb-4 flex justify-center'>
        Professional Items
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories[1]?.subcategories?.map((sub) => (
          <button
            key={sub.name}
            onClick={() => {
              setSelectedCategory("Professional");
              setSelectedSubcategory(sub.name);
              setSelectedSubSubcategory(null);
            }}
            className='mt-2 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-300'
          >
            {sub.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const OrderMenu: React.FC = () => {
  const { addToCart, submitOrder } = useOrder();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedSubSubcategory, setSelectedSubSubcategory] = useState<
    string | null
  >(null);

  const renderItemsByCategory = () => {
    if (!selectedCategory || !selectedSubcategory) return null;

    if (!selectedSubSubcategory) {
      const category = categories.find((cat) => cat.name === selectedCategory);
      const subcategory = category?.subcategories?.find(
        (sub) => sub.name === selectedSubcategory
      );
      const subSubCategories = subcategory?.subSubCategories;

      return (
        <div className='p-4'>
          <h2 className='text-2xl text-center font-bold mb-4'>
            {selectedSubcategory} Subcategories
          </h2>
          <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
            {subSubCategories?.map((subSub) => (
              <div
                key={subSub.name}
                onClick={() => setSelectedSubSubcategory(subSub.name)}
                className='relative bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer'
              >
                <div className='relative w-full pb-[100%]'>
                  <Image
                    width={96}
                    height={96}
                    src={subSub.imgSrc || "/public/no-image.jpg"}
                    alt={subSub.name}
                    className='absolute inset-0 w-full h-full object-contain'
                  />
                </div>
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300'>
                  {subSub.name}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedSubcategory(null);
              setSelectedSubSubcategory(null);
            }}
            className='mb-4 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors duration-300'
          >
            Back to Categories
          </button>
        </div>
      );
    }

    const itemsToRender = getItemsByCategory(
      selectedCategory,
      selectedSubcategory,
      selectedSubSubcategory
    );

    return (
      <div className='p-4'>
        <button
          onClick={() => {
            setSelectedSubSubcategory(null);
          }}
          className='mb-4 bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors duration-300'
        >
          Back to Subcategories
        </button>
        <h2 className='text-2xl font-bold mb-4'>
          {selectedSubSubcategory} Items
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
          <ItemList items={itemsToRender} addToCart={addToCart} />
        </div>
      </div>
    );
  };

  return (
    <>
      {!selectedCategory && (
        <>
          <PersonalItemsSection
            setSelectedCategory={setSelectedCategory}
            setSelectedSubcategory={setSelectedSubcategory}
            setSelectedSubSubcategory={setSelectedSubSubcategory}
          />
          <ProfessionalItemsSection
            setSelectedCategory={setSelectedCategory}
            setSelectedSubcategory={setSelectedSubcategory}
            setSelectedSubSubcategory={setSelectedSubSubcategory}
          />
        </>
      )}
      {selectedCategory && renderItemsByCategory()}
      <div className='p-4'>
        <button
          onClick={submitOrder}
          className='mt-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors duration-300'
        >
          Submit Order
        </button>
      </div>
    </>
  );
};

export default OrderMenu;
