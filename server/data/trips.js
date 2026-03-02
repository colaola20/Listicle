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
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Socotra_landscape.jpg",
    "tip": "Best visited in winter months (Nov-Feb) when temperatures are cooler.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 3,
    "locationName": "Chefchaouen",
    "country": "Morocco",
    "type": "City",
    "description": "A small town known for its striking blue-painted streets and houses.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Chefchaouen_Street.jpg",
    "tip": "Morning light makes photos especially vibrant, less crowded than afternoons.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 4,
    "locationName": "Lake Hillier",
    "country": "Australia / Western Australia",
    "type": "Lake",
    "description": "A small pink-colored lake on Middle Island, unique due to microbial activity.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Lake_Hillier.jpg",
    "tip": "Take a scenic flight for the best view; otherwise hard to access by land.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 5,
    "locationName": "Pamukkale Thermal Pools",
    "country": "Turkey / Denizli",
    "type": "Park / Natural",
    "description": "Terraced thermal pools with milky-white mineral deposits, a natural spa experience.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Pamukkale_Terraces.jpg",
    "tip": "Go early in the morning for cooler temperatures and softer light.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 6,
    "locationName": "Kolmanskop Ghost Town",
    "country": "Namibia",
    "type": "Town / Museum",
    "description": "An abandoned diamond mining town slowly being reclaimed by sand dunes.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Kolmanskop_Interior.jpg",
    "tip": "Afternoon light casts beautiful shadows inside the buildings.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 7,
    "locationName": "Gyeongju Seokguram Grotto",
    "country": "South Korea",
    "type": "Cultural / Temple",
    "description": "A Buddhist cave temple with a serene stone Buddha overlooking the East Sea.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/1/10/Seokguram_grotto.jpg",
    "tip": "Best visited during spring or autumn for mild weather.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 8,
    "locationName": "Hallstatt Salt Mines",
    "country": "Austria / Hallstatt",
    "type": "Museum / Historical",
    "description": "Historic salt mines with underground tunnels and slides for visitors.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Hallstatt_Salt_Mine.jpg",
    "tip": "Book a guided tour in advance; summer afternoons can be crowded.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 9,
    "locationName": "Svalbard Global Seed Vault",
    "country": "Norway",
    "type": "Unique Facility",
    "description": "A secure seed bank preserving plant diversity for the future.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/1/15/Svalbard_Seed_Vault.jpg",
    "tip": "You cannot enter, but nearby Longyearbyen is scenic and accessible.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 10,
    "locationName": "Aït Benhaddou",
    "country": "Morocco",
    "type": "Village / Cultural",
    "description": "A fortified village made of clay, famous for movie sets like Gladiator.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/8/82/Ait_Benhaddou.jpg",
    "tip": "Visit late afternoon for soft lighting and fewer tourists.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 11,
    "locationName": "Trolltunga",
    "country": "Norway / Odda",
    "type": "Natural / Cliff",
    "description": "A dramatic rock formation that juts out over a fjord, offering stunning views.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Trolltunga_2018.jpg",
    "tip": "Hike early morning; takes 10–12 hours round trip.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 12,
    "locationName": "Pamukkale Thermal Pools",
    "country": "Turkey / Denizli",
    "type": "Park / Natural",
    "description": "Terraced thermal pools with milky-white mineral deposits, a natural spa experience.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Pamukkale_Terraces.jpg",
    "tip": "Go early in the morning for cooler temperatures and softer light.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 13,
    "locationName": "Valley of the Moon",
    "country": "Chile / Atacama Desert",
    "type": "Natural / Desert",
    "description": "An otherworldly desert landscape shaped by centuries of erosion.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/3/33/Valle_de_la_Luna.jpg",
    "tip": "Visit at sunset for dramatic colors and photography.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 14,
    "locationName": "Cinque Terre Secret Trails",
    "country": "Italy / Liguria",
    "type": "Hiking / Village",
    "description": "Hidden hiking paths connecting colorful villages along the Italian coast.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/6/63/Cinque_Terre_Trail.jpg",
    "tip": "Avoid peak summer months to skip crowds.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 15,
    "locationName": "Mount Roraima",
    "country": "Venezuela / Brazil / Guyana",
    "type": "Natural / Mountain",
    "description": "A tabletop mountain with unique flora and dramatic cliffs.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Mount_Roraima.jpg",
    "tip": "Best for experienced hikers; plan a multi-day guided trek.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 16,
    "locationName": "Reinebringen",
    "country": "Norway / Lofoten Islands",
    "type": "Hiking / Viewpoint",
    "description": "A steep trail with breathtaking views of the Reine fishing village and fjords.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Reinebringen_View.jpg",
    "tip": "Wear sturdy shoes; trail can be slippery after rain.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 17,
    "locationName": "Hvitserkur",
    "country": "Iceland",
    "type": "Natural / Rock Formation",
    "description": "A 15-meter basalt rock formation resembling a dragon drinking from the sea.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/2/22/Hvitserkur_Iceland.jpg",
    "tip": "Visit at low tide for the best photo angles.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 18,
    "locationName": "Lake Bled Hidden Island",
    "country": "Slovenia",
    "type": "Lake / Island",
    "description": "A small island in the middle of Lake Bled with a quaint church and bell tower.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/1/12/Lake_Bled_Island.jpg",
    "tip": "Rent a rowboat early morning to avoid crowds.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 19,
    "locationName": "Plitvice Lakes Hidden Trails",
    "country": "Croatia",
    "type": "Park / Nature",
    "description": "Less-traveled trails in Plitvice Lakes National Park with waterfalls and serene lakes.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/4/41/Plitvice_Lakes_Hidden_Trail.jpg",
    "tip": "Go on weekdays and early morning to experience peaceful walks.",
    "submittedBy": "Olha Sorych"
  },
  {
    "id": 20,
    "locationName": "Phong Nha Cave",
    "country": "Vietnam / Quang Binh",
    "type": "Cave / Natural",
    "description": "A vast limestone cave system with underground rivers and stunning stalactites.",
    "imageURL": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Phong_Nha_Cave.jpg",
    "tip": "Best visited in the dry season (Feb–Aug) for safer exploration.",
    "submittedBy": "Olha Sorych"
  }
]

export default tripData