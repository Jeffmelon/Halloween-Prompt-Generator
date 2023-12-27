let promptList = ["13th",
    "Abandoned Building",
    "ACAB",
    "Accordion Arms & Legs",
    "Alien Encounter",
    "Alien Ghost",
    "Alone",
    "Amusement Park",
    "Analog Horror",
    "Apocalypse",
    "Apple Orchard",
    "Apple Picking",
    "Apple Pie",
    "At the Arcade",
    "Atop the Tallest Tree",
    "Aurora Borealis ❄️",
    "Autumn Trees",
    "Babysitter",
    "Backyard Camping ☀️",
    "Baking",
    "Bats",
    "Bedsheet Ghost",
    "Bees 🌸",
    "Behind You",
    "BE NOT AFRAID",
    "Bigfoot",
    "Bigfoot Family Reunion",
    "Bike Ride",
    "Black Goat",
    "Blood",
    "Body Horror",
    "Boo!",
    "Brainless",
    "Breakfast",
    "Bridge",
    "Bug Bites ☀️",
    "Buried Alive",
    "Burglar",
    "Burned",
    "Butterflies 🌸",
    "Button-Eyed Scarecrow",
    "By the Lakeside",
    "Cabins",
    "Came Back Wrong",
    "Camp Counselor ☀️",
    "Campfire Story",
    "Candles",
    "Candy",
    "Candy Gore",
    "Cannibal",
    "Canoeing on the Lake ☀️",
    "Catching Fireflies ☀️",
    "Childhood Monster",
    "Clown",
    "Cobwebs",
    "Conspiracy Theory",
    "Convenience Store",
    "Corn Maze",
    "Corpse",
    "Cosmic Horror",
    "The Country Fair",
    "Coven",
    "Creatures in the Tidepools ☀️",
    "Creatures Under The Frozen Lake ❄️",
    "Creek Monster",
    "Creep in the Window",
    "Creepy Crawly Bugs",
    "Creepy Dolls",
    "Creepy Music",
    "Creepy Pastas",
    "Cryptids In Winter ❄️",
    "Cryptids on the Beach ☀️",
    "Cursed Play",
    "Cursed Phone Number",
    "Dark Waters",
    "Dead as a Doornail",
    "Deal with the Devil",
    "Deep in the Forest",
    "Deep Underground",
    "Demented Kids Show",
    "Demons",
    "Detective",
    "Devil on your Shoulder",
    "Diner",
    "Disco Aliens",
    "Dogs don't cry",
    "Don't get into stranger's vans",
    "Don't go in the basement",
    "Doppelgänger",
    "Drive-in Movie",
    "Early In the Morning",
    "Early Snow",
    "Easter Bunny 🌸",
    "Ecentric Neighbors",
    "Egg Hunt 🌸",
    "The Egg is Hatching",
    "Elevator to Hell",
    "Emo, Goth or Punk",
    "Everyone is Staring at me",
    "The Evil Eye",
    "Eyes",
    "Faceless",
    "Fairy",
    "Fall Apart",
    "Fall in Love",
    "Fall Fairytale",
    "Fall Gods",
    "Fall Pride",
    "Family Barbecue ☀️",
    "Family Reunion",
    "Famous Painting Halloween Redraw",
    "Farm",
    "Farmer’s Market",
    "Fashionable Werewolf",
    "Fetch With A Werewolf",
    "Figures In The Snow Storm ❄️",
    "Final Girl",
    "Finding Firewood ☀️",
    "Fire Danger ☀️",
    "Fireworks ☀️",
    "Fog",
    "Football",
    "Foot Prints",
    "Forbidden Knowledge",
    "Foreign Monsters",
    "Forever Sale",
    "Fortune Teller",
    "Found Footage",
    "Fox",
    "Frankenstein’s Monster",
    "Freak Show",
    "Frostbite ❄️",
    "Gas Station",
    "Gate",
    "The Garden",
    "Ghost Hunting",
    "Ghost in the Machine",
    "Ghost Ship",
    "Ghostly Waltz",
    "Gifts ❄️",
    "Girl & Her Doll",
    "Glaring of Cats",
    "Glow in the Dark",
    "Gone Fishing",
    "Goths in Summer ☀️",
    "Grave Digger",
    "Grave Robber at Large",
    "Graveyard",
    "Grim Reaper",
    "Halloween Costume",
    "Halloween Decor",
    "Halloween Nostalgia",
    "Halloween OC",
    "Halloween Parade",
    "Hanging Out",
    "Haunted Hayride",
    "Haunted House",
    "Haunted Painting",
    "Haunted Video Game",
    "He's in the house!",
    "Headless",
    "Headless Horseman",
    "Hedge Maze 🌸",
    "Hermit Crabs ☀️",
    "He see you when you sleeping ❄️",
    "Hexes and Curses",
    "Hibernation",
    "Hickies 🌸",
    "Hidden Corpse Found",
    "Hiding in the Walls",
    "Hiking Trail",
    "Hitchhiker",
    "Horns",
    "Horror Hotel",
    "Horror Movie Marathon",
    "Horror Movie Monster",
    "Horror Show Host",
    "Hospital",
    "Howl at the Moon",
    "Icicles ❄️",
    "I didn't think mermaids would look like this",
    "I Figured out why this place closed down",
    "I found the body inside the snowman ❄️",
    "Impossible Geometries",
    "In the Mirror",
    "Infestation",
    "Infection",
    "Invader",
    "Is that racoon getting in the trash again?",
    "It's cold outside. Let them in ❄️",
    "It was a dark and stormy night!",
    "It’s Alive!",
    "Jack-in-the-Box",
    "Jack Frost ❄️",
    "Join the Cult",
    "Killer",
    "Kiss Me 🌸",
    "Krampus ❄️",
    "Labyrinthian Mall",
    "Lake Without a Reflection",
    "Lantern",
    "Lantern Light",
    "Last Day of Summer ☀️",
    "Leaf Pile",
    "Lesser Known Monster",
    "Library",
    "Lifeguard ☀️",
    "Lighthouse",
    "Liminal Space",
    "Little Jersey Devil",
    "Little Ol’ Lady",
    "The Local Scout Troop ☀️",
    "Lost in the Woods",
    "Love At First Sight 🌸",
    "Love Sickness 🌸",
    "Lovecraftian",
    "Lumberjack",
    "Lure",
    "Make A Face",
    "Mall Santa ❄️",
    "Mandrake",
    "Man Eating Wreath ❄️",
    "Mascot Costume",
    "Mask Section",
    "Masked Monster",
    "Mausoleum",
    "Mayor",
    "Mechanical",
    "Melting ☀️",
    "Memento Mori",
    "Minotaur",
    "Mischief of Rats",
    "Missing Person Found",
    "Missing Posters",
    "Monsters at the Mall",
    "Monster Dinner Party",
    "Monster in the Closet",
    "Monsters Go Caroling ❄️",
    "Monster Under the Bed",
    "Monstrous Mutation",
    "Moon Man",
    "Moonstruck",
    "Mosquitos ☀️",
    "Mothman",
    "Moths",
    "Moth Wings",
    "Murder Mystery",
    "Murder of Crows",
    "Museum of Unnatural History",
    "Mushroom Circle",
    "Mushrooms",
    "Neighborhood Watch",
    "Never go off the Trail",
    "Newcomer",
    "Night Owl",
    "Nightmares",
    "Notebook",
    "Nuclear Boy Scout ☀️",
    "An Odd Artifact",
    "Old Cartoons",
    "The Old Rusty Bunker",
    "An Ordinary Church",
    "Ouija Board",
    "Out on the Lake",
    "Outskirts of Town",
    "Overgrown",
    "Pack of Wolves",
    "Painting",
    "Party",
    "Party Games",
    "Pet Cemetery",
    "Petroglyphs",
    "Phobias",
    "Pickup Truck",
    "Pirate Costume",
    "Plague Doctor",
    "Playground",
    "Podcast",
    "Poison Caramel Apple",
    "Poison Ivy ☀️",
    "Police Station",
    "Poltergeist Prankster",
    "Poolside",
    "Possession",
    "Potion Making",
    "Prank",
    "Preacher",
    "Princess Costume",
    "Prize Winning Pumpkin",
    "The Projectionist",
    "Prom Night",
    "Pumpkin Carving",
    "Pumpkin Lollipop",
    "Pumpkin Patch",
    "Pumpkin Spice",
    "Randonauting",
    "Rat King",
    "Reindeer ❄️",
    "The Richest Man in Town",
    "Roadkill",
    "Roller Rink",
    "Roses 🌸",
    "S'mores ☀️",
    "A Sacrifice",
    "Sandbox",
    "Saturday Morning Cartoons",
    "Sawmill",
    "Scaredy Cat",
    "Scary or Cute?",
    "Science Experiment",
    "Secret Lair",
    "Secret Passage",
    "Severed Limb",
    "Sewer Gator",
    "Shadow",
    "Sharp Teeth",
    "Show n' Tell",
    "Shut-in",
    "Silent Stalker",
    "Skeleton",
    "Skeleton in the Closet",
    "Skiing ❄️",
    "Sleepover",
    "Slenderman",
    "Slip n' Slide ☀️",
    "Snake",
    "Snowball Fight ❄️",
    "Something pretending to be Human",
    "Song Title (choose a song that makes you think of fall or halloween)",
    "Spooky Sapphics",
    "Spiders",
    "Spirals",
    "Stabbing",
    "Stalker With A Crush 🌸",
    "Star-crossed Lovers 🌸",
    "Star Gazing",
    "Strange Moon",
    "Strange Small Town",
    "Strange Superstition",
    "Strange Tunnel",
    "Summer Camp ☀️",
    "Sunburn ☀️",
    "Susurrus",
    "Swamp",
    "Sweater Weather",
    "Sweet Insides",
    "Teenagers",
    "Terrible Luck",
    "Thalassophobia ☀️",
    "Thatcher Effect",
    "That's not a deer",
    "Thing from my Nightmare",
    "Tire Swing",
    "Tourist Trap",
    "The Town at Night",
    "Town Square",
    "Toxic",
    "Toilet Papering Prank",
    "Train",
    "Trampoline",
    "Transformation",
    "Trick or Treat",
    "True Crime",
    "Trypophobia",
    "The Undead",
    "Undead Wedding 🌸",
    "Under the Blankets",
    "Underworld",
    "Uninvited Guest",
    "Up in the Attic",
    "Up On The Roof Top ❄️",
    "Upset Stomach",
    "Van Helsing",
    "Vampire",
    "Vampire vs Werewolf",
    "Vandalism",
    "Very Deep Hole",
    "Vintage Halloween",
    "Walking down the road",
    "Warning Signs",
    "Washed Ashore ☀️",
    "Waterslide ☀️",
    "Well",
    "What is the Neighbor Hiding?",
    "What's on TV?",
    "Where do you go when you die?",
    "Wicked Wind",
    "Wide Eyed",
    "The Wild Hunt",
    "Wildlife",
    "Witches Gathering",
    "Witches Hat",
    "Workout",
    "Yeren 🌸",
    "Yeti ❄️",
    "Yokai",
    "You're not going to believe what I found!",
    "Your Psychic Friend",
    "Yowie ☀️",
    "Zoo"
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n]
}
