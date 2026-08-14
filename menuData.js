// Mess Menu Data for Even Week, Odd Week, and Special Dinner
const menuData = {
  currentWeekDefault: "even", // Default as per user request
  mealTimings: {
    breakfast: { name: "Breakfast", icon: "🌅", start: "07:00", end: "09:30", color: "#FF9F43" },
    lunch: { name: "Lunch", icon: "☀️", start: "12:00", end: "14:30", color: "#2E86DE" },
    snacks: { name: "Snacks", icon: "☕", start: "16:30", end: "18:00", color: "#10AC84" },
    dinner: { name: "Dinner", icon: "🌙", start: "19:30", end: "21:30", color: "#833471" }
  },

  evenWeek: {
    Sunday: {
      breakfast: [
        { name: "Onion Carrot Uttapam", tags: ["Veg", "Main"] },
        { name: "Sambar & Coconut Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Sev Tomato Gravy", tags: ["Veg", "Main"] },
        { name: "Kovakai Fry", tags: ["Veg", "Side"] },
        { name: "Hyderabadi Paneer Biryani + Raita / Hyderabadi Chicken Biryani + Raita", tags: ["Special", "Choice", "Non-Veg", "Veg"] },
        { name: "Fryums & Pickle", tags: ["Veg"] },
        { name: "Ice Cream (1)", tags: ["Dessert", "Sweet"] },
        { name: "Salad & Onion", tags: ["Healthy"] }
      ],
      snacks: [
        { name: "Bhel Puri", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Peanut Coconut Rice & Veg Kurma", tags: ["Veg", "Main"] },
        { name: "Rice, Sambar, Rasam", tags: ["Veg", "Main"] },
        { name: "Cauliflower Peas Poriyal", tags: ["Veg", "Side"] },
        { name: "Curd & Papad", tags: ["Veg"] },
        { name: "Gulab Jamun (2)", tags: ["Dessert", "Sweet"] }
      ]
    },
    Monday: {
      breakfast: [
        { name: "Poori & Aloo Masala Curry", tags: ["Veg", "Main"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Banana (1) / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Pulkha & Garlic Tomato Curry", tags: ["Veg", "Main"] },
        { name: "Chilli Soya Bean Dry***", tags: ["Veg", "Limited***"] },
        { name: "Perugu Pachadi", tags: ["Veg"] },
        { name: "Rice, Vatha Kolambu, Curd", tags: ["Veg", "Main"] },
        { name: "Papad & Pickle", tags: ["Veg"] },
        { name: "Seasonal Fruit Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Sundal (Boiled black channa / green gram dal)", tags: ["Healthy", "Veg"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "Tawa Chapathi & Channa Masala", tags: ["Veg", "Main"] },
        { name: "Lemon Rice & Curd Rice", tags: ["Veg", "Main"] },
        { name: "Potato Poriyal", tags: ["Veg", "Side"] },
        { name: "Buttermilk", tags: ["Beverage"] },
        { name: "Boondi Laddu (1)", tags: ["Dessert", "Sweet"] }
      ]
    },
    Tuesday: {
      breakfast: [
        { name: "Ragi Dosa", tags: ["Healthy", "Veg", "Main"] },
        { name: "Sambar & Groundnut Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Dum Aloo", tags: ["Veg", "Main"] },
        { name: "Spinach Kootu", tags: ["Veg", "Side", "Healthy"] },
        { name: "Jeera Rice & Plain Rice", tags: ["Veg", "Main"] },
        { name: "Rasam & Curd", tags: ["Veg"] },
        { name: "Fryums & Pickle", tags: ["Veg"] },
        { name: "Salad & Onion", tags: ["Healthy"] }
      ],
      snacks: [
        { name: "Onion Pakoda", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Idli, Sambar, Karam Podi, Tomato Onion Chutney & Ghee", tags: ["Veg", "Main"] },
        { name: "Aloo Curry & Raita", tags: ["Veg"] },
        { name: "Sweet Pongal***", tags: ["Dessert", "Limited***", "Sweet"] }
      ]
    },
    Wednesday: {
      breakfast: [
        { name: "Upma", tags: ["Veg", "Main"] },
        { name: "Sambar & Tomato Onion Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Banana (1) / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Pulkha & Yellow Channa Dal Masala", tags: ["Veg", "Main"] },
        { name: "Aloo Masala Curry", tags: ["Veg", "Side"] },
        { name: "Rice, Sambar, Rasam, Curd", tags: ["Veg", "Main"] },
        { name: "Fryums & Pickle", tags: ["Veg"] },
        { name: "Seasonal Fruit Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Banana Bajji (3) & Kadalai Chutney", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "SPECIAL DINNER: Tawa Chapathi & Veg Biryani", tags: ["Special", "Veg", "Main"] },
        { name: "Bagara Rice & Black Channa Curry", tags: ["Veg", "Main"] },
        { name: "Buttermilk & Onion", tags: ["Beverage"] },
        { name: "Pineapple Kesari***", tags: ["Dessert", "Limited***", "Sweet"] }
      ]
    },
    Thursday: {
      breakfast: [
        { name: "Masala Dosa", tags: ["Veg", "Main"] },
        { name: "Mysore Bonda (3)", tags: ["Veg", "Snack"] },
        { name: "Coconut Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Paneer Peas Curry", tags: ["Veg", "Main"] },
        { name: "Hyderabadi Veg Pulao & Raita", tags: ["Veg", "Main"] },
        { name: "Fryums & Pickle", tags: ["Veg"] },
        { name: "Salad & Onion", tags: ["Healthy"] }
      ],
      snacks: [
        { name: "Sweet Corn (half piece - 6cm)", tags: ["Healthy", "Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Chole Bature", tags: ["Veg", "Main"] },
        { name: "Idiyappam", tags: ["Veg", "Main"] },
        { name: "Plain Rice & Mixed Dal", tags: ["Veg", "Main"] },
        { name: "Buttermilk", tags: ["Beverage"] },
        { name: "Paruppu Payasam with Jaggery", tags: ["Dessert", "Sweet"] }
      ]
    },
    Friday: {
      breakfast: [
        { name: "Upma & Poha", tags: ["Veg", "Main"] },
        { name: "Sambar & Tomato Onion Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Banana (1) / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Phulka & Baigan Methi Curry", tags: ["Veg", "Main"] },
        { name: "Rice, Sambar, Rasam", tags: ["Veg", "Main"] },
        { name: "Gongura Chutney & Papad", tags: ["Veg", "Side"] },
        { name: "Seasonal Fruit Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Mix Veg Maggi (130gm) & Tomato Sauce", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "Millet Dosa & Peanut Chutney", tags: ["Healthy", "Veg", "Main"] },
        { name: "Rice, Sambar, Rasam", tags: ["Veg", "Main"] },
        { name: "Cauliflower Peas Poriyal", tags: ["Veg", "Side"] },
        { name: "Bread Halwa***", tags: ["Dessert", "Limited***", "Sweet"] }
      ]
    },
    Saturday: {
      breakfast: [
        { name: "Rava Idly, Vada (3) & Methi Paratha", tags: ["Veg", "Main"] },
        { name: "Kabuli Channa Masala", tags: ["Veg", "Side"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Kerala Sadhya Avial", tags: ["Veg", "Main"] },
        { name: "Andhra Tomato Dal & Greens Poriyal", tags: ["Veg", "Side"] },
        { name: "Rice, Sambar, Rasam", tags: ["Veg", "Main"] },
        { name: "Papad & Pickle", tags: ["Veg"] },
        { name: "Banana Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Aloo Samosa (2) (with peas), Sauce & Mint Chutney", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Phulka & Gutti Vankaya Curry", tags: ["Veg", "Main"] },
        { name: "Lemon Rice, Curd Rice & Potato Poriyal", tags: ["Veg", "Main"] },
        { name: "Buttermilk", tags: ["Beverage"] },
        { name: "Payasam / Dessert", tags: ["Dessert", "Sweet"] }
      ]
    }
  },

  oddWeek: {
    Sunday: {
      breakfast: [
        { name: "Rava Dosa & Semiya Upma", tags: ["Veg", "Main"] },
        { name: "Sambar & Groundnut Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Plantain Poriyal", tags: ["Veg", "Main"] },
        { name: "Veg Biryani & Raita", tags: ["Veg", "Main", "Special"] },
        { name: "Badusha (1)", tags: ["Dessert", "Sweet"] },
        { name: "Pickle & Papad", tags: ["Veg"] },
        { name: "Salad & Onion", tags: ["Healthy"] }
      ],
      snacks: [
        { name: "Pani Puri (6), Green & Tamarind Chutney", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "Chapatti & Mix Veg Curry (Punjabi Style)", tags: ["Veg", "Main"] },
        { name: "Tamarind Rice & Aloo Bhujiya Sabhji", tags: ["Veg", "Main"] },
        { name: "Buttermilk & Fryums", tags: ["Beverage"] },
        { name: "Seasonal Cut Fruits*** & Turmeric Milk", tags: ["Healthy", "Fruit", "Beverage"] }
      ]
    },
    Monday: {
      breakfast: [
        { name: "Pongal & Vada (3)", tags: ["Veg", "Main"] },
        { name: "Sambar & Coconut Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Banana (1) / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Pulkha & Dal Makhani", tags: ["Veg", "Main"] },
        { name: "Beans Carrot Poriyal", tags: ["Veg", "Side"] },
        { name: "Rice, Sambar, Rasam, Curd", tags: ["Veg", "Main"] },
        { name: "Pickle & Papad", tags: ["Veg"] },
        { name: "Seasonal Fruit Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Pasta", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Chole Bature & Onion Mirch Salad", tags: ["Veg", "Main"] },
        { name: "Rice & Snake Gourd Kootu", tags: ["Veg", "Main"] },
        { name: "Banana (1)", tags: ["Fruit", "Healthy"] }
      ]
    },
    Tuesday: {
      breakfast: [
        { name: "Wheat Dosa (or) Pesarattu", tags: ["Choice", "Veg", "Main", "Healthy"] },
        { name: "Sambar & Tomato Onion Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Dum Aloo", tags: ["Veg", "Main"] },
        { name: "Onion Pakoda*** & Perugu Pachadi", tags: ["Veg", "Limited***"] },
        { name: "Rice, Panchratan Dal, Rasam, Curd", tags: ["Veg", "Main"] },
        { name: "Fryums & Pickle", tags: ["Veg"] },
        { name: "Salad & Onion", tags: ["Healthy"] }
      ],
      snacks: [
        { name: "Masala Vada (3) & Pottukadalai Chutney", tags: ["Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "Tawa Chapathi & Channa Masala", tags: ["Veg", "Main"] },
        { name: "Rice, Sambar & Beetroot Poriyal", tags: ["Veg", "Main"] },
        { name: "Buttermilk", tags: ["Beverage"] },
        { name: "Bread Halwa", tags: ["Dessert", "Sweet"] }
      ]
    },
    Wednesday: {
      breakfast: [
        { name: "Poori & Channa Masala", tags: ["Veg", "Main"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Banana (1) / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Pulkha & Soya Curry", tags: ["Veg", "Main"] },
        { name: "Kadai Paneer***", tags: ["Veg", "Limited***"] },
        { name: "Keerai Sambar & Cabbage Moongdal Coconut Poriyal", tags: ["Veg", "Side", "Healthy"] },
        { name: "Rice, Rasam, Puli Kolambu, Papad", tags: ["Veg", "Main"] },
        { name: "Seasonal Fruit Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Boiled Groundnuts Chat", tags: ["Healthy", "Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Phulka & Kambu (Pearl Millet) Idli", tags: ["Healthy", "Veg", "Main"] },
        { name: "Sambar & Tomato Onion Chutney", tags: ["Veg", "Side"] },
        { name: "Sabudhana Kheer & Khulfi (1) (Malai / Pista / Mango / Strawberry)", tags: ["Dessert", "Sweet", "Special"] }
      ]
    },
    Thursday: {
      breakfast: [
        { name: "Wheat Rava Upma & Poha", tags: ["Healthy", "Veg", "Main"] },
        { name: "Mysore Bonda (3) & Groundnut Chutney", tags: ["Veg", "Snack"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Lauki Chana Dal", tags: ["Veg", "Main", "Healthy"] },
        { name: "Gobi 65***", tags: ["Veg", "Limited***"] },
        { name: "Rice, Masala Sambar, Spinach Kootu, Curd", tags: ["Veg", "Main"] },
        { name: "Fryums & Pickle", tags: ["Veg"] },
        { name: "Salad & Onion", tags: ["Healthy"] }
      ],
      snacks: [
        { name: "Channa Chat", tags: ["Healthy", "Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "Flavoured Chapati & Paneer Kofta Curry", tags: ["Veg", "Main", "Special"] },
        { name: "Rice, Sambar, Rasam, Kovakai Poriyal", tags: ["Veg", "Main"] },
        { name: "Vermicelli Payasam", tags: ["Dessert", "Sweet"] }
      ]
    },
    Friday: {
      breakfast: [
        { name: "Idli & Vada (3)", tags: ["Veg", "Main"] },
        { name: "Sambar & Coconut Chutney", tags: ["Veg", "Side"] },
        { name: "BBJ & Sprouts", tags: ["Healthy"] },
        { name: "Banana (1) / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Phulka & Rajma Curry / Tawa Chapathi", tags: ["Veg", "Main"] },
        { name: "Palak Paneer Curry / Chicken Curry", tags: ["Choice", "Veg", "Non-Veg", "Special"] },
        { name: "Rice, Rasam, Curd, Pumpkin Kootu", tags: ["Veg", "Main"] },
        { name: "Gongura Chutney & Fryums", tags: ["Veg"] },
        { name: "Seasonal Fruit Juice & Ice Cream (1)", tags: ["Beverage", "Dessert"] }
      ],
      snacks: [
        { name: "Boiled Green Moong Dal", tags: ["Healthy", "Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Boost Sachets", tags: ["Beverage"] }
      ],
      dinner: [
        { name: "Set Dosa & Veg Pulao", tags: ["Veg", "Main"] },
        { name: "Vada Curry, Pickle, Curd, Rasam", tags: ["Veg", "Side"] },
        { name: "Kesari Bath***", tags: ["Dessert", "Limited***", "Sweet"] }
      ]
    },
    Saturday: {
      breakfast: [
        { name: "Aloo Paratha & Channa Masala", tags: ["Veg", "Main"] },
        { name: "Curd & Pickle", tags: ["Veg"] },
        { name: "BBJ & Boiled Groundnuts", tags: ["Healthy"] },
        { name: "Seasonal Cut Fruits*** / Boiled Egg (1)", tags: ["Choice", "Fruit", "Egg"] },
        { name: "Tea / Coffee / Milk", tags: ["Beverage"] }
      ],
      lunch: [
        { name: "Tawa Chapathi & Tomato Andhra Dal", tags: ["Veg", "Main"] },
        { name: "Plantain Stem Kootu", tags: ["Veg", "Side", "Healthy"] },
        { name: "Rice, Rasam, Curd, Papad, Pickle", tags: ["Veg", "Main"] },
        { name: "Banana Juice & Onion", tags: ["Beverage", "Healthy"] }
      ],
      snacks: [
        { name: "Millet Puttu", tags: ["Healthy", "Veg", "Snack"] },
        { name: "Tea / Coffee / Milk / Raagi Malt Powder", tags: ["Beverage", "Healthy"] }
      ],
      dinner: [
        { name: "Pulka & Channa Peas Palak", tags: ["Veg", "Main"] },
        { name: "Sambar Rice & Curd Rice", tags: ["Veg", "Main"] },
        { name: "Soya Chilli, Fryums, Dal Fry", tags: ["Veg"] },
        { name: "Buttermilk Salad, Buttermilk Raitha, Kara Boondi", tags: ["Veg"] },
        { name: "Gulab Jamun (2)", tags: ["Dessert", "Sweet"] }
      ]
    }
  },

  specialDinner: {
    veg: {
      combos: [
        { main: "Naan with Paneer Butter Masala", rice: "Hyderabadi Veg Biryani" },
        { main: "Roti with Paneer Tikka Masala", rice: "Hyderabadi Veg Pulao" }
      ],
      accompaniments: ["Raita", "Lemon Juice"],
      desserts: ["Ice Cream (Vanilla / Strawberry / Chocolate)", "Fruit Custard"],
      fruits: ["Apple", "Banana", "Grapes", "Papaya", "Pomegranate", "Country Guava (Choose 4)"]
    },
    nonVeg: {
      combos: [
        { main: "Naan with Butter Chicken", rice: "Hyderabadi Veg Biryani" },
        { main: "Roti with Kadai Chicken", rice: "Hyderabadi Veg Pulao" }
      ],
      accompaniments: ["Raita", "Lemon Juice"],
      desserts: ["Ice Cream (Vanilla / Strawberry / Chocolate)", "Fruit Custard"],
      fruits: ["Apple", "Banana", "Grapes", "Papaya", "Pomegranate", "Country Guava (Choose 4)"]
    }
  },

  seasonalExtras: {
    cutFruits: ["Watermelon", "Papaya", "Guava", "Pineapple"],
    pickles: ["Mango", "Garlic", "Tomato", "Lemon", "Ginger"],
    juices: ["Watermelon Juice", "Banana Juice", "Muskmelon Juice", "Papaya Juice", "Pineapple Juice"]
  }
};

window.menuData = menuData;
