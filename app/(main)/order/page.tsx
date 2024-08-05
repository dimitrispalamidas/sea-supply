"use client";

import { useState } from "react";
import { useOrder } from "@/context/OrderContext";
import Image from "next/image";
import { categories, Item } from "@/lib/items";
import { Button } from "@/components/ui/button";

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
            src={item.imgSrc ? item.imgSrc : "/no-image.jpg"}
            alt={item.name}
            className='mb-2 rounded'
          />
          <h2 className='text-xl font-semibold'>{item.name}</h2>
          <p>{item.description}</p>
          <p className='text-sm text-gray-500'>{item.category}</p>
          <p className='font-bold'>${item.price}</p>
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

const PersonalItemsSection: React.FC<SectionProps> = ({
  setSelectedCategory,
  setSelectedSubcategory,
  setSelectedSubSubcategory,
}) => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4 flex justify-center text-gray-700'>
        Personal Items
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories[0]?.subcategories?.map((sub) => (
          <Button
            key={sub.name}
            variant={"primary"}
            onClick={() => {
              setSelectedCategory("Personal");
              setSelectedSubcategory(sub.name);
              setSelectedSubSubcategory(null);
            }}
          >
            {sub.name}
          </Button>
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
      <h2 className='text-2xl font-bold mb-4 flex justify-center text-gray-700'>
        Professional Items
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories[1]?.subcategories?.map((sub) => (
          <Button
            key={sub.name}
            variant={"primary"}
            onClick={() => {
              setSelectedCategory("Professional");
              setSelectedSubcategory(sub.name);
              setSelectedSubSubcategory(null);
            }}
          >
            {sub.name}
          </Button>
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
          <h2 className='text-2xl text-center font-bold mb-4 text-gray-700'>
            {selectedSubcategory} Subcategories
          </h2>
          <Button
            onClick={() => {
              setSelectedCategory(null);
              setSelectedSubcategory(null);
              setSelectedSubSubcategory(null);
            }}
            className='mb-4'
          >
            ⬅️ Go Back
          </Button>
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
                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-10 text-white text-lg font-semibold'>
                  {subSub.name}
                </div>
              </div>
            ))}
          </div>
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
        <h2 className='text-2xl font-bold mb-4 text-center'>
          {selectedSubSubcategory} Items
        </h2>
        <Button
          onClick={() => {
            setSelectedSubSubcategory(null);
          }}
          className='mb-4'
        >
          ⬅️ Go Back
        </Button>
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
      <Button
        variant={"secondary"}
        onClick={submitOrder}
        className='fixed bottom-10 right-10 hidden md:flex'
      >
        <span className='mr-2'>🛒</span>See Cart
      </Button>
    </>
  );
};

export default OrderMenu;
