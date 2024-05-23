//I am changing the image links from firebase to amazon, firebase has issues with these direct links. Please remember to add the amazon link(that will show up at the error) instead of firebase at the cofig for it to work out.

export const products = [
  {
    id: "64a654593e91b8e73a351e9b",
    name: "Hourly",
    description: "Hourly description",
    price: 0.43,
    category: "Subscriptions",
    inStock: true,
    available_seats: 32,
    images: [
      {
        color: "White",
        colorCode: "#FFFFFF",
        image:
          "/images/airpods.jpg",
      },
      {
        color: "Gray",
        colorCode: "#808080",
        image:
          "alexa.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "64a4ebe300900d44bb50628a",
    name: "Daily",
    description:
      "Daily Subscription",
    price: 1.7,
    category: "Subscriptions",
    inStock: true,
    available_seats: 32,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "/images/camera.jpg",
      },
    ],
    reviews: [
      {
        id: "64a65a6158b470c6e06959ee",
        userId: "6475af156bad4917456e6e1e",
        productId: "64a4ebe300900d44bb50628a",
        rating: 5,
        comment: "good",
        createdDate: "2023-07-06T06:08:33.067Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "/images/mouse.jpg",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "648437b38c44d52b9542e340",
    name: "Weekly",
    description:
      'Weekly Subscription',
    price: 9,
    category: "Subscriptions",
    inStock: true,
    available_seats: 32,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "/images/phone.jpg",
      },
      {
        color: "Blue",
        colorCode: " #0000FF",
        image:
          "/images/playstation.jpg",
      },
      {
        color: "Red",
        colorCode: "#FF0000",
        image:
          "/images/sample.jpg",
      },
    ],
    reviews: [
      {
        id: "6499b4887402b0efd394d8f3",
        userId: "6499b184b0e9a8c8709821d3",
        productId: "648437b38c44d52b9542e340",
        rating: 4,
        comment:
          "good enough. I like the camera and casing. the delivery was fast too.",
        createdDate: "2023-06-26T15:53:44.483Z",
        user: {
          id: "6499b184b0e9a8c8709821d3",
          name: "Chaoo",
          email: "example1@gmail.com",
          emailVerified: null,
          image:
            "/images/airpods.jpg",
          hashedPassword: null,
          createdAt: "2023-06-26T15:40:52.558Z",
          updatedAt: "2023-06-26T15:40:52.558Z",
          role: "USER",
        },
      },
      {
        id: "6499a110efe4e4de451c7edc",
        userId: "6475af156bad4917456e6e1e",
        productId: "648437b38c44d52b9542e340",
        rating: 5,
        comment: "I really liked it!!",
        createdDate: "2023-06-26T14:30:40.998Z",
        user: {
          id: "6475af156bad4917456e6e1e",
          name: "Charles",
          email: "example@gmail.com",
          emailVerified: null,
          image:
            "/images/camera.jpg",
          hashedPassword: null,
          createdAt: "2023-05-30T08:08:53.979Z",
          updatedAt: "2023-05-30T08:08:53.979Z",
          role: "ADMIN",
        },
      },
    ],
  },
  {
    id: "64a4e9e77e7299078334019f",
    name: "Monthly",
    description:
      'Monthly Subscription',
    price: 26,
    category: "Subscriptions",
    inStock: true,
    available_seats: 32,
    images: [
      {
        color: "Graphite",
        colorCode: " #383838",
        image:
          "/images/mouse.jpg",
      },
    ],
    reviews: [],
  },
  {
    id: "649d775128b6744f0f497040",
    name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
    description:
      'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
    price: 50,
    brand: "Nerunsa",
    category: "Watch",
    inStock: true,
    images: [
      {
        color: "Black",
        colorCode: "#000000",
        image:
          "/images/airpods.jpg",
      },
      {
        color: "Silver",
        colorCode: "#C0C0C0",
        image:
          "/images/alexa.jpg",
      },
    ],
    reviews: [],
  },
];
