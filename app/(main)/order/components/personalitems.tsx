import { Button } from "@/components/ui/button";
import { categories } from "@/lib/items";
import Image from "next/image";

interface SectionProps {
  setSelectedCategory: (category: string | null) => void;
  setSelectedSubcategory: (subcategory: string | null) => void;
  setSelectedSubSubcategory: (subsubcategory: string | null) => void;
}

export const PersonalItemsSection: React.FC<SectionProps> = ({
  setSelectedCategory,
  setSelectedSubcategory,
  setSelectedSubSubcategory,
}) => {
  return (
    <div className='p-4'>
      <h2 className='text-2xl font-bold mb-4 flex justify-center text-gray-700'>
        Personal Items
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {categories[0]?.subcategories?.map((sub) => (
          <div key={sub.name} className='flex justify-center'>
            <Button
              variant={"default"}
              size={"lg"}
              onClick={() => {
                setSelectedCategory("Personal");
                setSelectedSubcategory(sub.name);
                setSelectedSubSubcategory(null);
              }}
              className='flex justify-between items-center max-w-xs w-full'
            >
              {sub.name}
              <Image
                width={48}
                height={48}
                src={sub.imgSrc ? sub.imgSrc : "/no-image.jpg"}
                alt={sub.name}
                className='rounded'
              />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
