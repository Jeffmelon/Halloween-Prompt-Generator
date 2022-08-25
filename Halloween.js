let promptList = [
    "Convenience Store","Abandoned Building","Haunted House","Amusement Park","Corn Maze","Drive-in Movie","Early In the Morning",
    "Hiking Trail","Diner","By the Lakeside","Creek Monster","Clown","Witches Gathering","Deal with the Devil ","Horror Show Host","Slenderman",
    "Creepy Pastas","Graveyard","Killer","Horror Movie Monster","The Undead","Vampire","Fashionable Werewolf","Early Snow","Library","Punk Kids",
    "Deep in the Forest","Up in the Attic","Button-Eyed Scarecrow","Minotaur","Princess Costume","Pirate Costume","Haunted Video Game",
    "Demented Kids Show","An Ordinary Church","Strange Small Town","Famous Painting Halloween Redraw","Lost in the Woods",
    "Something pretending to be Human","Hiding in the Walls","Missing Posters",'"Where do you go when you die?"',"Alien Encounter","In the Mirror",
    "The Country Fair","Pumpkin Carving",`"I didn't think mermaids would look like this"`,"Strange Moon","Halloween Parade",
    `"Dogs don't cry"`,"Demons","Analog Horror","Creepy Music","Phobias","Sewer Gator","Rat King","Yokai","Pumpkin Spice","Trick or Treat",
    "Cursed Phone Number","Fall Pride","Secret Lair","Murder Mystery","Family Reunion","Little Jersey Devil","Bigfoot","Murder of Crows",
    "Glaring of Cats","Mischief of Rats","Colony of Bats","Mothman","Babysitter","Final Girl","Mask Section","True Crime","Night Owl","Hitchhiker",
    "Thing from my Nightmare",'"Is that racoon getting in the trash again?"',"Foot Prints","The Old Rusty Bunker",'"What is the Neighbor Hiding?"',
    "At the Arcade","What's on TV?","Ouija Board","Possession","Hanging Out",`"That's not a deer"`,"BE NOT AFRAID","Fall Apart",
    "Elevator to Hell","Trypophobia","Sleepover","Halloween Costume","Show n' Tell","Science Experiment","Strange Tunnel","Under the Blankets",
    "Sweater Weather","Glutton","Liminal Space","Star Gazing","Very Deep Hole",
    "Song Title (choose a song that makes you think of fall or halloween)","Podcast","Halloween Decor","Fortune Teller",
    `"You're not going to believe what I found!"`,"Forbidden Knowledge","Plague Doctor","Haunted Painting","Pumpkin Patch","Mascot Costume","Horns",
    "Body Horror","Candy Gore","Man in the Woods","Horror Hotel","Cosmic Horror","Mechanical","Spirals","The Garden","Big Bad Wolf",
    "Campfire Story","Scaredy Cat","Spiders","Randonauting","Deep Underground","Susurrus",
    "Someone right Behind you","Alone","Infection","Mushrooms","Lantern","Old Cartoons","Notebook", "Walking down the road","Town Square",
    "Lantern Light","Warning Signs","Toxic","Eyes","Sharp Teeth","Lighthouse","Witches Hat","Potion Making","Lovecraftian","Bedsheet Ghost","Swamp",
    "Buried Alive","Burned","Stabbing",`"Run Away!"`,`"He's in the house!"`,"Boo!","Creepy Dolls","Black Goat","Fog","Vandalism","Headless",
    "Wicked Wind","Breakfast","Mausoleum","Playground","Monstrous Mutation","Possession","Silent Stalker","Foreign Monsters",
    "Poltergeist Prankster","Murder Mystery","Childhood Monster","Invader","Apocalypse","Fall Fairytale","Farm","Train","Ghost Ship","Cobwebs",
    "Prize Winning Pumpkin","The Projectionist"
]

function random(prompts) {
    let n = Math.floor(Math.random() * (prompts.length))
    console.log(n)
    document.getElementById("prompt").innerHTML=prompts[n]
}
