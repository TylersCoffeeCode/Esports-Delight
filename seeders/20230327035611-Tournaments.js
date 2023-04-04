'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seededTournaments = [{
      userId: 120,
      title: 'DOTA 2 INTERNATIONAL',
      date: '04-27-2023',
      content: "The Dota 2 International, often referred to as simply TI, is the most prestigious esports event in the Dota 2 scene. It is an annual tournament organized by Valve Corporation, the developer of Dota 2, where the best Dota 2 teams from around the world compete for a multi-million dollar prize pool. The tournament was first held in 2011, and has since become a staple event in the esports calendar. The Dota 2 International usually takes place in August, and the format of the tournament has evolved over the years. The tournament typically starts with a group stage, where teams are divided into groups and play a round-robin format. The top teams from each group advance to the upper bracket of the main event, while the remaining teams start in the lower bracket. The main event is a double-elimination bracket, where teams play best-of-three series until the grand finals, which is a best-of-five series. The prize pool for the Dota 2 International is largely community-funded, with a portion of the revenue from in-game purchases going towards the prize pool. The prize pool for the 2021 Dota 2 International was over $40 million, making it one of the biggest esports events in history.",
      gameImg: 'https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1678300512',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 120,
      title: 'LPL Spring 2023',
      date: '04-27-2023',
      content: "LPL Spring is one of the biggest League of Legends tournaments in the world. It features top teams from China and runs from January to April each year. The tournament has a double round-robin group stage, with the top eight teams advancing to the playoffs. The winner of LPL Spring qualifies for the Mid-Season Invitational, where they will compete against other regional champions from around the world. The tournament has a massive following in China, with millions of fans tuning in to watch their favorite teams and players compete. LPL Spring is known for its high level of play, exciting matches, and fierce rivalries between the top teams.",
      gameImg: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 120,
      title: 'ESL Challenger Melbourne',
      date: '04-27-2023',
      content: "ESL Challenger Melbourne is an esports tournament that features some of the top teams and players in the Oceanic region. The tournament is hosted by ESL Australia, a branch of the global esports company ESL. The event typically features competitions in popular esports games such as CS:GO, Dota 2, and Rainbow Six Siege, as well as other titles that may vary from year to year. The tournament provides an opportunity for up-and-coming esports teams and players to compete at a high level and potentially qualify for larger events, such as the ESL Pro League or the Intel Extreme Masters. Additionally, it serves as a platform for established teams and players to showcase their skills and compete for prize money and prestige. ESL Challenger Melbourne is typically held annually in Melbourne, Australia, with the exact dates and venues varying from year to year. The event attracts a large audience of esports fans and spectators, both in-person and online through various streaming platforms.",
      gameImg: 'https://assets.tentonhammer.com/articles/attached_images/000/027/603/medium/1200CSGO.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 120,
      title: 'LCS 2023',
      date: '04-27-2023',
      content: "The League of Legends Championship Series (LCS) is the top professional esports league for the popular multiplayer online battle arena game, League of Legends. The LCS is divided into two regional leagues, the LCS North America (LCS NA) and the LCS Europe (LCS EU), and features the best teams from each region competing against one another for a chance to win the title of regional champion and advance to international competitions.The LCS was first established in 2013 as part of Riot Games' efforts to professionalize the esports scene for League of Legends. The league has since grown in popularity and now boasts a strong following of dedicated fans who tune in to watch their favorite teams compete. Each LCS split consists of a regular season, followed by playoffs, and culminates in a regional championship event where the top teams from each region face off against one another. The top teams from each region also have the opportunity to represent their region in international tournaments such as the Mid-Season Invitational and the World Championship, where they compete against other top teams from around the world.",
      gameImg: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/LOL_2560x1440-98749e0d718e82d27a084941939bc9d3',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 120,
      title: 'TEKKEN WORLD TOUR 2023',
      date: '04-27-2023',
      content: "The Tekken World Tour is a global tournament circuit for the fighting game Tekken 7, featuring players from all around the world competing for cash prizes and championship points. The tour is divided into several regions, with each region holding its own set of tournaments throughout the year. The top players from each region then gather at the Tekken World Tour Finals, which is the biggest event of the year and features the best players from around the world battling it out for the title of Tekken World Champion. The tournament is known for its intense matches, high level of competition, and passionate fanbase.",
      gameImg: 'https://cdn-ext.fanatical.com/production/product/1280x720/753730bd-7ba2-479c-bfdf-bac31b72ebea.jpeg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('tournament', seededTournaments)

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tournament')
  }
};
