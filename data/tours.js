const data = [
  {
    name: "rio de janeiro",
    country: "brazil",
    duration: 5,
    maxGroupSize: 25,
    price: 397,
    description:
      "Rio de Janeiro is one of the most visited cities in the Southern Hemisphere and is known for its natural settings, Carnival, samba, bossa nova, and balneario beaches such as Barra da Tijuca, Copacabana, Ipanema, and Leblon. Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado and for Sugarloaf Mountain, a granite peak with cable cars to its summit. The city is also known for its sprawling favelas (shanty towns). Its raucous Carnaval festival, featuring parade floats, flamboyant costumes and samba dancers, is considered the world’s largest",
    images:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "paris",
    country: "france",
    duration: 7,
    maxGroupSize: 15,
    price: 497,
    description:
      "Paris has many stunning sights that showcase impressive architecture and design, and these places have become world-famous for their beauty. The ample photo opportunities are some of the most popular reasons to visit Paris for travelers, writers, artists and bloggers. Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    images:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "south india",
    country: "india",
    duration: 4,
    maxGroupSize: 10,
    price: 997,
    description:
      "South India has a lot more to offer than mere beaches and spice plantations. It’s a melting pot of cultures, cuisines, traditions, and languages. From honeymooning couples to families, the southern states of Kerala, Karnataka, Andhra Pradesh, and Tamil Nadu welcome tourists with warmth and love. There’s something to do for everyone here – water sports for the adventurous, backwaters for the romantics, trekking trails for hikers, and panoramic vistas for nature lovers. Read ahead to know about the top places to visit in South India:",
    images:
      "https://images.unsplash.com/photo-1620987327429-2ff481733060?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBpbmRpYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "cox's bazar",
    country: "bangladesh",
    duration: 9,
    maxGroupSize: 20,
    price: 1197,
    description:
      "Cox's Bazar is famous for its long natural sandy sea beach. ... Cox's Bazar has the world's largest unbroken sea beach which stretches more than 120 km. The entire beach is a stretch of golden sandy sea beach which is reachable by motorbike. Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.",
    images:
      "https://images.unsplash.com/photo-1587222318667-31212ce2828d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "the great wall",
    country: "china",
    duration: 10,
    maxGroupSize: 15,
    price: 1497,
    description:
      "The reasons to visit the Great Wall of China are that it has a long history and a massive scale which is said to be seen from the space. Also, one can enjoy the entertainment of hiking and photography and test your courage, etc. The Great Wall of China is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.",
    images:
      "https://images.unsplash.com/photo-1583405584623-58f4b7d1380f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
  },
  {
    name: "nail island",
    country: "andaman",
    duration: 14,
    maxGroupSize: 8,
    price: 2997,
    description:
      "Neil Island is one of India’s Andaman Islands, in the Bay of Bengal. Bharatpur Beach has coral reefs teeming with tropical fish. Laxmanpur Beach is known for its sunset views. Howrah Bridge is a natural rock formation accessible at low tide. Near the island’s wharf is Neil Kendra village, with a curving, sandy bay dotted with boats. Off the southeast coast, the tiny Sir Hugh Rose Island is a sanctuary for turtles.",
    images:
      "https://images.unsplash.com/photo-1579457870366-252687134e45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=873&q=80",
  },
  {
    name: "dubai",
    country: "uae",
    duration: 5,
    maxGroupSize: 8,
    price: 1997,
    description:
      "Dubai's landmark building and major tourist attraction is the Burj Khalifa, which at 829.8 meters is the tallest building in the world and the most famous of the city's points of interest. For most visitors, a trip to the observation deck on the 124th floor here is a must-do while in the city. Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
    images:
      "https://images.unsplash.com/photo-1549944850-84e00be4203b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGR1YmFpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "kuakata",
    country: "bangladesh",
    duration: 9,
    maxGroupSize: 8,
    price: 2997,
    description:
      "Kuakata is a place of pilgrimage for Hindu and Buddhist communities. Innumerable devotees arrive here at the festivals of 'Rush Purnima' and 'Maghi Purnima'. One may visit a 100-year-old Buddhist temple where the statue of Goutama Buddha and two 200-year-old wells are located. Kuakata is a town in southern Bangladesh known for its panoramic sea beach. Kuakata beach is a sandy expanse 18 kilometres long and 3 kilometres wide. From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal.",
    images:
      "https://images.unsplash.com/photo-1601560496330-b654cca141d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
  },
  {
    name: "bali",
    country: "indonisia",
    duration: 3,
    maxGroupSize: 12,
    price: 1497,
    description:
      "Famous for its volcanic mountains, iconic beaches and coral reefs, Indonesia's resort island of Bali has topped TripAdvisor's best destination list for 2017. Famous for its volcanic mountains, iconic beaches and coral reefs, Indonesia's resort island of Bali has topped TripAdvisor's best destination list. ali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.",
    images:
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  },
];

module.exports = data;
