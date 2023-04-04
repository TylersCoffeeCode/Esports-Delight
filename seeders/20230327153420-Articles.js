'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seededArticles = [{
      userId: 120,
      title: 'CSGO 2 Release Date',
      date: '04-27-2023',
      content: `Counter-Strike 2 is a first-person shooter video game developed by Valve and Hidden Path Entertainment. It is the sequel to Counter-Strike: Global Offensive, and was released for Microsoft Windows in 2023.

      The game features the same basic gameplay as its predecessor, with two teams of five players competing to either plant or defuse a bomb, or eliminate the other team. However, Counter-Strike 2 introduces a number of new features, including a new game mode, new weapons, and new maps.
      
      One of the most significant changes in Counter-Strike 2 is the introduction of a new game mode called "Defuse the Bomb: Safehouse". In this mode, the Terrorist team must plant the bomb in a safehouse, while the Counter-Terrorist team must prevent them from doing so. The safehouse is a large, open area with multiple entrances, making it difficult for the Terrorist team to defend. The Counter-Terrorist team, on the other hand, has a number of advantages, including the ability to call in airstrikes and use special weapons.
      
      Another new feature in Counter-Strike 2 is the introduction of new weapons. These include the M4A1-S, a silenced assault rifle, and the AWP, a powerful sniper rifle. The M4A1-S is a great choice for players who want to take down enemies quietly, while the AWP is perfect for players who want to take out enemies from a distance.
      
      Finally, Counter-Strike 2 also introduces a number of new maps. These include the "Overpass" map, which is set in a city environment, and the "Train" map, which is set in a train yard. The "Overpass" map is a large, open map with multiple routes to the bomb site, making it a good choice for players who like to play aggressively. The "Train" map, on the other hand, is a smaller, more enclosed map, making it a good choice for players who like to play more defensively.
      
      Overall, Counter-Strike 2 is a great sequel to Counter-Strike: Global Offensive. It features new game modes, new weapons, and new maps, all of which make for a more enjoyable experience. If you're a fan of first-person shooters, then you should definitely check out Counter-Strike 2.
      
      Here are some of the reviews of Counter-Strike 2:
      
      "Counter-Strike 2 is a great sequel to one of the most popular first-person shooters of all time. It features new game modes, new weapons, and new maps, all of which make for a more enjoyable experience." - IGN
      "Counter-Strike 2 is a must-have for fans of the first game. It's everything that made the original great, but with even more content and features." - GameSpot
      "Counter-Strike 2 is a great game, but it's not without its flaws. The new game modes are fun, but they can be a bit unbalanced. The new weapons are powerful, but they can be difficult to use. And the new maps are beautiful, but they can be a bit confusing." - PC Gamer
      Overall, Counter-Strike 2 is a great game that is sure to please fans of the first game. It features new game modes, new weapons, and new maps, all of which make for a more enjoyable experience. However, the game is not without its flaws. The new game modes can be a bit unbalanced, the new weapons can be difficult to use, and the new maps can be a bit confusing.`,
      image: 'https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: 'DOTA 2 TI Winners',
      date: '04-27-2023',
      content: `The recent Dota 2 The International winners are Tundra Esports. They won the tournament in 2022, defeating OG in the Grand Finals. Tundra Esports is a professional Dota 2 team from Europe. They were founded in 2019 and have since become one of the top teams in the world. Tundra Esports is known for their aggressive playstyle and their ability to make big plays. They are also known for their strong team chemistry and their ability to work together as a unit.

      Tundra Esports won The International 2022 with a convincing 3-0 victory over OG in the Grand Finals. This was Tundra Esports' first major tournament victory and it is a testament to their hard work and dedication. Tundra Esports is now one of the most successful Dota 2 teams in the world and they are sure to be a force to be reckoned with in the years to come.
      
      Here are some of the players of Tundra Esports:
      
      Oliver "skiter" Lepko
      Leon "Nine" Kirilin
      Neta "33" Shapira
      Martin "Saksa" Sazdov
      Wu "Sneyking" Jingjun
      Tundra Esports is a very talented team with a lot of potential. They are sure to continue to be successful in the future.`,
      image: 'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/3703047/d20ecdc24cb719aba0ed6fcd4c19c6da2673f510.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: "Meet League's Newest Champion",
      date: '03-07-2023',
      content: `Milio is the newest champion to join the League of Legends roster. He is a fire-based enchanter support who is designed to help his allies stay alive and deal damage. Milio's abilities revolve around using fire to heal and shield his allies, as well as to deal damage to his enemies. He is a very versatile champion who can be played in a variety of different ways.

      Milio's passive ability, "Firestarter," causes his basic attacks to deal bonus magic damage and apply a burning effect to his enemies. This burning effect deals additional damage over time and can be stacked multiple times. Milio's Q ability, "Flame Burst," fires a ball of fire that deals damage to all enemies in its path. His W ability, "Healing Flames," heals an ally and applies a shield that absorbs damage. His E ability, "Fire Trail," creates a trail of fire that deals damage to enemies who walk over it. His ultimate ability, "Inferno," summons a ring of fire that deals damage to all enemies in its area.
      
      Milio is a very powerful champion who can be very effective in the right hands. He is a great choice for players who are looking for a support champion who can both heal and deal damage.`,
      image: 'https://i2.wp.com/theriftcrown.com/wp-content/uploads/2023/03/milio-league-of-legends-abilities.jpg?fit=1920%2C1080&ssl=1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: `Tekken 8 King Trailer`,
      date: '03-17-2023',
      content: `The Tekken 8 King trailer was released on March 10, 2023. The trailer shows King in action, using his signature wrestling moves and his powerful King Buster finisher. King is one of the most popular characters in the Tekken series, and fans are excited to see him return in Tekken 8.

      The trailer also shows some of the new features that will be in Tekken 8. These include new stages, new moves, and new characters. The trailer also shows that the game will be using the Unreal Engine 5, which will give the game a more realistic look and feel.
      
      Tekken 8 is scheduled to be released in 2024. Fans are eagerly awaiting the release of the game, and they are sure to be impressed with the new features and the updated graphics.
      
      Here are some of the things that fans are looking forward to in Tekken 8:
      
      The return of King: King is one of the most popular characters in the Tekken series, and fans are excited to see him return in Tekken 8. King is a powerful wrestler who uses his signature moves to defeat his opponents.
      New stages: The trailer shows some of the new stages that will be in Tekken 8. These stages look very impressive, and they will add a new level of excitement to the game.
      New moves: The trailer also shows some of the new moves that will be in Tekken 8. These moves look very powerful, and they will add a new level of depth to the game.
      New characters: The trailer also shows some of the new characters that will be in Tekken 8. These characters look very interesting, and they will add a new level of variety to the game.
      Unreal Engine 5: The trailer also shows that the game will be using the Unreal Engine 5. This engine is very powerful, and it will give the game a more realistic look and feel.
      Overall, the Tekken 8 King trailer looks very impressive. Fans are eagerly awaiting the release of the game, and they are sure to be impressed with the new features and the updated graphics.`,
      image: 'https://www.destructoid.com/wp-content/uploads/2023/03/Tekken8_King_031723.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: `Asus ROG Ally - Steam Deck Competitor`,
      date: '04-3-2023',
      content: `The Asus ROG Ally is a handheld gaming PC that was announced in April 2023. It is powered by an AMD Ryzen 7 6800U processor and an Nvidia GeForce RTX 3060 graphics card. It has a 7-inch, 120Hz display and a 6,000mAh battery. It also has 16GB of RAM and 512GB of storage.

      The Asus ROG Ally is a very powerful handheld gaming PC. It can run most games at 1080p resolution and high settings. It is also very portable, making it a great choice for gamers who want to game on the go.
      
      The Asus ROG Ally is not without its flaws, however. It is quite expensive, and it has a short battery life. It also has a few design flaws, such as a cramped keyboard and a loud fan.
      
      Overall, the Asus ROG Ally is a great handheld gaming PC. It is powerful, portable, and has a great display. However, it is expensive and has a few design flaws.
      
      Here are some of the pros and cons of the Asus ROG Ally:
      
      Pros:
      
      Powerful performance
      Portable design
      Great display

      Cons:
      
      Expensive
      Short battery life
      Some design flaws
      If you are looking for a powerful and portable handheld gaming PC, the Asus ROG Ally is a great option. However, if you are on a budget or are looking for a longer-lasting battery, you may want to consider another option.`,
      image: `https://cdn.videocardz.com/1/2023/04/ASUS-ROG-ALLY-CONSOLE-HERO.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: `Legend of Zelda: Tears of a kingdom`,
      date: '03-27-2023',
      content: `The new Zelda game, called The Legend of Zelda: Tears of the Kingdom, is a sequel to the 2017 game The Legend of Zelda: Breath of the Wild. It was released on May 12, 2023 for the Nintendo Switch.

      The game takes place 100 years after the events of Breath of the Wild. Link awakens from a 100-year slumber to find that Hyrule is in ruins. He sets out on a journey to find Princess Zelda and save Hyrule from Calamity Ganon.
      
      The game features a new open world to explore, new enemies to fight, and new items to use. It also features a new story that is set 100 years after the events of Breath of the Wild.
      
      The game has been praised for its graphics, gameplay, and story. It has been called one of the best games of all time.
      
      Here are some of the things that fans are saying about the new Zelda game:
      
      "The graphics are amazing! The world is so detailed and beautiful."
      "The gameplay is so much fun! I love exploring the world and fighting enemies."
      "The story is so good! I can't wait to see how it ends."
      Overall, the new Zelda game is a great game that is sure to please fans of the series. It has great graphics, gameplay, and story.`,
      image: `https://assets-prd.ignimgs.com/2022/09/14/zelda-tears-of-the-kingdom-button-2k-1663127818777.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: `Beyond the Summit shutting down after 11 whole years`,
      date: '03-25-2023',
      content: `AMD announced the A620 chipset on March 31, 2023, as a more affordable option for users looking to build a PC with a Ryzen 7000-series processor. The A620 is based on the same Zen 4 microarchitecture as the other AM5 chipsets, but it offers a few key differences.

      First, the A620 does not support PCIe 5.0. This means that users will not be able to take advantage of the fastest storage and graphics cards available. However, PCIe 4.0 is still a very fast interface, and it is unlikely that most users will notice the difference.
      
      Second, the A620 has a lower memory speed limit than the other AM5 chipsets. It supports DDR5-4000 memory, while the B650 and X670 chipsets support DDR5-5200 memory. This difference is unlikely to be noticeable for most users, but it may be important for those who are looking for the absolute best performance.
      
      Finally, the A620 has a lower number of USB ports than the other AM5 chipsets. It supports up to 12 USB 3.2 Gen 2 ports, while the B650 and X670 chipsets support up to 24 USB 3.2 Gen 2 ports. This difference is unlikely to be important for most users, but it may be important for those who need a lot of USB ports.
      
      Overall, the AMD A620 is a good option for users who are looking to build a budget-friendly PC with a Ryzen 7000-series processor. It offers good performance and features, but it does have a few limitations.`,
      image: `https://beyondthesummit.tv/bts-social-preview.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: `AMD quietly launches a new AM5 motherboard platform: The A620`,
      date: '04-02-2023',
      content: `On February 25, 2023, Beyond the Summit announced that they would be shutting down their operations. The company, which was founded in 2012, was a leading esports production company and event organizer.

      In a statement, Beyond the Summit co-founder and CEO David "LD" Gorman said that the decision to shut down was "a very difficult one." He cited a number of factors, including the "current economic climate" and the "changing landscape of esports."
      
      "We've been incredibly proud of everything we've accomplished over the past 10 years," Gorman said. "We've had the opportunity to work with some of the best talent in esports, and we've helped to grow the scene in ways we never could have imagined."
      
      Beyond the Summit was best known for its Dota 2 and Super Smash Bros. tournaments. The company also produced a number of other esports events, including Counter-Strike: Global Offensive and Hearthstone tournaments.
      
      Beyond the Summit's closure is a major loss for the esports industry. The company was a pioneer in esports production, and its events were some of the most popular in the world.
      
      The closure of Beyond the Summit is also a sign of the changing landscape of esports. The industry is growing rapidly, but it is also becoming increasingly competitive. With so many companies vying for a piece of the esports pie, it is becoming more difficult for smaller companies to survive.
      
      Despite the challenges facing the esports industry, there is still a lot of potential for growth. The industry is still in its early stages, and there is a lot of room for innovation. With the right companies and the right people, esports has the potential to become one of the biggest sports in the world.
      
      Beyond the Summit may be gone, but its legacy will live on. The company helped to shape the esports industry, and its events will be remembered for years to come.`,
      image: `https://cdn.videocardz.com/1/2023/03/ASUS-A620-MOBO-HERO.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 120,
      title: `Linus Tech Tips got hacked`,
      date: '04-02-2023',
      content: `Linus Tech Tips, a popular YouTube channel with over 15 million subscribers, was hacked on March 23, 2023. The hackers gained access to the channel's account and livestreamed a fake cryptocurrency scam video. The video was removed shortly after it was posted, but not before it was viewed by thousands of people.

      The hackers also changed the channel's name and profile picture to make it look like it was run by Tesla. They also deleted several of the channel's most popular videos.
      
      Linus Sebastian, the founder and host of Linus Tech Tips, addressed the hack in a video posted on March 24, 2023. He said that the hackers were able to gain access to the channel's account by exploiting a vulnerability in YouTube's system. He also said that YouTube is working to fix the vulnerability and that they are investigating the hack.
      
      Sebastian said that he was "very sorry" for the inconvenience the hack caused and that he is "working hard to make sure it doesn't happen again." He also said that he is "grateful" to his fans for their support.
      
      The hack of Linus Tech Tips is the latest in a string of high-profile hacks that have targeted YouTube channels. In January 2023, the channels of several popular YouTubers, including PewDiePie and MrBeast, were hacked and used to livestream cryptocurrency scams.
      
      The hacks of Linus Tech Tips and other YouTube channels are a reminder that even the most popular websites are vulnerable to attack. It is important to be aware of the risks of online security and to take steps to protect your accounts.`,
      image: `https://cdn.vox-cdn.com/uploads/chorus_asset/file/24533874/My_Channel_Was_Deleted_Last_Night_____My_Channel_Was_Deleted_Last_Night_2023_3_24_938.461_1280p_streamshot.png`,
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    await queryInterface.bulkInsert('article', seededArticles)
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
