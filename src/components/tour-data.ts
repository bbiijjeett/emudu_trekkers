import img2 from '../assets/tour2/tour2.jpg';
import db1 from '../assets/tour2/1_view.jpg';
import db2 from '../assets/tour2/2_view.jpg';
import db_v from '../assets/tour2/video_db.mp4';
import lake_v from '../assets/tour1/lakeVideo.mp4';
import lake_1 from '../assets/tour1/lake1.jpg';
import lake_2 from '../assets/tour1/lake2.jpg';
import lake_3 from '../assets/tour1/lake3.jpg';

import img1 from '../assets/tour1.jpg';


export interface TourDetails {
  title: string;
  location: string;
  duration: string;
  groupSize: string;
  price: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  travelers: number;
  gallery: { type: 'image' | 'video'; url: string; title: string }[];
  itinerary: { day: number; title: string; description: string; activities: string[]; time: string }[];
  inclusions: string[];
  exclusions: string[];
  pickupPoints: { location: string; time: string; address: string }[];
}

export const toursData: TourDetails[] = [
  { 
    title: 'Seven Lakes Trek',
    location: 'Seven Lakes, Arunachal Pradesh',
    duration: '11 Days / 10 Nights',
    groupSize: '8-12',
    price: '45000',
    rating: 5.0,
    reviews: 127,
    travelers: 456,
    image: img1,
    description: 'A cinematic trek taking you through a chain of pristine alpine lakes, high ridgelines, and remote villages.',
    gallery: [
      { 
        type: 'image', 
        url: lake_1,
        title: 'Alpine Mountain Vista'
      },
      { 
        type: 'image', 
        url: lake_2,
        title: 'Mountain Hiking Trail'
      },
      { 
        type: 'image', 
        url: lake_3,
        title: 'Expert Mountain Guide'
      },
      { 
        type: 'video', 
        url: lake_v,
        title: 'Summit Experience Video'
      }
    ],
    
  itinerary: [
    {
      day: 1,
      time: '10:00 AM',
      title: 'Arrival at Dibrugarh',
      description:
        'Arrive at Dibrugarh Airport or railway station. Meet your Emudu Trekkers representative and transfer to your hotel. Evening briefing and gear check.',
      activities: [
        'Airport pickup and transfer to hotel',
        'Welcome briefing and safety orientation',
        'Evening stroll along the Brahmaputra riverbank',
        'Overnight stay in Dibrugarh'
      ]
    },
    {
      day: 2,
      time: '7:00 AM',
      title: 'Drive to Roing (150 km)',
      description:
        'Begin the road journey from Dibrugarh to Roing via the iconic Bogibeel Bridge — India’s longest rail-cum-road bridge. Pass lush tea gardens and tribal villages.',
      activities: [
        'Breakfast at hotel before departure',
        'Scenic drive through tea estates and hills',
        'Cross the Dibang River and enter Arunachal Pradesh',
        'Overnight stay in Roing guesthouse'
      ]
    },
    {
      day: 3,
      time: '8:00 AM',
      title: 'Roing to Anini via Mayodia Pass (225 km)',
      description:
        'Drive through dense rainforest, waterfalls, and the high-altitude Mayodia Pass (~2,600m) before descending into Anini — the gateway to the Seven Lakes region.',
      activities: [
        'Early morning drive from Roing',
        'Short breaks at viewpoints and waterfalls',
        'Lunch en route at Mayodia',
        'Reach Anini by evening, check into homestay'
      ]
    },
    {
      day: 4,
      time: '8:00 AM',
      title: 'Anini to Imungu – Trek to Camp 1 (2,500m)',
      description:
        'Drive to Imungu village (last motorable point) and start the trek to Camp 1 through fern fields and subtropical forest.',
      activities: [
        'Vehicle transfer to Imungu trailhead',
        'Start trek through lush green valleys',
        'Picnic lunch en route',
        'Camp setup near river — bonfire and dinner'
      ]
    },
    {
      day: 5,
      time: '7:00 AM',
      title: 'Trek to Camp 2 (3,400m)',
      description:
        'Gradual ascent through oak and bamboo forests with stunning views of snow-capped ridges. Altitude gain helps acclimatization.',
      activities: [
        'Morning yoga and warm-up stretches',
        '5-hour uphill trek with scenic halts',
        'Spot exotic birds and orchids',
        'Overnight stay in alpine tents'
      ]
    },
    {
      day: 6,
      time: '7:30 AM',
      title: 'Camp 2 to Camp 3 (3,730m)',
      description:
        'Enter the alpine zone above the tree line — terrain becomes rocky with distant lake views appearing. Reach Camp 3 near the first glacial lake.',
      activities: [
        'Trek through high-altitude meadows',
        'Photography and short breaks for hydration',
        'Lunch stop en route',
        'Evening campsite setup near lake'
      ]
    },
    {
      day: 7,
      time: '8:00 AM',
      title: 'Explore the Seven Lakes',
      description:
        'Full-day exploration of the seven sacred glacial lakes — each surrounded by dramatic mountain backdrops. A photographer’s paradise.',
      activities: [
        'Visit all seven lakes (Kamo Uyea, Emudu, etc.)',
        'Meditation and quiet reflection by the water',
        'Packed lunch with panoramic views',
        'Return to base camp by evening for dinner'
      ]
    },
    {
      day: 8,
      time: '8:00 AM',
      title: 'Descent to Inguli Camp (1,550m)',
      description:
        'Begin the descent from the high lakes back toward the lower Dibang Valley region, staying in a traditional Idu Mishmi home.',
      activities: [
        'Morning tea and farewell to mountain crew',
        'Trek down through pine forest and river crossings',
        'Arrive at Inguli village homestay',
        'Cultural evening and local dinner'
      ]
    },
    {
      day: 9,
      time: '8:30 AM',
      title: 'Inguli to Mele to Anini',
      description:
        'Final short trek followed by drive back to Anini. Relax, rest, and enjoy the local cuisine.',
      activities: [
        'Short morning walk from Inguli to Mele',
        'Drive to Anini town (approx. 1 hour)',
        'Free evening for souvenirs and rest',
        'Overnight stay in Anini'
      ]
    },
    {
      day: 10,
      time: '7:00 AM',
      title: 'Anini to Roing',
      description:
        'Retrace the journey back through Mayodia Pass to Roing. Evening leisure time and farewell gathering.',
      activities: [
        'Scenic drive through Dibang Valley',
        'Lunch stop at Mayodia Café',
        'Check into Roing guesthouse',
        'Dinner and relaxation'
      ]
    },
    {
      day: 11,
      time: '8:00 AM',
      title: 'Roing to Dibrugarh – Departure',
      description:
        'Drive back to Dibrugarh for your onward flight or train journey. Trek ends with unforgettable memories.',
      activities: [
        'Breakfast at Roing homestay',
        'Final group photo and certificate ceremony',
        'Drive back to Dibrugarh Airport/Railway Station',
        'Departure and goodbyes'
      ]
    }
  ],

    inclusions: [
    'Professional trek leader and local guide (certified in wilderness safety)',
    'All accommodation (tents, homestays, and hotels)',
    'All meals during trek (breakfast, lunch, dinner)',
    'All surface transfers (Dibrugarh ↔ Anini)',
    'Camping gear (tents, mats, sleeping bags)',
    'All inner line permits and entry fees',
    'Medical kit and oxygen cylinder',
    'Porters for common gear and food supplies'
  ],
    exclusions: [
    'Flights or trains to/from Dibrugarh',
    'Personal travel insurance (mandatory)',
    'Personal trekking equipment (boots, poles, clothing)',
    'Bottled water, snacks, and beverages',
    'Tips for guides, porters, and drivers',
    'Expenses due to bad weather or road closures',
    'Any costs not mentioned under “Inclusions”'
  ],
    pickupPoints: [
      {
      location: 'Dibrugarh Airport (DIB)',
      time: '10:00 AM',
      address: 'Meet outside arrival gate near the Emudu Trekkers banner'
    },
    {
      location: 'Dibrugarh Railway Station',
      time: '11:00 AM',
      address: 'Main exit gate, Dibrugarh Town Station'
    },
    {
      location: 'Roing Town Center',
      time: '5:00 PM',
      address: 'Roing Bus Stand – For guests joining from Arunachal side'
    }
    ]
  },
  {
    title: 'Dibang Valley Tour',
    location: 'Anini & Surroundings',
    duration: '7 Days / 6 Nights',
    groupSize: '6-10',
    price: '25000',
    rating: 4.9,
    reviews: 98,
    travelers: 342,
    image: img2,
    description: 'Explore the lush Dibang Valley with local guides, warm homestays, and untouched rivers.',
    gallery: [
      { 
        type: 'image', 
        url: db1,
        title: 'Crystal Clear Lake'
      },
      { 
        type: 'image', 
        url: db2,
        title: 'Alpine Lake Scenic View'
      },
      { 
        type: 'image', 
        url: 'https://images.unsplash.com/photo-1602076787354-a37cfebe0532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNjc5MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        title: 'Mountain Lake Landscape'
      },
      { 
        type: 'video', 
        url: db_v,
        title: 'Lake Tour Highlights'
      }
    ],

  itinerary: [
    {
      day: 1,
      time: '10:00 AM',
      title: 'Arrival at Dibrugarh',
      description:
        'Arrive at Dibrugarh Airport or rail station; meet your tour leader and transfer to your hotel. Evening welcome briefing and local market stroll.',
      activities: [
        'Airport or station pickup & transfer to hotel',
        'Welcome briefing: schedule, permits, gear check',
        'Relaxed orientation walk in Dibrugarh',
        'Overnight stay in Dibrugarh'
      ]
    },
    {
      day: 2,
      time: '7:00 AM',
      title: 'Drive to Roing (Lower Dibang Valley)',
      description:
        'After breakfast, depart by road to Roing in Lower Dibang Valley district, passing through scenic tea gardens and rivers.',
      activities: [
        'Breakfast at hotel, load up baggage',
        'Scenic drive Dibrugarh → Roing (approx 150 km)',
        'Stop at viewpoints/en route river banks',
        'Check-in at guesthouse in Roing, evening free time'
      ]
    },
    {
      day: 3,
      time: '8:00 AM',
      title: 'Roing to Anini via Mayodia Pass',
      description:
        'Early start: drive to Anini through the high-altitude Mayodia Pass (~2,655 m) offering panoramic views and cool weather. Arrive Anini, settle in homestay.',
      activities: [
        'Depart Roing after breakfast',
        'Stop at Mayodia Pass for photo-op and short walk',
        'Continue to Anini, check-in at local homestay or lodge',
        'Evening cultural talk about the Idu Mishmi tribe and local legends'
      ]
    },
    {
      day: 4,
      time: '9:00 AM',
      title: 'Explore Anini & Surroundings',
      description:
        'Rest day in Anini to acclimatize and explore nearby villages, waterfall and viewpoint. Light walking and cultural immersion.',
      activities: [
        'Morning walk to viewpoint overlooking Dibang Valley',
        'Visit a traditional Idu Mishmi village, interact with locals',
        'Afternoon visit to a local waterfall or forest trail',
        'Evening at leisure, local dinner with tribal cuisine'
      ]
    },
    {
      day: 5,
      time: '7:30 AM',
      title: 'Drive to Acheso / Chigu region & Nature Walk',
      description:
        'After breakfast drive to the Chigu/Acheso area in Dibang Valley — lesser-visited, beautiful forest setting. Short nature walk, bird-watching and scenic stop.',
      activities: [
        'Transfer by vehicle to Chigu/Acheso region',
        'Short guided nature walk through forest and river bank',
        'Picnic lunch amidst nature',
        'Return to Anini for overnight stay'
      ]
    },
    {
      day: 6,
      time: '8:00 AM',
      title: 'Return Drive to Roing & Leisure Evening',
      description:
        'Begin descent from Anini back to Roing. After arrival enjoy leisure time, local souvenir-shopping and farewell dinner.',
      activities: [
        'Depart Anini post-breakfast',
        'Drive Anini → Roing (via Mayodia Pass again)',
        'Check-in at Roing guesthouse, free afternoon',
        'Evening group photo, farewell dinner'
      ]
    },
    {
      day: 7,
      time: '9:00 AM',
      title: 'Roing to Dibrugarh – Departure',
      description:
        'Final transfer from Roing to Dibrugarh. Drop at airport or railway station for onward journey, with cherishable memories of Dibang Valley.',
      activities: [
        'Breakfast at Roing guesthouse',
        'Drive to Dibrugarh Airport/Railway Station',
        'Handover of travel log/certificate if applicable',
        'Departure and goodbye'
      ]
    }
  ],

    inclusions: [
    'Accommodation for 6 nights (2 nights hotel in Dibrugarh, 2 nights guesthouse/homestay in Roing & Anini)',
    'All meals from Day 1 lunch until Day 7 breakfast (veg/non-veg options)',
    'Road transfers and sightseeing as per itinerary',
    'Local guides & support staff in Anini region',
    'Inner Line Permits and necessary local permits',
    'Nature walk & village visit as specified',
    'Welcome briefing, info kit, group photo'
  ],

  exclusions: [
    'Flights/trains to/from Dibrugarh',
    'Personal travel insurance (mandatory)',
    'Personal trekking equipment (boots, poles, warm clothing)',
    'Any meals/activities not mentioned above',
    'Beverages, bottled water, snacks during transport stops',
    'Tips for guides/drivers/porters',
    'Expenses due to road blockages, weather or delays beyond control'
  ],
    pickupPoints: [
       {
      location: 'Dibrugarh Airport (DIB)',
      time: '10:00 AM',
      address: 'Arrival terminal outside gate – meet Emudu Trekkers team'
    },
    {
      location: 'Dibrugarh Railway Station',
      time: '11:00 AM',
      address: 'Main exit, old town station, Dibrugarh'
    },
    {
      location: 'Roing Town Centre',
      time: '4:00 PM',
      address: 'Roing Bus Stand – for joiners coming from Assam/Arunachal side'
    }
    ]
  },
  // {
  //   title: 'Mountain Base Camp',
  //   location: 'Patagonia',
  //   duration: '10 Days',
  //   groupSize: '10-15',
  //   price: '$3,500',
  //   rating: 5.0,
  //   reviews: 156,
  //   travelers: 523,
  //   image: 'https://images.unsplash.com/photo-1746254538152-2420e6b0a9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhbXBpbmclMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYxNjkwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   description: 'An immersive wilderness experience with camping under the stars.',
  //   gallery: [
  //     { 
  //       type: 'image', 
  //       url: 'https://images.unsplash.com/photo-1746254538152-2420e6b0a9dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhbXBpbmclMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzYxNjkwODc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //       title: 'Mountain Base Camp'
  //     },
  //     { 
  //       type: 'image', 
  //       url: 'https://images.unsplash.com/photo-1673261576985-3447169cbd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMG1vdW50YWluc3xlbnwxfHx8fDE3NjE2NTgzMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //       title: 'Camping Under Stars'
  //     },
  //     { 
  //       type: 'image', 
  //       url: 'https://images.unsplash.com/photo-1596742909516-66a7e340bf60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZXJuZXNzJTIwY2FtcGluZ3xlbnwxfHx8fDE3NjE3NDkyODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //       title: 'Wilderness Camping'
  //     },
  //     { 
  //       type: 'video', 
  //       url: 'https://assets.mixkit.co/videos/preview/mixkit-camping-at-night-4746-large.mp4',
  //       title: 'Base Camp Life'
  //     }
  //   ],
  //   itinerary: [
  //     {
  //       day: 1,
  //       time: '3:00 PM',
  //       title: 'Arrival in El Calafate',
  //       description: 'Welcome to Patagonia! Preparation and team bonding.',
  //       activities: [
  //         'Airport pickup and hotel check-in',
  //         'Team introduction and gear check',
  //         'Patagonian BBQ dinner',
  //         'Trip briefing and Q&A'
  //       ]
  //     },
  //     {
  //       day: 2,
  //       time: '7:00 AM',
  //       title: 'Trek to Base Camp',
  //       description: 'Begin your wilderness journey into Torres del Paine.',
  //       activities: [
  //         'Transfer to park entrance',
  //         '6-hour trek to base camp',
  //         'Camp setup and orientation',
  //         'Stargazing session'
  //       ]
  //     },
  //     {
  //       day: 3,
  //       time: '4:00 AM',
  //       title: 'Base of Torres',
  //       description: 'Challenge yourself with the iconic Torres viewpoint hike.',
  //       activities: [
  //         'Pre-dawn departure',
  //         'Climb to Torres viewpoint',
  //         'Breakfast at the base of the towers',
  //         'Return to camp and rest'
  //       ]
  //     },
  //     {
  //       day: 4,
  //       time: '8:00 AM',
  //       title: 'French Valley Exploration',
  //       description: 'Discover the hanging glaciers and granite peaks.',
  //       activities: [
  //         'Move camp to new location',
  //         'French Valley hike',
  //         'Glacier viewing',
  //         'Camp cooking workshop'
  //       ]
  //     },
  //     {
  //       day: 5,
  //       time: 'Flexible',
  //       title: 'Rest & Exploration Day',
  //       description: 'Lighter activities and personal time.',
  //       activities: [
  //         'Optional short hikes',
  //         'Photography session',
  //         'Wildlife observation',
  //         'Camp maintenance and relaxation'
  //       ]
  //     }
  //   ],
  //   inclusions: [
  //     'Expert wilderness guide and assistant',
  //     'All camping equipment (tents, sleeping bags, mats)',
  //     'All meals during the trek',
  //     '2 nights hotel accommodation',
  //     'Airport transfers',
  //     'National park fees',
  //     'Boat tour on Lago Grey',
  //     'Emergency satellite communication'
  //   ],
  //   exclusions: [
  //     'International flights',
  //     'Meals in El Calafate (days 1 & 10)',
  //     'Personal trekking gear',
  //     'Travel insurance',
  //     'Tips for guides',
  //     'Alcoholic beverages'
  //   ],
  //   pickupPoints: [
  //     {
  //       location: 'El Calafate Airport',
  //       time: '3:00 PM',
  //       address: 'Comandante Armando Tola International Airport'
  //     },
  //     {
  //       location: 'El Calafate Bus Terminal',
  //       time: '5:00 PM',
  //       address: 'Terminal de Ómnibus, Avenida Roca'
  //     }
  //   ]
  // },
  // {
  //   title: 'Lake Kayaking Retreat',
  //   location: 'New Zealand',
  //   duration: '6 Days',
  //   groupSize: '8-12',
  //   price: '$2,400',
  //   rating: 4.8,
  //   reviews: 84,
  //   travelers: 298,
  //   image: 'https://images.unsplash.com/photo-1661031023151-d57aa6d2bdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMGxha2V8ZW58MXx8fHwxNzYxNzQ4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //   description: 'Paddle through serene waters with stunning mountain backdrops.',
  //   gallery: [
  //     { 
  //       type: 'image', 
  //       url: 'https://images.unsplash.com/photo-1661031023151-d57aa6d2bdfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlha2luZyUyMGxha2V8ZW58MXx8fHwxNzYxNzQ4ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //       title: 'Lake Kayaking Adventure'
  //     },
  //     { 
  //       type: 'image', 
  //       url: 'https://images.unsplash.com/photo-1760312205909-337f2b95fc00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXlhayUyMHdhdGVyJTIwYWR2ZW50dXJlfGVufDF8fHx8MTc2MTc0OTI4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //       title: 'Water Adventure'
  //     },
  //     { 
  //       type: 'image', 
  //       url: 'https://images.unsplash.com/photo-1602076787354-a37cfebe0532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxha2UlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYxNjc5MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  //       title: 'Pristine Lake Views'
  //     },
  //     { 
  //       type: 'video', 
  //       url: 'https://assets.mixkit.co/videos/preview/mixkit-kayak-in-a-calm-lake-4457-large.mp4',
  //       title: 'Kayaking Experience'
  //     }
  //   ],
  //   itinerary: [
  //     {
  //       day: 1,
  //       time: '1:00 PM',
  //       title: 'Queenstown Arrival',
  //       description: 'Welcome to the adventure capital of New Zealand!',
  //       activities: [
  //         'Airport pickup',
  //         'Welcome dinner at lakeside restaurant',
  //         'Kayaking safety briefing',
  //         'Equipment fitting'
  //       ]
  //     },
  //     {
  //       day: 2,
  //       time: '9:00 AM',
  //       title: 'Lake Wakatipu Introduction',
  //       description: 'Learn kayaking basics on calm waters.',
  //       activities: [
  //         'Kayaking skills workshop',
  //         'Half-day paddle on Lake Wakatipu',
  //         'Lakeside lunch',
  //         'Afternoon at leisure in Queenstown'
  //       ]
  //     },
  //     {
  //       day: 3,
  //       time: '8:00 AM',
  //       title: 'Glenorchy Expedition',
  //       description: 'Paddle in the stunning Paradise region.',
  //       activities: [
  //         'Scenic drive to Glenorchy',
  //         'Full day kayaking expedition',
  //         'Beach picnic lunch',
  //         'Photography opportunities'
  //       ]
  //     },
  //     {
  //       day: 4,
  //       time: '9:00 AM',
  //       title: 'Lake Wanaka Adventure',
  //       description: 'Explore the pristine waters of Lake Wanaka.',
  //       activities: [
  //         'Transfer to Wanaka',
  //         'Kayak to hidden coves and islands',
  //         'Swimming and snorkeling',
  //         'Sunset paddle'
  //       ]
  //     },
  //     {
  //       day: 5,
  //       time: '8:00 AM',
  //       title: 'Multi-Lake Challenge',
  //       description: 'Advanced paddlers push their limits.',
  //       activities: [
  //         'Choose your challenge level',
  //         'Long-distance paddle or skills refinement',
  //         'Group bonding activities',
  //         'Farewell dinner celebration'
  //       ]
  //     },
  //     {
  //       day: 6,
  //       time: '6:00 AM',
  //       title: 'Departure Day',
  //       description: 'Final morning paddle before farewells.',
  //       activities: [
  //         'Sunrise kayak session',
  //         'Breakfast at the lake',
  //         'Group photos and certificates',
  //         'Airport transfer'
  //       ]
  //     }
  //   ],
  //   inclusions: [
  //     'Certified kayak instructor',
  //     'All kayaking equipment and safety gear',
  //     '5 nights accommodation (lakeside lodges)',
  //     'Daily breakfast and 4 lunches',
  //     'Ground transportation',
  //     'Wetsuit and dry bag rental',
  //     'Photography service',
  //     'All permits and fees'
  //   ],
  //   exclusions: [
  //     'International flights',
  //     'Dinner meals (except day 1 & 5)',
  //     'Travel insurance',
  //     'Optional activities in Queenstown',
  //     'Personal items',
  //     'Gratuities'
  //   ],
  //   pickupPoints: [
  //     {
  //       location: 'Queenstown Airport',
  //       time: '1:00 PM',
  //       address: 'Queenstown International Airport, Arrivals'
  //     },
  //     {
  //       location: 'Queenstown Town Center',
  //       time: '3:00 PM',
  //       address: 'The Station Building, Corner of Camp & Shotover Streets'
  //     }
  //   ]
  // }
];
