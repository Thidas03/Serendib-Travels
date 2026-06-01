import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Destination from '@/models/Destination';

const MOCK_DESTINATIONS = [
  {
    name: 'Sigiriya Rock Fortress',
    description: 'An ancient rock fortress and palace ruin, Sigiriya is one of the most valuable historical monuments of Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock around 200 metres high.',
    location: 'Central Province',
    price: 30,
    category: 'Heritage',
    image: '/images/sigiriya.jpg',
    rating: 4.9,
  },
  {
    name: 'Mirissa Beach',
    description: 'Relax on the golden sands of Mirissa, famous for its vibrant nightlife, excellent surfing spots, and spectacular whale watching. Mirissa is one of the main beach destinations in southern Sri Lanka.',
    location: 'Southern Province',
    price: 45,
    category: 'Beach',
    image: '/images/mirissa.jpg',
    rating: 4.8,
  },
  {
    name: 'Nine Arch Bridge',
    description: 'Experience the breathtaking beauty of the colonial-era railway bridge nestled among lush green tea fields in the central highlands. It is one of the best examples of colonial-era railway construction in the country.',
    location: 'Ella, Uva Province',
    price: 15,
    category: 'Mountain',
    image: '/images/nine-arch-bridge.jpg',
    rating: 4.7,
  },
  {
    name: 'Yala National Park',
    description: 'A huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. Home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.',
    location: 'Southern Province',
    price: 60,
    category: 'Wildlife',
    image: '/images/yala.jpg',
    rating: 4.6,
  },
  {
    name: 'Temple of the Tooth',
    description: 'A Buddhist temple in the city of Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha. It is an important shrine for Buddhists.',
    location: 'Kandy, Central Province',
    price: 20,
    category: 'Heritage',
    image: '/images/temple-of-the-tooth.jpg',
    rating: 4.8,
  },
  {
    name: 'Unawatuna Beach',
    description: 'A coastal town in Galle district of Sri Lanka. Unawatuna is a major tourist attraction in Sri Lanka and famous for its beautiful beach and corals. It is a lovely banana-shaped beach of golden sand and turquoise water.',
    location: 'Galle, Southern Province',
    price: 40,
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80',
    rating: 4.5,
  },
];

export async function GET() {
  try {
    await dbConnect();

    // Clear existing destinations
    await Destination.deleteMany({});

    // Insert new sample destinations
    const destinations = await Destination.insertMany(MOCK_DESTINATIONS);

    return NextResponse.json({
      success: true,
      message: 'Sample destination data seeded successfully!',
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    console.error('Seeding error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
