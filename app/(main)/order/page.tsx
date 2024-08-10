"use client";

import { useState } from "react";
import { useOrder } from "@/context/OrderContext";
import Image from "next/image";
import { categories, Item } from "@/lib/items";
import { Button } from "@/components/ui/button";
import { PersonalItemsSection } from "./components/personalitems";
import { ProfessionalItemsSection } from "./components/professionalitems";
import OrderList from "./components/order-list";
import { ItemList } from "./components/item-list";

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

const OrderMenu: React.FC = () => {
  const { addToCart } = useOrder();
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

    const items = getItemsByCategory(
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
          <ItemList items={items} addToCart={addToCart} />
        </div>
      </div>
    );
  };

  return (
    <>
      {!selectedCategory && (
        <div className='min-h-screen'>
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

          <OrderList />
        </div>
      )}
      {selectedCategory && renderItemsByCategory()}
    </>
  );
};

export default OrderMenu;
