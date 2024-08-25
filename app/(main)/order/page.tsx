"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import Cart from "./components/Cart";
import Image from "next/image";

type Category = {
  id: string;
  name: string;
  imgSrc?: string | null;
  subcategories: {
    id: string;
    name: string;
    imgSrc?: string | null;
    subsubcategories: {
      id: string;
      name: string;
      imgSrc?: string | null;
      items: {
        id: string;
        name: string;
        description: string;
        price: number;
        imgSrc?: string | null;
      }[];
    }[];
  }[];
};

const CategoriesPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [selectedSubsubcategory, setSelectedSubsubcategory] = useState<
    string | null
  >(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleSubcategoryClick = (subcategoryId: string) => {
    setSelectedSubcategory(subcategoryId);
    setSelectedSubsubcategory(null);
  };

  const handleSubsubcategoryClick = (subsubcategoryId: string) => {
    setSelectedSubsubcategory(subsubcategoryId);
  };

  const handleBackClick = () => {
    if (selectedSubsubcategory) {
      setSelectedSubsubcategory(null);
    } else if (selectedSubcategory) {
      setSelectedSubcategory(null);
    }
  };

  return (
    <>
      <div className='flex flex-col text-center mb-8 pt-8'>
        {selectedSubcategory || selectedSubsubcategory ? (
          <Button
            variant='default'
            onClick={handleBackClick}
            className='mb-4 text-blue-500'
          >
            ⬅️ Go Back
          </Button>
        ) : null}

        {/* Only render categories if no subcategory is selected */}
        {selectedSubcategory === null &&
          categories.map((category) => (
            <div key={category.id} className='mb-6'>
              <h2 className='text-2xl font-semibold mb-2'>
                {category.name} Items
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                {category.subcategories.map((subcategory) => {
                  return (
                    <Button
                      variant={"default"}
                      size={"lg"}
                      key={subcategory.id}
                      className='flex justify-between items-center max-w-xs w-full'
                      onClick={() => handleSubcategoryClick(subcategory.id)}
                    >
                      {subcategory.name}
                      <Image
                        alt='Default image'
                        width={48}
                        height={48}
                        className='rounded'
                        src={
                          subcategory.imgSrc
                            ? subcategory.imgSrc
                            : "/no-image.jpg"
                        }
                      />
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}

        {/* Only render subsubcategories if no subsubcategory is selected */}
        {selectedSubsubcategory === null &&
          selectedSubcategory &&
          categories
            .flatMap((category) =>
              category.subcategories.filter(
                (subcategory) => subcategory.id === selectedSubcategory
              )
            )
            .map((subcategory) => (
              <div key={subcategory.id} className='grid grid-cols-2 gap-4'>
                {subcategory.subsubcategories.map((subsubcategory) => (
                  <>
                    <div
                      key={subsubcategory.name}
                      onClick={() =>
                        handleSubsubcategoryClick(subsubcategory.id)
                      }
                      className='relative bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden cursor-pointer'
                    >
                      <div className='relative w-full pb-[100%]'>
                        <Image
                          width={96}
                          height={96}
                          src={subsubcategory.imgSrc || "/public/no-image.jpg"}
                          alt={subsubcategory.name}
                          className='absolute inset-0 w-full h-full object-contain'
                        />
                      </div>
                      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-10 text-white text-lg font-semibold'>
                        {subsubcategory.name}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            ))}

        {/* Render items if a subsubcategory is selected */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {selectedSubsubcategory &&
            categories
              .flatMap((category) =>
                category.subcategories.filter(
                  (subcategory) => subcategory.id === selectedSubcategory
                )
              )
              .flatMap((subcategory) =>
                subcategory.subsubcategories.filter(
                  (subsubcategory) =>
                    subsubcategory.id === selectedSubsubcategory
                )
              )
              .flatMap((subsubcategory) =>
                subsubcategory.items.map((item) => (
                  <div
                    key={item.id}
                    className='bg-white border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between'
                  >
                    <div className='flex flex-col items-center'>
                      <Image
                        width={100}
                        height={100}
                        src={item.imgSrc ? item.imgSrc : "/no-image.jpg"}
                        alt={item.name}
                        className='mb-2 rounded object-cover'
                      />
                      <div className='text-center'>
                        <h2 className='text-xl font-semibold mb-2'>
                          {item.name}
                        </h2>
                        <p className='text-gray-700 mb-2'>{item.description}</p>
                        <p className='font-bold text-lg mb-2'>${item.price}</p>
                      </div>
                    </div>
                    <Button
                      variant={"secondary"}
                      // onClick={() => addToCart(item)}
                      className='mx-auto'
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))
              )}
        </div>
      </div>
      {/* <Cart /> */}
    </>
  );
};

export default CategoriesPage;
