export type DestinationInfo = {
  name: string;
  overview: string;
  attractions: string[];
  activities: string[];
  travelTips: string[];
};

export type TourPackage = {
  id: string;
  name: string;
  duration: string;
  location: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge: string;
  featured: boolean;
  gallery: string[];
  itinerary: Array<{ day: string; title: string; details: string }>;
  highlights: string[];
  includes: string[];
  faqs: Array<{ question: string; answer: string }>;
  destinations: string[];
  destinationInfo: DestinationInfo[];
};

export const tourPackages: TourPackage[] = [
  {
    id: 'culture-heritage',
    name: 'Cultural Heritage Tour',
    duration: '5 Days',
    location: 'Sigiriya, Kandy, Dambulla',
    description:
      'Climb Sigiriya Rock Fortress, visit the Temple of the Tooth in Kandy, and explore the golden cave temples of Dambulla on an authentic heritage journey.',
    price: 1580,
    category: 'Heritage',
    image: '/images/sigiriya.JPG',
    badge: 'Premium',
    featured: true,
    gallery: ['/images/sigiriya.JPG', '/images/temple-of-the-tooth.JPG', '/images/sigiriya.JPG'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival and Cultural Welcome',
        details: 'Arrive in Colombo and transfer to Sigiriya for an evening introduction to Sri Lankan heritage and cuisine.',
      },
      {
        day: 'Day 2',
        title: 'Sigiriya Rock Fortress',
        details: 'Climb the UNESCO-listed Sigiriya Rock Fortress and discover its frescoes, gardens, and panoramic views.',
      },
      {
        day: 'Day 3',
        title: 'Kandy City Tour',
        details: 'Travel to Kandy, visit the Temple of the Tooth, and stroll around the scenic Kandy Lake.',
      },
      {
        day: 'Day 4',
        title: 'Dambulla Cave Temples',
        details: 'Explore the golden Dambulla Cave Temple complex before returning to Kandy for a cultural performance.',
      },
      {
        day: 'Day 5',
        title: 'Departure',
        details: 'Enjoy a relaxed morning before transfer back to Colombo for your departure.',
      },
    ],
    highlights: [
      'UNESCO World Heritage sites',
      'Ancient frescoes and royal gardens',
      'Temple of the Tooth ceremony',
      'Guided cultural performance',
    ],
    includes: [
      '3 nights luxury hotel stays',
      'Private airport transfers',
      'Guided tours and entry fees',
      'Daily breakfast and selected meals',
    ],
    faqs: [
      {
        question: 'Is the Sigiriya climb suitable for beginners?',
        answer:
          'Yes. The climb is manageable for most travelers in good health, with plenty of rest stops and railings along the path.',
      },
      {
        question: 'Will I have time to shop in Kandy?',
        answer:
          'Yes. The itinerary includes free time in Kandy to explore local markets and buy traditional handicrafts.',
      },
    ],
    destinations: ['Sigiriya', 'Kandy', 'Dambulla'],
    destinationInfo: [
      {
        name: 'Sigiriya',
        overview:
          'Home to the iconic Lion Rock, Sigiriya offers ancient royal gardens, frescoes, and dramatic views over the cultural plains.',
        attractions: ['Sigiriya Rock Fortress', 'Royal Water Gardens', 'Ancient frescoes'],
        activities: ['Rock climb at sunrise', 'Guided heritage walk', 'Village tour by bullock cart'],
        travelTips: ['Bring water for the climb', 'Wear comfortable shoes', 'Visit early to avoid heat and crowds'],
      },
      {
        name: 'Kandy',
        overview:
          'Kandy is Sri Lanka’s spiritual heart, known for the Temple of the Tooth, hillside tea estates, and lakeside city charm.',
        attractions: ['Temple of the Tooth', 'Kandy Lake', 'Royal Botanical Gardens'],
        activities: ['Attend a cultural dance performance', 'Explore artisan markets', 'Take a lakefront stroll'],
        travelTips: ['Carry a shawl for temple visits', 'Allow extra time for traffic', 'Try local kandy regional cuisine'],
      },
      {
        name: 'Dambulla',
        overview:
          'Dambulla is famous for its golden cave temples, ancient Buddhist art, and sweeping panoramic views over the farmland below.',
        attractions: ['Dambulla Cave Temple', 'Golden Buddha statue', 'Scenic lookout points'],
        activities: ['Visit the cave temples', 'Seek out local spice gardens', 'Photograph the sunset vistas'],
        travelTips: ['Respect temple dress codes', 'Wear a hat for the hill climb', 'Hire a local guide for history and context'],
      },
    ],
  },
  {
    id: 'hill-country',
    name: 'Hill Country Escape',
    duration: '3 Days',
    location: 'Ella, Nuwara Eliya',
    description:
      'Walk the iconic Nine Arch Bridge, hike Little Adam’s Peak, and wander tea estates in Nuwara Eliya for a refreshing mountain retreat.',
    price: 1240,
    category: 'Nature',
    image: '/images/nine-arch-bridge.JPG',
    badge: 'Popular',
    featured: false,
    gallery: ['/images/nine-arch-bridge.JPG', '/images/about-hero.jpg', '/images/nine-arch-bridge.JPG'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Ella',
        details: 'Arrive in Ella and take a scenic walk to the Nine Arch Bridge followed by sunset views from Little Adam’s Peak.',
      },
      {
        day: 'Day 2',
        title: 'Tea Fields and Waterfalls',
        details: 'Visit a working tea plantation in Nuwara Eliya, taste fresh Ceylon tea, and explore the nearby waterfalls.',
      },
      {
        day: 'Day 3',
        title: 'Hill Station Farewell',
        details: 'Enjoy a quiet morning in the cool hill country before returning to Colombo or your next destination.',
      },
    ],
    highlights: [
      'Nine Arch Bridge photo walk',
      'Little Adam’s Peak hike',
      'Tea estate visit in Nuwara Eliya',
      'Cool mountain climate and scenic vistas',
    ],
    includes: [
      '2 nights charming hill country lodging',
      'Private transfers and local guide',
      'Tea garden tour and tastings',
      'Breakfast and selected meals',
    ],
    faqs: [
      {
        question: 'Is Ella suitable for a short getaway?',
        answer:
          'Absolutely. Ella is perfect for a short but memorable hill country escape with easy hikes and scenic viewpoints.',
      },
      {
        question: 'Do I need warm clothing?',
        answer:
          'Yes. The hill country is cooler than the coast, so bring a light jacket for mornings and evenings.',
      },
    ],
    destinations: ['Ella', 'Nuwara Eliya'],
    destinationInfo: [
      {
        name: 'Ella',
        overview:
          'Ella is a mountain village surrounded by tea estates, misty valleys, and famous viewpoints like Little Adam’s Peak.',
        attractions: ['Nine Arch Bridge', 'Little Adam’s Peak', 'Ravana Falls'],
        activities: ['Hike to viewpoints', 'Visit a local tea factory', 'Relax by riverside cafes'],
        travelTips: ['Bring a warm layer for mornings', 'Book train tickets early', 'Wear sturdy shoes for hill walks'],
      },
      {
        name: 'Nuwara Eliya',
        overview:
          'Known as “Little England,” Nuwara Eliya is a cool highland retreat with colonial charm, tea estates, and fresh mountain air.',
        attractions: ['Tea plantations', 'Gregory Lake', 'Horton Plains'],
        activities: ['Tea tasting and factory tour', 'Stroll through the flower market', 'Explore colonial-era landmarks'],
        travelTips: ['Carry rain protection', 'Avoid the chill with a warm sweater', 'Try a local high tea experience'],
      },
    ],
  },
  {
    id: 'southern-coast',
    name: 'Southern Coast Adventure',
    duration: '4 Days',
    location: 'Mirissa, Galle, Unawatuna',
    description:
      'Watch whales from Mirissa, stroll along historic Galle Fort, and relax on Unawatuna’s golden bay for an unforgettable southern coast escape.',
    price: 1390,
    category: 'Adventure',
    image: '/images/mirissa.JPG',
    badge: 'Exclusive',
    featured: false,
    gallery: ['/images/mirissa.JPG', '/images/galle-fort.jpg', '/images/mirissa.JPG'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Mirissa',
        details: 'Arrive in Mirissa and enjoy a sunset beach stroll with time to relax at your coastal resort.',
      },
      {
        day: 'Day 2',
        title: 'Whale Watching',
        details: 'Take an early morning whale watching tour off Mirissa’s coast, followed by a leisurely afternoon on the beach.',
      },
      {
        day: 'Day 3',
        title: 'Galle Fort Discovery',
        details: 'Explore the UNESCO-listed Galle Fort, its colonial ramparts, boutiques, and seaside cafes.',
      },
      {
        day: 'Day 4',
        title: 'Unawatuna Relaxation',
        details: 'Spend the final day at Unawatuna Beach before transferring back to Colombo.',
      },
    ],
    highlights: [
      'Whale watching in Mirissa',
      'Historic Galle Fort tour',
      'Sunset beach time',
      'Luxury coastal accommodations',
    ],
    includes: [
      '3 nights beachfront hotel stay',
      'Whale watching excursion',
      'Guided Galle Fort walk',
      'Transfers and daily breakfast',
    ],
    faqs: [
      {
        question: 'How likely is whale watching in Mirissa?',
        answer:
          'Mirissa is one of the best whale watching locations in Sri Lanka, especially from November to April.',
      },
      {
        question: 'Can I swim in Unawatuna?',
        answer:
          'Yes, Unawatuna has calm waters ideal for swimming, with nearby beachside restaurants and water sports.',
      },
    ],
    destinations: ['Mirissa', 'Galle', 'Unawatuna'],
    destinationInfo: [
      {
        name: 'Mirissa',
        overview:
          'Mirissa is a seaside town famous for its golden beaches, whale watching tours, and laid-back coastal charm.',
        attractions: ['Mirissa Beach', 'Whale watching', 'Parrot Rock'],
        activities: ['Sunrise boat cruise', 'Beachfront dining', 'Snorkeling and surfing'],
        travelTips: ['Book whale watching in advance', 'Wear reef-safe sunscreen', 'Bring a swimsuit and beach towel'],
      },
      {
        name: 'Galle',
        overview:
          'Galle features a UNESCO-listed fort, colonial architecture, and seaside cafes nestled along the historic ramparts.',
        attractions: ['Galle Fort', 'Lighthouse', 'Dutch Market Hall'],
        activities: ['Walk the fort walls', 'Explore local galleries', 'Enjoy coffee at a waterfront café'],
        travelTips: ['Wear comfortable walking shoes', 'Visit early to avoid the midday heat', 'Keep your camera ready for sunset views'],
      },
      {
        name: 'Unawatuna',
        overview:
          'Unawatuna offers sheltered beaches, coral reefs, and a relaxed atmosphere perfect for a restful coastal conclusion.',
        attractions: ['Unawatuna Beach', 'Japanese Peace Pagoda', 'Jungle Beach'],
        activities: ['Swim in calm waters', 'Relax at beach clubs', 'Take a short boat trip to nearby bays'],
        travelTips: ['Use a life jacket if needed', 'Avoid the shaded beach during high tide', 'Sample fresh seafood from beach restaurants'],
      },
    ],
  },
  {
    id: 'wildlife-explorer',
    name: 'Wildlife Explorer',
    duration: '2 Days',
    location: 'Yala National Park',
    description:
      'Set out on a private safari in Yala National Park to spot leopards, elephants, and vibrant birdlife while staying in a premium wilderness lodge.',
    price: 980,
    category: 'Wildlife',
    image: '/images/yala.JPG',
    badge: 'Adventure',
    featured: false,
    gallery: ['/images/yala.JPG', '/images/about-hero.jpg', '/images/yala.JPG'],
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival and Evening Safari',
        details: 'Reach Yala and join an afternoon safari to search for elephants, sloth bears, and birdlife.',
      },
      {
        day: 'Day 2',
        title: 'Morning Safari and Departure',
        details: 'Enjoy an early morning safari before returning to Colombo or continuing your journey.',
      },
    ],
    highlights: [
      'Private safari drives',
      'Leopard and elephant sightings',
      'Premium lodge accommodations',
      'Bird watching and nature photography',
    ],
    includes: [
      '1 night luxury wildlife lodge',
      'Two safari drives',
      'All park fees and entry permits',
      'Breakfast and dinner included',
    ],
    faqs: [
      {
        question: 'What animals can we expect to see?',
        answer:
          'Yala is famous for leopards, elephants, sloth bears, crocodiles, and a wide variety of birds.',
      },
      {
        question: 'Is the safari suitable for families?',
        answer:
          'Yes. The safari is family friendly and can be tailored for children and smaller groups.',
      },
    ],
    destinations: ['Yala National Park'],
    destinationInfo: [
      {
        name: 'Yala National Park',
        overview:
          'Yala is Sri Lanka’s most famous wildlife reserve, offering open plains, lagoons, and the highest leopard density in the world.',
        attractions: ['Yala Safari Trails', 'Kumana Bird Sanctuary', 'Tissa Lake'],
        activities: ['Morning and evening safari drives', 'Birdwatching', 'Wildlife photography sessions'],
        travelTips: ['Bring binoculars and a camera', 'Dress in neutral colors for safari', 'Carry insect repellent and sun protection'],
      },
    ],
  },
];

export const categories = ['All', 'Heritage', 'Nature', 'Adventure', 'Wildlife'];

export function getTourById(id: string) {
  return tourPackages.find((tour) => tour.id === id) ?? null;
}

export function getAllTourIds() {
  return tourPackages.map((tour) => tour.id);
}
