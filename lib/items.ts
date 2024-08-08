export interface Category {
  name: string;
  imgSrc?: string;
  subcategories?: SubCategory[];
}

export interface SubCategory {
  name: string;
  imgSrc?: string;
  subSubCategories?: SubSubCategory[];
}

export interface SubSubCategory {
  name: string;
  imgSrc?: string;
  items?: Item[];
}

export interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imgSrc?: string;
}

export const categories: Category[] = [
  {
    name: "Personal",
    imgSrc: "/images/categories/personal.jpg",
    subcategories: [
      {
        name: "Food",
        imgSrc: "/items/subcategories/food.jpg",
        subSubCategories: [
          {
            name: "Fruits",
            imgSrc: "/items/food-categories/fruits.jpg",
            items: [
              {
                id: 1,
                name: "Apples",
                category: "Fruits",
                description: "Fresh red apples",
                price: 1.5,
                imgSrc: "/items/food-items/apples.png",
              },
              {
                id: 2,
                name: "Bananas",
                category: "Fruits",
                description: "Ripe yellow bananas",
                price: 1.2,
                imgSrc: "/items/food-items/bananas.png",
              },
              {
                id: 3,
                name: "Oranges",
                category: "Fruits",
                description: "Juicy oranges",
                price: 1.8,
                imgSrc: "/items/food-items/oranges.png",
              },
            ],
          },
          {
            name: "Vegetables",
            imgSrc: "/items/food-categories/vegetables.jpg",
            items: [
              {
                id: 4,
                name: "Carrots",
                category: "Vegetables",
                description: "Fresh carrots",
                price: 0.9,
                imgSrc: "/items/food-items/carrots.png",
              },
              {
                id: 5,
                name: "Broccoli",
                category: "Vegetables",
                description: "Organic broccoli",
                price: 1.3,
                imgSrc: "/items/food-items/broccoli.png",
              },
              {
                id: 6,
                name: "Spinach",
                category: "Vegetables",
                description: "Green spinach leaves",
                price: 1.1,
                imgSrc: "/items/food-items/spinach.png",
              },
            ],
          },
          {
            name: "Dairy",
            imgSrc: "/items/food-categories/dairy.jpg",
            items: [
              {
                id: 7,
                name: "Milk",
                category: "Dairy",
                description: "Fresh milk",
                price: 1.5,
                imgSrc: "/items/food-items/milk-carton.png",
              },
              {
                id: 8,
                name: "Cheese",
                category: "Dairy",
                description: "Cheddar cheese",
                price: 2.5,
                imgSrc: "/items/food-items/cheese.png",
              },
              {
                id: 9,
                name: "Yogurt",
                category: "Dairy",
                description: "Plain yogurt",
                price: 1.8,
                imgSrc: "/items/food-items/yogurt.jpg",
              },
            ],
          },
        ],
      },

      {
        name: "Beverages",
        imgSrc: "/items/subcategories/beverages.jpg",
        subSubCategories: [
          {
            name: "Water",
            imgSrc: "/images/subsubcategories/water.jpg",
            items: [
              {
                id: 19,
                name: "Bottled Water",
                category: "Water",
                description: "Pure bottled water",
                price: 1,
                imgSrc: "/images/liquid/beverages/water.jpg",
              },
              {
                id: 20,
                name: "Soda",
                category: "Water",
                description: "Refreshing soda drink",
                price: 2,
                imgSrc: "/images/liquid/beverages/soda.jpg",
              },
            ],
          },
          {
            name: "Juice",
            imgSrc: "/images/subsubcategories/juice.jpg",
            items: [
              {
                id: 25,
                name: "Orange Juice",
                category: "Juice",
                description: "Fresh orange juice",
                price: 5,
                imgSrc: "/images/liquid/beverages/orange-juice.jpg",
              },
              {
                id: 26,
                name: "Apple Juice",
                category: "Juice",
                description: "Crisp apple juice",
                price: 6,
                imgSrc: "/images/liquid/beverages/apple-juice.jpg",
              },
              {
                id: 27,
                name: "Mixed - 9 Fruits",
                category: "Juice",
                description: "Juice blend of 9 fruits",
                price: 4,
                imgSrc: "/images/liquid/beverages/mixed-juice.jpg",
              },
            ],
          },
          {
            name: "Alcohol",
            imgSrc: "/images/subsubcategories/alcohol.jpg",
            items: [
              {
                id: 22,
                name: "Beer",
                category: "Alcohol",
                description: "Craft beer",
                price: 3,
                imgSrc: "/images/liquid/alcohol/beer.jpg",
              },
              {
                id: 23,
                name: "Wine",
                category: "Alcohol",
                description: "Fine red wine",
                price: 15,
                imgSrc: "/images/liquid/alcohol/wine.jpg",
              },
              {
                id: 24,
                name: "Whiskey",
                category: "Alcohol",
                description: "Aged whiskey",
                price: 25,
                imgSrc: "/images/liquid/alcohol/whiskey.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Clothes",
        imgSrc: "/items/subcategories/clothes.jpg",
        subSubCategories: [
          {
            name: "Casual",
            imgSrc: "/images/subsubcategories/casual.jpg",
            items: [
              {
                id: 10,
                name: "T-Shirts",
                category: "Casual",
                description: "Comfortable T-Shirts",
                price: 10,
                imgSrc: "/images/clothes/casual/t-shirts.jpg",
              },
              {
                id: 11,
                name: "Jeans",
                category: "Casual",
                description: "Stylish jeans",
                price: 40,
                imgSrc: "/images/clothes/casual/jeans.jpg",
              },
              {
                id: 12,
                name: "Sneakers",
                category: "Casual",
                description: "Comfortable sneakers",
                price: 50,
                imgSrc: "/images/clothes/casual/sneakers.jpg",
              },
            ],
          },
          {
            name: "Formal",
            imgSrc: "/images/subsubcategories/formal.jpg",
            items: [
              {
                id: 13,
                name: "Suits",
                category: "Formal",
                description: "Elegant suits",
                price: 200,
                imgSrc: "/images/clothes/formal/suits.jpg",
              },
              {
                id: 14,
                name: "Dresses",
                category: "Formal",
                description: "Beautiful dresses",
                price: 100,
                imgSrc: "/images/clothes/formal/dresses.jpg",
              },
              {
                id: 15,
                name: "Dress Shoes",
                category: "Formal",
                description: "Stylish dress shoes",
                price: 80,
                imgSrc: "/images/clothes/formal/dress-shoes.jpg",
              },
            ],
          },
          {
            name: "Sportswear",
            imgSrc: "/images/subsubcategories/sportswear.jpg",
            items: [
              {
                id: 16,
                name: "Running Shoes",
                category: "Sportswear",
                description: "Lightweight running shoes",
                price: 70,
                imgSrc: "/images/clothes/sportswear/running-shoes.jpg",
              },
              {
                id: 17,
                name: "Tracksuits",
                category: "Sportswear",
                description: "Comfortable tracksuits",
                price: 60,
                imgSrc: "/images/clothes/sportswear/tracksuits.jpg",
              },
              {
                id: 18,
                name: "Sweatbands",
                category: "Sportswear",
                description: "Absorbent sweatbands",
                price: 15,
                imgSrc: "/images/clothes/sportswear/sweatbands.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Personal Care",
        imgSrc: "/items/subcategories/personal-care.jpg",
        subSubCategories: [
          {
            name: "Hygiene",
            imgSrc: "/images/subsubcategories/hygiene.jpg",
            items: [
              {
                id: 28,
                name: "Toothpaste",
                category: "Hygiene",
                description: "Fluoride toothpaste",
                price: 2.5,
                imgSrc: "/images/personal-care/hygiene/toothpaste.jpg",
              },
              {
                id: 29,
                name: "Shampoo",
                category: "Hygiene",
                description: "Anti-dandruff shampoo",
                price: 4.5,
                imgSrc: "/images/personal-care/hygiene/shampoo.jpg",
              },
              {
                id: 30,
                name: "Soap",
                category: "Hygiene",
                description: "Moisturizing soap",
                price: 1.5,
                imgSrc: "/images/personal-care/hygiene/soap.jpg",
              },
            ],
          },
          {
            name: "Cosmetics",
            imgSrc: "/images/subsubcategories/cosmetics.jpg",
            items: [
              {
                id: 31,
                name: "Lipstick",
                category: "Cosmetics",
                description: "Long-lasting lipstick",
                price: 12,
                imgSrc: "/images/personal-care/cosmetics/lipstick.jpg",
              },
              {
                id: 32,
                name: "Foundation",
                category: "Cosmetics",
                description: "Liquid foundation",
                price: 15,
                imgSrc: "/images/personal-care/cosmetics/foundation.jpg",
              },
              {
                id: 33,
                name: "Mascara",
                category: "Cosmetics",
                description: "Waterproof mascara",
                price: 10,
                imgSrc: "/images/personal-care/cosmetics/mascara.jpg",
              },
            ],
          },
          {
            name: "Skincare",
            imgSrc: "/images/subsubcategories/skincare.jpg",
            items: [
              {
                id: 34,
                name: "Moisturizers",
                category: "Skincare",
                description: "Hydrating moisturizers",
                price: 18,
                imgSrc: "/images/personal-care/skincare/moisturizers.jpg",
              },
              {
                id: 35,
                name: "Sunscreen",
                category: "Skincare",
                description: "SPF 50 sunscreen",
                price: 20,
                imgSrc: "/images/personal-care/skincare/sunscreen.jpg",
              },
              {
                id: 36,
                name: "Serums",
                category: "Skincare",
                description: "Anti-aging serums",
                price: 25,
                imgSrc: "/images/personal-care/skincare/serums.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Electronic Devices",
        imgSrc: "/items/subcategories/e-devices.png",
        subSubCategories: [
          {
            name: "Mobile Devices",
            imgSrc: "/images/subsubcategories/mobile-devices.jpg",
            items: [
              {
                id: 37,
                name: "Smartphones",
                category: "Mobile Devices",
                description: "Latest smartphones",
                price: 700,
                imgSrc: "/images/electronics/mobile-devices/smartphones.jpg",
              },
              {
                id: 38,
                name: "Tablets",
                category: "Mobile Devices",
                description: "High-resolution tablets",
                price: 500,
                imgSrc: "/images/electronics/mobile-devices/tablets.jpg",
              },
              {
                id: 39,
                name: "Smartwatches",
                category: "Mobile Devices",
                description: "Smartwatches with fitness tracking",
                price: 250,
                imgSrc: "/images/electronics/mobile-devices/smartwatches.jpg",
              },
            ],
          },
          {
            name: "Computers",
            imgSrc: "/images/subsubcategories/computers.jpg",
            items: [
              {
                id: 40,
                name: "Laptops",
                category: "Computers",
                description: "High-performance laptops",
                price: 1200,
                imgSrc: "/images/electronics/computers/laptops.jpg",
              },
              {
                id: 41,
                name: "Desktops",
                category: "Computers",
                description: "Powerful desktop computers",
                price: 1500,
                imgSrc: "/images/electronics/computers/desktops.jpg",
              },
              {
                id: 42,
                name: "Monitors",
                category: "Computers",
                description: "HD monitors",
                price: 300,
                imgSrc: "/images/electronics/computers/monitors.jpg",
              },
            ],
          },
          {
            name: "Accessories",
            imgSrc: "/images/subsubcategories/accessories.jpg",
            items: [
              {
                id: 43,
                name: "Chargers",
                category: "Accessories",
                description: "Fast chargers",
                price: 20,
                imgSrc: "/images/electronics/accessories/chargers.jpg",
              },
              {
                id: 44,
                name: "Headphones",
                category: "Accessories",
                description: "Noise-canceling headphones",
                price: 100,
                imgSrc: "/images/electronics/accessories/headphones.jpg",
              },
              {
                id: 45,
                name: "Cables",
                category: "Accessories",
                description: "Durable cables",
                price: 10,
                imgSrc: "/images/electronics/accessories/cables.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Professional",
    imgSrc: "/images/categories/professional.jpg",
    subcategories: [
      {
        name: "Hoses",
        imgSrc: "/items/subcategories/hoses.jpg",
        subSubCategories: [
          {
            name: "Garden Hoses",
            imgSrc: "/images/subsubcategories/garden-hoses.jpg",
            items: [
              {
                id: 46,
                name: "Expandable",
                category: "Garden Hoses",
                description: "Expandable garden hose",
                price: 30,
                imgSrc: "/images/professional/hoses/garden/expandable.jpg",
              },
              {
                id: 47,
                name: "Rubber",
                category: "Garden Hoses",
                description: "Durable rubber hose",
                price: 25,
                imgSrc: "/images/professional/hoses/garden/rubber.jpg",
              },
              {
                id: 48,
                name: "Vinyl",
                category: "Garden Hoses",
                description: "Flexible vinyl hose",
                price: 20,
                imgSrc: "/images/professional/hoses/garden/vinyl.jpg",
              },
            ],
          },
          {
            name: "Industrial Hoses",
            imgSrc: "/images/subsubcategories/industrial-hoses.jpg",
            items: [
              {
                id: 49,
                name: "Air Hoses",
                category: "Industrial Hoses",
                description: "High-pressure air hose",
                price: 50,
                imgSrc: "/images/professional/hoses/industrial/air.jpg",
              },
              {
                id: 50,
                name: "Water Hoses",
                category: "Industrial Hoses",
                description: "Heavy-duty water hose",
                price: 40,
                imgSrc: "/images/professional/hoses/industrial/water.jpg",
              },
              {
                id: 51,
                name: "Chemical Hoses",
                category: "Industrial Hoses",
                description: "Chemical-resistant hose",
                price: 60,
                imgSrc: "/images/professional/hoses/industrial/chemical.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Charts",
        imgSrc: "/items/subcategories/charts.jpg",
        subSubCategories: [
          {
            name: "Financial Charts",
            imgSrc: "/images/subsubcategories/financial-charts.jpg",
            items: [
              {
                id: 52,
                name: "Stock Charts",
                category: "Financial Charts",
                description: "Detailed stock charts",
                price: 10,
                imgSrc: "/images/professional/charts/financial/stock.jpg",
              },
              {
                id: 53,
                name: "Revenue Charts",
                category: "Financial Charts",
                description: "Annual revenue charts",
                price: 12,
                imgSrc: "/images/professional/charts/financial/revenue.jpg",
              },
              {
                id: 54,
                name: "Expense Charts",
                category: "Financial Charts",
                description: "Expense tracking charts",
                price: 8,
                imgSrc: "/images/professional/charts/financial/expense.jpg",
              },
            ],
          },
          {
            name: "Project Management",
            imgSrc: "/images/subsubcategories/project-management.jpg",
            items: [
              {
                id: 55,
                name: "Gantt Charts",
                category: "Project Management",
                description: "Project timeline charts",
                price: 15,
                imgSrc:
                  "/images/professional/charts/project-management/gantt.jpg",
              },
              {
                id: 56,
                name: "PERT Charts",
                category: "Project Management",
                description: "Project evaluation charts",
                price: 18,
                imgSrc:
                  "/images/professional/charts/project-management/pert.jpg",
              },
              {
                id: 57,
                name: "Flowcharts",
                category: "Project Management",
                description: "Process flowcharts",
                price: 12,
                imgSrc:
                  "/images/professional/charts/project-management/flow.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Mooring Ropes",
        imgSrc: "/items/subcategories/mooring-ropes.jpg",
        subSubCategories: [
          {
            name: "Nylon Ropes",
            imgSrc: "/images/subsubcategories/nylon-ropes.jpg",
            items: [
              {
                id: 58,
                name: "Twisted",
                category: "Nylon Ropes",
                description: "Twisted nylon rope",
                price: 20,
                imgSrc: "/images/professional/mooring-ropes/nylon/twisted.jpg",
              },
              {
                id: 59,
                name: "Braided",
                category: "Nylon Ropes",
                description: "Braided nylon rope",
                price: 25,
                imgSrc: "/images/professional/mooring-ropes/nylon/braided.jpg",
              },
              {
                id: 60,
                name: "Double-Braided",
                category: "Nylon Ropes",
                description: "Double-braided nylon rope",
                price: 30,
                imgSrc:
                  "/images/professional/mooring-ropes/nylon/double-braided.jpg",
              },
            ],
          },
          {
            name: "Polyester Ropes",
            imgSrc: "/images/subsubcategories/polyester-ropes.jpg",
            items: [
              {
                id: 61,
                name: "Solid Braid",
                category: "Polyester Ropes",
                description: "Solid braid polyester rope",
                price: 15,
                imgSrc:
                  "/images/professional/mooring-ropes/polyester/solid-braid.jpg",
              },
              {
                id: 62,
                name: "Hollow Braid",
                category: "Polyester Ropes",
                description: "Hollow braid polyester rope",
                price: 18,
                imgSrc:
                  "/images/professional/mooring-ropes/polyester/hollow-braid.jpg",
              },
              {
                id: 63,
                name: "Diamond Braid",
                category: "Polyester Ropes",
                description: "Diamond braid polyester rope",
                price: 22,
                imgSrc:
                  "/images/professional/mooring-ropes/polyester/diamond-braid.jpg",
              },
            ],
          },
        ],
      },
      {
        name: "Life-Vests",
        imgSrc: "/items/subcategories/life-vests.jpg",
        subSubCategories: [
          {
            name: "Adult Life-Vests",
            imgSrc: "/images/subsubcategories/adult-life-vests.jpg",
            items: [
              {
                id: 64,
                name: "Foam",
                category: "Adult Life-Vests",
                description: "Foam life-vest",
                price: 40,
                imgSrc: "/images/professional/life-vests/adult/foam.jpg",
              },
              {
                id: 65,
                name: "Inflatable",
                category: "Adult Life-Vests",
                description: "Inflatable life-vest",
                price: 60,
                imgSrc: "/images/professional/life-vests/adult/inflatable.jpg",
              },
              {
                id: 66,
                name: "Hybrid",
                category: "Adult Life-Vests",
                description: "Hybrid life-vest",
                price: 70,
                imgSrc: "/images/professional/life-vests/adult/hybrid.jpg",
              },
            ],
          },
          {
            name: "Child Life-Vests",
            imgSrc: "/images/subsubcategories/child-life-vests.jpg",
            items: [
              {
                id: 67,
                name: "Vest Style",
                category: "Child Life-Vests",
                description: "Vest style life-vest for children",
                price: 35,
                imgSrc: "/images/professional/life-vests/child/vest-style.jpg",
              },
              {
                id: 68,
                name: "Floatation Suits",
                category: "Child Life-Vests",
                description: "Floatation suits for children",
                price: 45,
                imgSrc:
                  "/images/professional/life-vests/child/floatation-suits.jpg",
              },
              {
                id: 69,
                name: "Arm Bands",
                category: "Child Life-Vests",
                description: "Floatation arm bands for children",
                price: 15,
                imgSrc: "/images/professional/life-vests/child/arm-bands.jpg",
              },
            ],
          },
        ],
      },
    ],
  },
];
