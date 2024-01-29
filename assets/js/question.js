//store questions for the quiz in here
const question = [
  [
    'What was the original name of Mickey Mouse?',
    'The Rat',
    'Marvin Mouse',
    'Mortimer Mouse',
    'Marshall Mouse',
    'Mortimer Mouse'
    ],
    [
    'What is the next line for American Pie? Bye, bye Miss American Pie _________',
    'Drove my Chevy to the levee',
    'I don’t want to see you again',
    'Good Luck to you',
    'I am hitting the road',
    'Drove my Chevy to the levee'
    ],
    [
    'How would Groot answer this question?',
    'YO homie whats up!',
    'Mark is the bomb yo!',
    'Groot I am young padawan',
    'I am groot',
    'I am groot'
    ],
    [
    'Which animal can be seen on the Porsche logo?',
    'Cougar',
    'Horse',
    'Dog',
    'Cheetah',
    'Horse'
    ],
    [
    'Which of the following is NOT scientifically considered a fruit?',
    'Broccoli',
    'Pumpkin',
    'Pear',
    'Tomato',
    'Broccoli'
    ],
    [
    'Which planet is known as the morning star, as well as the evening star?',
    'Saturn',
    'Jupiter',
    'Venus',
    'Mars',
    'Venus'
    ],
    [
    'What colour skin does a polar bear have?',
    'White',
    'Black',
    'Pink',
    'Gray',
    'Black'
    ],
    [
    'This region, famous for its wines, only produces 4% of California’s wines. What is the name of this region?',
    'Snake River Valley',
    'Sonoma',
    'Los Carneros',
    'Napa Valley',
    'Napa Valley'
    ],
    [
    'Which country flag, nicknamed The Maple Leaf consists of a red field with a white square and features a red maple leaf at its center?',
    'Turkey',
    'Vietnam',
    'Canada',
    'Colombia',
    'Canada'
    ],
    [
    'Henry John Heinz founded a company specializing in the production of which food product?',
    'Ketchup',
    'Mustard',
    'Mayonnaise',
    'Relish',
    'Ketchup',
    ],
    [
    'The name of which game is derived from the Swahili word which means ‘to build’?',
    'Lego',
    'Jenga',
    "K'Nex",
    'Kepla',
    'Jenga',
    ],
    [
    'What popular beverage once contained cocaine?',
    'Powerade',
    'Schweppes',
    'Dr Pepper',
    'Coca-Cola',
    'Coca-Cola'
    ],
    [
    'Which is the largest food and drink company in the world?',
    'Pepsi',
    'Nestle',
    'Coca-Cola',
    'Kellogg Company',
    'Nestle'
    ],
    [
    'In the movie Finding Nemo, which country has Nemo been taken to?',
    'Australia',
    'England',
    'Japan',
    'Australia',
    'New Zealand',
    'Australia'
    ],
    [
    'In Jungle Book what is the name of bear?',
    'Baloo',
    'Dabloo',
    'Chang',
    'Mushu',
    'Baloo'
    ],
    [
    'A Blue Whale has a heart roughly the size of a what?',
    'Basketball',
    'Grapefruit',
    'Peanut',
    'VW Beetle',
    'VW Beetle'
    ],
    [
    'Who sings Poker Face?',
    'Lady Gaga',
    'Madonna',
    'Taylor Swift',
    'Lady Gaga',
    'Kelly Clarkson',
    'Lady Gaga'
    ],
    [
    'What did Aladdin steal in the marketplace at the beginning of Aladdin?',
    'Apple',
    'Bread',
    'Rice',
    'Gold',
    'Bread'
    ],
    [
    'Stark Industries is associated with which fictional superhero?',
    'Iron Fist',
    'Hulk',
    'Iron Man',
    'Iron Man'
    ],
    [
    'Which Museum Is Featured In Night at the Museum?',
    'The Louvre',
    'Museum of Natural History',
    'The Smithsonian',
    'National Museum of the American Indian',
    'Museum of Natural History'
    ],
    [
    'How is the Earth protected from the effects of Solar Winds from the Sun?',
    'Gravity',
    'Oxygen',
    'The Colour of the sky',
    'Magnetic Field',
    'Magnetic Field'
    ],
    [
    'A lobster’s teeth are located in which part of its body?',
    'Stomach',
    'Mouth',
    'Claws',
    'Legs',
    'Stomach'
    ],
    [
    'The Aztecs even used cocoa beans as what?',
    'Drugs',
    'Currency',
    'Stress Relievers',
    'Weapon Decorations',
    'Currency'
    ],
    [
    'Mama Mia is based on a song by which Swedish musical act?',
    'Bee Gees',
    'Queen',
    'ABBA',
    'Elton John',
    'ABBA'
    ],
    [
    'What musical features the song If I Were a Rich Man?',
    'The Music Man',
    'My Fair Lady',
    'Annie',
    'Fiddle on the Roof',
    'Fiddler on the Roof'
    ],
    [
    'In Norse mythology, what is Thor the God of?',
    'Thunder',
    'Rain',
    'Dancing',
    'Pie',
    'Thunder'
    ],
    [
    'Who was the second president of the USA?',
    'Thomas Jefferson',
    'John Adams',
    'Benjamin Franklin',
    'George Washington',
    'John Adams'
    ],
    [
    'What is the smallest country in the world?',
    'Tobago',
    'Maldives',
    'Vatican City',
    'Seychelles',
    'Vatican City'
    ],
    [
    'What year did the Chernobyl disaster occur?',
    '1986',
    '1984',
    '1985',
    '1987',
    '1986'
    ],
    [
    'Which athlete has won eight gold medals at a single Olympics?',
    'Lloyd Spooner',
    'Vera Caslavska',
    'Micheal Phelps',
    'Agnes Keleti',
    'Micheal Phelps'
    ],
    [
    'What popular beverage once contained cocaine?',
    'Powerade',
    'Coca-Cola',
    'Schweppes',
    'Dr Pepper',
    'Coca-Cola'
    ],
    [
    'What is the primary ingredient in guacamole?',
    'Avocado',
    'Pineapple',
    'Banana',
    'Tomato',
    'Avocado'
    ],
    [
    'In a game of bingo, which number is traditionally represented by the phrase two little ducks?',
    '11',
    '59',
    '22',
    '14',
    '22',
    ]
    [
    'How many players are on the ice per team in an Ice Hockey game?',
    '8',
    '5',
    '6',
    '7',
    '6'
    ],
    [
    'What is the alcoholic beverage ‘sake’ made of?',
    'Rice',
    'Seafood',
    'Wasabi',
    'Soybeans',
    'Rice',
    'Rice'
    ],
    [
    'Which country does gouda cheese come from?',
    'Netherlands',
    'Denmark',
    'Belgium',
    'Switzerland',
    'Netherlands',
    ]
    [
    'Which of these martial arts has its origins in China?',
    'Karate',
    'Jujitsu',
    'Kung Fu',
    'Krav Maga',
    'Kung Fu'
    ],
    [
    'Worldwide, what is the third most popular drink?',
    'Water',
    'Tea',
    'Coffee',
    'Beer',
    'Beer'
    ]
    
    
    
    
];
//export array so main script can use it
export default {question};