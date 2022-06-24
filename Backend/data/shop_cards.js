const shop_cards = [
  {
    id: 1,
   image:
      "https://user-images.githubusercontent.com/60150901/170776818-fdbbf6f3-042c-4e2e-8c70-ceb0a74eaea7.jpg",
    title: "A Burning",
    author: "Colum McCann",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 2,
    image:
      "https://user-images.githubusercontent.com/60150901/170776830-f69597d2-a6cc-4ddf-b595-ca3f661a5b82.jpg",
    title: "The Scapegracers",
    author: "Hannah Clarke",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 3,
    image:
      "https://user-images.githubusercontent.com/60150901/170776844-df026a2b-d0d7-4b6e-b4be-f2035a628f60.jpg",
    title: "Lobizona",
    author: "Romina Garber",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 4,
    image:
      "https://user-images.githubusercontent.com/60150901/170776870-c617c4bf-e49c-48bd-8caf-dc434c50f77f.jpg",
    title: "Grown",
    author: "Tiffany Jackson",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 5,
    image:
      "https://user-images.githubusercontent.com/60150901/170776907-71ec0603-3dbf-42bd-bcb0-0c11100ea394.jpg",
    title: "The Beast's Heart",
    author: "Leife Shallcross",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 6,
    image:
      "https://user-images.githubusercontent.com/60150901/170776915-0d4e3ec9-ead1-4e9f-b501-24747ec81c11.jpg",
    title: "Eat A Peach",
    author: "David Chang",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 7,
    image:
      "https://user-images.githubusercontent.com/60150901/170776946-88076f4f-cc1c-485a-aea7-2545940eb0a7.jpg",
    title: "Sad Janet",
    author: "Lucie Britsch",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 8,
    image:
      "https://user-images.githubusercontent.com/60150901/170776958-5dfce2a1-8be4-445d-80d3-72dbfa896495.jpg",
    title: "The Knockout Queen",
    author: "Rufi Thorpe",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 9,
    image:
      "https://user-images.githubusercontent.com/60150901/170776961-e4ec127e-f338-4649-821b-9fb86a8f791a.jpg",
    title: "Piranesi",
    author: "Susanna Clarke",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 10,
    image:
      "https://user-images.githubusercontent.com/60150901/170776963-50a444ac-a664-4889-9b87-559e11577f41.jpg",
    title: "Each Of Us A Desert",
    author: "Mark Oshiro",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 11,
    image:
      "https://user-images.githubusercontent.com/60150901/171051822-de826d1b-bef1-40f4-b38f-915b2a50e829.jpg",
    title: "Digital Mind",
    author: "Martin Amundsen",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 12,
    image:
      "https://user-images.githubusercontent.com/60150901/171051821-e6f49c2f-4e35-4aea-a559-34f150042425.jpg",
    title: "Way Of The Nameless",
    author: "Graham Douglas",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 13,
    image:
      "https://user-images.githubusercontent.com/60150901/171051813-055977ea-96eb-43c1-bba4-ad12365262fe.jpg",
    title: "Made To Impress",
    author: "Andrew Cris",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 14,
    image:
      "https://user-images.githubusercontent.com/60150901/171051812-e4b53507-667a-46ec-ac1e-da13e210581d.jpg",
    title: "Those Eyes",
    author: "Raymond Beckham",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 15,
    image:
      "https://user-images.githubusercontent.com/60150901/171051811-22dbe993-64e2-49d5-90df-bc792d28fc69.jpg",
    title: "The Poison Killer",
    author: "Julie Martinez",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 16,
    image:
      "https://user-images.githubusercontent.com/60150901/171051810-3a892453-4692-46ec-a22a-938a6c243e78.jpg",
    title: "Reckoning",
    author: "Pete Aldin",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 17,
    image:
      "https://user-images.githubusercontent.com/60150901/171051805-1a08f0a9-d873-4fe1-ad11-90aeb274210d.jpg",
    title: "A Quiet Place",
    author: "Michael Chopper",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 18,
    image:
      "https://user-images.githubusercontent.com/60150901/171051809-4bbd2561-a771-48b1-ac57-57bb6fec49e4.jpg",
    title: "She Said Three Said",
    author: "David Lyons",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 19,
    image:
      "https://user-images.githubusercontent.com/60150901/170776844-df026a2b-d0d7-4b6e-b4be-f2035a628f60.jpg",
    title: "Lobizona",
    author: "Romina Garber",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 20,
    image:
      "https://user-images.githubusercontent.com/60150901/170776946-88076f4f-cc1c-485a-aea7-2545940eb0a7.jpg",
    title: "Sad Janet",
    author: "Lucie Britsch",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 21,
    image:
      "https://user-images.githubusercontent.com/60150901/170776958-5dfce2a1-8be4-445d-80d3-72dbfa896495.jpg",
    title: "The Knockout Queen",
    author: "Rufi Thorpe",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id:22,
    image:
      "https://user-images.githubusercontent.com/60150901/170776830-f69597d2-a6cc-4ddf-b595-ca3f661a5b82.jpg",
    title: "The Scapegracers",
    author: "Hannah Clarke",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 23,
    image:
      "https://user-images.githubusercontent.com/60150901/171051821-e6f49c2f-4e35-4aea-a559-34f150042425.jpg",
    title: "Way Of The Nameless",
    author: "Graham Douglas",
    price: (Math.round(Math.random() * 50)+25),
  },
  {
    id: 24,
    image:
      "https://user-images.githubusercontent.com/60150901/171051810-3a892453-4692-46ec-a22a-938a6c243e78.jpg",
    title: "Reckoning",
    author: "Pete Aldin",
    price: (Math.round(Math.random() * 50)+25),
  },
];

module.exports= shop_cards;
