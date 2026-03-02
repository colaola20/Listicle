const tripData = [
  {
    "id": 1,
    "locationName": "Wisteria Tunnel",
    "country": "Japan / Kitakyushu",
    "type": "Park",
    "description": "A beautiful tunnel covered in cascading wisteria flowers that bloom in late spring.",
    "imageURL": "https://www.japan-guide.com/g20/4881_01.jpg",
    "tip": "Visit in April-May for full bloom and arrive early to avoid crowds.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 2,
    "locationName": "Socotra Island",
    "country": "Yemen",
    "type": "Island / Nature",
    "description": "A remote island with alien-like dragon blood trees and unique biodiversity.",
    "imageURL": "/public/2.jpg",
    "tip": "Best visited in winter months (Nov-Feb) when temperatures are cooler.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 3,
    "locationName": "Chefchaouen",
    "country": "Morocco",
    "type": "City",
    "description": "A small town known for its striking blue-painted streets and houses.",
    "imageURL": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/2c/a9/51.jpg",
    "tip": "Morning light makes photos especially vibrant, less crowded than afternoons.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 4,
    "locationName": "Lake Hillier",
    "country": "Australia / Western Australia",
    "type": "Lake",
    "description": "A small pink-colored lake on Middle Island, unique due to microbial activity.",
    "imageURL": "https://images.newscientist.com/wp-content/uploads/2022/03/10112405/SEI_92585517.jpg",
    "tip": "Take a scenic flight for the best view; otherwise hard to access by land.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 5,
    "locationName": "Pamukkale Thermal Pools",
    "country": "Turkey / Denizli",
    "type": "Park / Natural",
    "description": "Terraced thermal pools with milky-white mineral deposits, a natural spa experience.",
    "imageURL": "https://www.traveltalktours.com/wp-content/smush-webp/2022/04/pamukkale-thermal-pools.jpg.webp",
    "tip": "Go early in the morning for cooler temperatures and softer light.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 6,
    "locationName": "Kolmanskop Ghost Town",
    "country": "Namibia",
    "type": "Town / Museum",
    "description": "An abandoned diamond mining town slowly being reclaimed by sand dunes.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/3/33/Kolmanskop_Ghost_Town.jpg",
    "tip": "Afternoon light casts beautiful shadows inside the buildings.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 7,
    "locationName": "Gyeongju Seokguram Grotto",
    "country": "South Korea",
    "type": "Cultural / Temple",
    "description": "A Buddhist cave temple with a serene stone Buddha overlooking the East Sea.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaA4kSu9sjiqxkvwqmZ3XgztDB0ZmjauQWhw&s",
    "tip": "Best visited during spring or autumn for mild weather.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 8,
    "locationName": "Hallstatt Salt Mines",
    "country": "Austria / Hallstatt",
    "type": "Museum / Historical",
    "description": "Historic salt mines with underground tunnels and slides for visitors.",
    "imageURL": "https://www.salzwelten.at/Medien/1_Hallstatt/127/image-thumb__127__lightbox/SW_HT_Pr%C3%A4historische_F%C3%BChrung_Schaustelle_Eingang.jpg",
    "tip": "Book a guided tour in advance; summer afternoons can be crowded.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 9,
    "locationName": "Svalbard Global Seed Vault",
    "country": "Norway",
    "type": "Unique Facility",
    "description": "A secure seed bank preserving plant diversity for the future.",
    "imageURL": "https://i.guim.co.uk/img/media/75b0ffe8526abe878ea7492a551abe38c1e5352d/0_0_3448_2070/master/3448.jpg?width=1200&quality=85&auto=format&fit=max&s=54d0e37381d25d1eb2c00394b6760dda",
    "tip": "You cannot enter, but nearby Longyearbyen is scenic and accessible.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 10,
    "locationName": "Aït Benhaddou",
    "country": "Morocco",
    "type": "Village / Cultural",
    "description": "A fortified village made of clay, famous for movie sets like Gladiator.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96263yY7ubuiMPMqSrMAwWfXgLxe-K42W2A&s",
    "tip": "Visit late afternoon for soft lighting and fewer tourists.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 11,
    "locationName": "Trolltunga",
    "country": "Norway / Odda",
    "type": "Natural / Cliff",
    "description": "A dramatic rock formation that juts out over a fjord, offering stunning views.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBfQMMiFw23LLCYhiM_ALmXRPFejMiuRQ0Q&s",
    "tip": "Hike early morning; takes 10–12 hours round trip.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 13,
    "locationName": "Valley of the Moon",
    "country": "Chile / Atacama Desert",
    "type": "Natural / Desert",
    "description": "An otherworldly desert landscape shaped by centuries of erosion.",
    "imageURL": "https://bushop.com/wp-content/uploads/sites/6/moon-valley-1.jpg",
    "tip": "Visit at sunset for dramatic colors and photography.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 14,
    "locationName": "Cinque Terre Secret Trails",
    "country": "Italy / Liguria",
    "type": "Hiking / Village",
    "description": "Hidden hiking paths connecting colorful villages along the Italian coast.",
    "imageURL": "https://57hours.com/wp-content/uploads/2023/01/cinque-terre-hiking.jpg",
    "tip": "Avoid peak summer months to skip crowds.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 15,
    "locationName": "Mount Roraima",
    "country": "Venezuela / Brazil / Guyana",
    "type": "Natural / Mountain",
    "description": "A tabletop mountain with unique flora and dramatic cliffs.",
    "imageURL": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhphW8jY6NCBuT7Nh7xeeR-kklGgtaaqDPKSRMTnfYsvI7WN5sMLvWE5b5icNAtgD97AHEZxzCnQ8AONDMLbLwbTbsAJgYBp48pinVzFUKevHadBzhFco2tOfsayrwpJnmgvT_SoJVTv2xmGWtmYKBPm4H1SIgMM78h4B8DuVXhvlZo2D5ebnfXKp/w1200-h630-p-k-no-nu/roraima-north-large.webp",
    "tip": "Best for experienced hikers; plan a multi-day guided trek.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 16,
    "locationName": "Reinebringen",
    "country": "Norway / Lofoten Islands",
    "type": "Hiking / Viewpoint",
    "description": "A steep trail with breathtaking views of the Reine fishing village and fjords.",
    "imageURL": "https://v.imgi.no/visitlofoten-3570-a83f268287d42a1c4131c1fad5ae3265-1176x635/panoramabilde-fra-reinebringen.jpg",
    "tip": "Wear sturdy shoes; trail can be slippery after rain.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 17,
    "locationName": "Hvitserkur",
    "country": "Iceland",
    "type": "Natural / Rock Formation",
    "description": "A 15-meter basalt rock formation resembling a dragon drinking from the sea.",
    "imageURL": "https://gti.images.tshiftcdn.com/388424/x/0/the-majestic-hvitserkur-sea-stack-the-troll-of-north-west-iceland-2?ixlib=php-3.3.0&w=883",
    "tip": "Visit at low tide for the best photo angles.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 18,
    "locationName": "Lake Bled Hidden Island",
    "country": "Slovenia",
    "type": "Lake / Island",
    "description": "A small island in the middle of Lake Bled with a quaint church and bell tower.",
    "imageURL": "https://images.squarespace-cdn.com/content/v1/5aee2382f93fd4603e621996/1530883337137-72P1R42DRUHHKBMH7Y8O/Lake+Bled+Slovenia+DJI+Drone+Aerial+View.jpg",
    "tip": "Rent a rowboat early morning to avoid crowds.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 19,
    "locationName": "Plitvice Lakes Hidden Trails",
    "country": "Croatia",
    "type": "Park / Nature",
    "description": "Less-traveled trails in Plitvice Lakes National Park with waterfalls and serene lakes.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2_p2uC8dtKbJ3X9pk1Cd_5OAsIVa0HVZa0g&s",
    "tip": "Go on weekdays and early morning to experience peaceful walks.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 20,
    "locationName": "Phong Nha Cave",
    "country": "Vietnam / Quang Binh",
    "type": "Cave / Natural",
    "description": "A vast limestone cave system with underground rivers and stunning stalactites.",
    "imageURL": "https://cdn.prod.website-files.com/66fab24d6dde4d79b3b50865/687f8438a337cb8143f1700e_Phong%20Nha%20Cave.webp",
    "tip": "Best visited in the dry season (Feb–Aug) for safer exploration.",
    "submittedBy": "Olha Sorych"
  }
]

export default tripData