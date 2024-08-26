import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete existing data
  await prisma.item.deleteMany({});
  await prisma.subSubCategory.deleteMany({});
  await prisma.subCategory.deleteMany({});
  await prisma.category.deleteMany({});

  // Seed new data
  const personal = await prisma.category.create({
    data: {
      name: "Personal",
      imgSrc: "category_image_url",
      subcategories: {
        create: [
          {
            name: "Food",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/food.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Fruits",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Fruits/fruits.jpg",
                  items: {
                    create: [
                      {
                        name: "Apples",
                        description: "Fresh apples",
                        price: 4,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Fruits/apples.jpg",
                      },
                      {
                        name: "Oranges",
                        description: "Fresh Oranges",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Fruits/oranges.png",
                      },
                      {
                        name: "Bananas",
                        description: "Fresh Bananas",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Fruits/bananas.png",
                      },
                      {
                        name: "Mixed Berries",
                        description: "Assorted Berries",
                        price: 5,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Fruits/mixedberries.png",
                      },
                    ],
                  },
                },
                {
                  name: "Vegetables",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Vegetables/vegetables.jpg",
                  items: {
                    create: [
                      {
                        name: "Carrots",
                        description: "Fresh Carrots",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Vegetables/carrots.png",
                      },
                      {
                        name: "Broccoli",
                        description: "Fresh Broccoli",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Vegetables/broccoli.png",
                      },
                      {
                        name: "Potatoes",
                        description: "Fresh Potatoes",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Vegetables/potatoes.png",
                      },
                      {
                        name: "Onions",
                        description: "Fresh Onions",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Vegetables/onions.png",
                      },
                    ],
                  },
                },
                {
                  name: "Dairy",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Dairy/dairy.jpg",
                  items: {
                    create: [
                      {
                        name: "Milk",
                        description: "Whole Milk",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Dairy/milk.png",
                      },
                      {
                        name: "Cheese",
                        description: "Cheddar Cheese",
                        price: 5,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Dairy/cheese.png",
                      },
                      {
                        name: "Yogurt",
                        description: "Plain Yogurt",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Food/Dairy/yogurt.png",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Beverages",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/beverages.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Water",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Water/water.jpg",
                  items: {
                    create: [
                      {
                        name: "Mineral Water",
                        description: "Bottled Mineral Water",
                        price: 1,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Water/mineralwater.png",
                      },
                      {
                        name: "Sparkling Water",
                        description: "Bottled Sparkling Water",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Water/sparklingwater.png",
                      },
                    ],
                  },
                },
                {
                  name: "Juice",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Juice/juices.jpg",
                  items: {
                    create: [
                      {
                        name: "Orange Juice",
                        description: "Fresh Orange Juice",
                        price: 4,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Juice/orangejuice.jpg",
                      },
                      {
                        name: "Apple Juice",
                        description: "Fresh Apple Juice",
                        price: 4,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Juice/applejuice.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Alcohol",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Alcohol/alcohol.jpg",
                  items: {
                    create: [
                      {
                        name: "Red Wine",
                        description: "Red wine",
                        price: 12,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Alcohol/redwine.png",
                      },
                      {
                        name: "Aperol Spritz",
                        description: "Aperol Spritz",
                        price: 18,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Alcohol/aperolspritz.png",
                      },
                      {
                        name: "Whiskey",
                        description: "Bourbon Whiskey",
                        price: 25,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Beverages/Alcohol/whiskey.png",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Personal care",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Personal+care.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Hair Care",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Hair+Care/hair+care.jpg",
                  items: {
                    create: [
                      {
                        name: "Shampoo",
                        description: "Hair Shampoo",
                        price: 6,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Hair+Care/shampoo.png",
                      },
                      {
                        name: "Conditioner",
                        description: "Hair Conditioner",
                        price: 7,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Hair+Care/conditioner.png",
                      },
                      {
                        name: "Hair Oil",
                        description: "Nourishing Hair Oil",
                        price: 5,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Hair+Care/hairoil.png",
                      },
                    ],
                  },
                },
                {
                  name: "Oral Care",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Oral+Care/Oral+care.jpg",
                  items: {
                    create: [
                      {
                        name: "Toothbrush",
                        description: "Toothbrush",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Oral+Care/Toothpaste.png",
                      },
                      {
                        name: "Toothpaste",
                        description: "Fluoride Toothpaste",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Oral+Care/Toothpaste.jpg",
                      },
                      {
                        name: "Mouthwash",
                        description: "Antiseptic Mouthwash",
                        price: 4,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Oral+Care/Mouthwash.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Body Care",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Body+Care/bodycare.jpg",
                  items: {
                    create: [
                      {
                        name: "Body Wash",
                        description: "Body Wash 3 in 1",
                        price: 4,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Body+Care/shampoo.png",
                      },
                      {
                        name: "Deodorant",
                        description: "Roll-on Deodorant",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Body+Care/deodorant.png",
                      },
                      {
                        name: "Sunscreen",
                        description: "SPF 50+ Sunscreen",
                        price: 8,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Personal+Care/Body+Care/sunscreen.png",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Clothes",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/clothes.jpg",
            subsubcategories: {
              create: [
                {
                  name: "T-Shirts",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/T-Shirts/tshirts.jpg",
                  items: {
                    create: [
                      {
                        name: "T-Shirt",
                        description: "Black T-shirt",
                        price: 10,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/T-Shirts/tshirt.png",
                      },
                      {
                        name: "Polo Shirt",
                        description: "White Polo Shirt",
                        price: 15,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/T-Shirts/polotshirt.png",
                      },
                    ],
                  },
                },
                {
                  name: "Pants",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Pants/pants.jpg",
                  items: {
                    create: [
                      {
                        name: "Jeans",
                        description: "Blue Jeans",
                        price: 20,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Pants/jeans.jpg",
                      },
                      {
                        name: "Cargo Pants",
                        description: "Khaki Cargo Pants",
                        price: 25,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Pants/cargopants.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Accessories",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Accesories/accesories.jpg",
                  items: {
                    create: [
                      {
                        name: "Sun Glasses",
                        description: "Sun Glasses",
                        price: 22,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Accesories/sunglasses.png",
                      },
                      {
                        name: "Baseball Cap",
                        description: "Navy Blue Cap",
                        price: 10,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Accesories/cap.png",
                      },
                      {
                        name: "Belt",
                        description: "Leather Belt",
                        price: 15,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Clothes/Accesories/belt.png",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Entertainment",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/entertainment.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Books",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Books/books.jpg",
                  items: {
                    create: [
                      {
                        name: "Novel",
                        description: "Fiction Novel",
                        price: 10,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Books/novel.png",
                      },
                      {
                        name: "Magazine",
                        description: "Monthly Magazine",
                        price: 5,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Books/magazine.png",
                      },
                    ],
                  },
                },
                {
                  name: "Games",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Games/games.jpg",
                  items: {
                    create: [
                      {
                        name: "Playing Cards",
                        description: "Deck of Playing Cards",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Games/playingcards.png",
                      },
                      {
                        name: "Board Game",
                        description: "Classic Board Game",
                        price: 20,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Games/chess.png",
                      },
                    ],
                  },
                },
                {
                  name: "Music",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Music/music.jpg",
                  items: {
                    create: [
                      {
                        name: "Portable Speaker",
                        description: "Bluetooth Speaker",
                        price: 30,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Music/portablespeaker.png",
                      },
                      {
                        name: "Headphones",
                        description: "Noise-canceling Headphones",
                        price: 50,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Personal/Entertainment/Music/headphones.png",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  const professional = await prisma.category.create({
    data: {
      name: "Professional",
      imgSrc: "URL_for_Professional_category_image",
      subcategories: {
        create: [
          {
            name: "Work Clothes",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/working+clothes.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Uniforms",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Uniforms/uniforms.jpg",
                  items: {
                    create: [
                      {
                        name: "Company's Uniform",
                        description: "Company's Uniform",
                        price: 8,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Uniforms/uniform.jpg",
                      },
                      {
                        name: "Company's Winter Uniform",
                        description: "Company's uniform for winter",
                        price: 10,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Uniforms/winteruniform.jpg",
                      },
                      {
                        name: "Coveralls",
                        description: "Protective Coveralls",
                        price: 15,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Uniforms/coverall.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Glasses",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Glasses/working+glasses.jpg",
                  items: {
                    create: [
                      {
                        name: "Sunglasses",
                        description: "Safety Sunglasses",
                        price: 3,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Glasses/working+sunglasses.jpg",
                      },
                      {
                        name: "Glasses",
                        description: "Safety Glasses",
                        price: 2,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Glasses/safety+glasses.jpg",
                      },
                      {
                        name: "Goggles",
                        description: "Protective Goggles",
                        price: 5,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Glasses/goggles.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Footwear",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Footwear/working+footwear.jpg",
                  items: {
                    create: [
                      {
                        name: "Safety Boots",
                        description: "Steel-toe Safety Boots",
                        price: 50,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Footwear/working+boots.jpg",
                      },
                      {
                        name: "Work Shoes",
                        description: "Slip-resistant Work Shoes",
                        price: 40,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Work+Clothes/Footwear/working+shoes.webp",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Safety Equipment",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/safety+equipment.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Life-vests",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Life-vests/life+vests.jpg",
                  items: {
                    create: [
                      {
                        name: "Life-vest Adult",
                        description: "Life vest for adults",
                        price: 240,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Life-vests/lifevest+adult.jpg",
                      },
                      {
                        name: "Life-vest Child",
                        description: "Life-vest for children",
                        price: 120,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Life-vests/lifevest+children.png",
                      },
                      {
                        name: "Life-raft",
                        description: "Inflatable Life-raft",
                        price: 2000,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Life-vests/liferaft.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Immersion Suits",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Immersion+Suits/imersion+suits.jpg",
                  items: {
                    create: [
                      {
                        name: "Immersion Suit Adult",
                        description: "Immersion Suit for adults",
                        price: 600,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Immersion+Suits/Immersion-Suit-II.jpg",
                      },
                      {
                        name: "Immersion Suit Child",
                        description: "Immersion Suit for children",
                        price: 400,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Immersion+Suits/Child-immersion-suit.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Fire Safety",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Fire+Safety/firesafety.jpg",
                  items: {
                    create: [
                      {
                        name: "Fire Extinguisher",
                        description: "Portable Fire Extinguisher",
                        price: 50,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Fire+Safety/fire+extinguisher.png",
                      },
                      {
                        name: "Fire Blanket",
                        description: "Emergency Fire Blanket",
                        price: 30,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Safety+Equipment/Fire+Safety/fire+blanket.jpg",
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            name: "Navigation Equipment",
            imgSrc:
              "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/navigation+equipment.jpg",
            subsubcategories: {
              create: [
                {
                  name: "Compasses",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Compasses/compasses.gif",
                  items: {
                    create: [
                      {
                        name: "Magnetic Compass",
                        description: "Standard Magnetic Compass",
                        price: 100,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Compasses/magneticcompass.jpg",
                      },
                      {
                        name: "Gyrocompass",
                        description: "Advanced Gyrocompass",
                        price: 500,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Compasses/gyrocompass.gif",
                      },
                    ],
                  },
                },
                {
                  name: "Charts",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Charts/nautical+charts.webp",
                  items: {
                    create: [
                      {
                        name: "Nautical Chart",
                        description: "Detailed Nautical Chart",
                        price: 20,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Charts/nautical+chart.png",
                      },
                      {
                        name: "Digital Chart",
                        description: "Electronic Navigational Chart",
                        price: 100,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Charts/electroniv+navigational+chart.jpg",
                      },
                    ],
                  },
                },
                {
                  name: "Communication",
                  imgSrc:
                    "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Communication/communication.jpg",
                  items: {
                    create: [
                      {
                        name: "VHF Radio",
                        description: "Marine VHF Radio",
                        price: 150,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Communication/vhf+radio.jpg",
                      },
                      {
                        name: "Satellite Phone",
                        description: "Marine Satellite Phone",
                        price: 800,
                        imgSrc:
                          "https://seasupply.s3.eu-central-1.amazonaws.com/Professional/Navigation+Equipment/Communication/iridium.jpg",
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Seeded categories, subcategories, and sub-subcategories:", {
    personal,
    professional,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
