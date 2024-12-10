const stations = [
  {
    title: "Rock",
    image:
      "https://t.scdn.co/media/derived/rock_9ce79e0a4ef901bbd10494f5b855d3cc_0_0_274_274.jpg",
  },
  {
    title: "Pop",
    image:
      "https://t.scdn.co/media/derived/pop-274x274_447148649685019f5e2a03a39e78ba52_0_0_274_274.jpg",
  },
  {
    title: "R&B",
    image:
      "https://t.scdn.co/media/derived/r-b-274x274_fd56efa72f4f63764b011b68121581d8_0_0_274_274.jpg",
  },
  {
    title: "Jazz",
    image: "https://t.scdn.co/images/568f37f1cab54136939d63bd1f59d40c",
  },
  {
    title: "Blues",
    image: "https://t.scdn.co/images/6fe5cd3ebc8c4db7bb8013152b153505",
  },
  //   {
  //     title: "Funk & Disco",
  //     image: "https://t.scdn.co/images/f4f0987fcab446fcaa7173acb5e25701.jpeg",
  //   },
];

const moods = [
  { mood: "Romantic", image: "./images/love-songs.jpg" },
  { mood: "Travel", image: "./images/travel-songs.jpg" },
  { mood: "Workout", image: "./images/workout-songs.jpg" },
];

const indiaBest = [
  {
    title: "Punjabi 101",
    image: "https://i.scdn.co/image/ab67706f00000002870b0d51f53ceffcd22e041e",
    description: "Ultimate 101 Punjabi Hits with Sidhu Moose Wala",
  },
  {
    title: "RADAR India",
    image: "https://i.scdn.co/image/ab67706f00000002d9fc1f0d80cbc9712f73a884",
    description:
      "Most exciting artists from the Indian Indie scene. Cover: RANJ x Clifr",
  },
  {
    title: "Bollywood Central",
    image: "https://i.scdn.co/image/ab67706f00000002efcd35fd64a73060bb6605e4",
    description:
      "Bollywood Central, jab baje toh seedha dil ke centre mein lage ❤️ Cover - Animal",
  },
  {
    title: "Indie India",
    image: "https://i.scdn.co/image/ab67706f00000002e6f738ef4ba74a022da08c31",
    description: "Best of the Indian Indie scene. Cover - Anuv Jain",
  },
  {
    title: "I-Pop Superhits",
    image: "https://i.scdn.co/image/ab67706f00000002f2fe6417d441e2f4dc1aa0ed",
    description:
      "Biggest hits from your favourite I-Pop stars. Cover - Sachet-Parampara",
  },
];

const onlyForYou = [
  {
    title: "Pop Shots",
    image: "https://i.scdn.co/image/ab67706f00000002962d7b56a0d3ee250ced2436",
    description: "All your pop favorites! Cover: Sia",
  },
  {
    title: "Legends of Indie India",
    image: "https://i.scdn.co/image/ab67706f00000002c2418b9f66b412b37bc39743",
    description:
      "Prominent Indian independent music creators. Cover - Lucky Ali",
  },
  {
    title: "Love and Melancholy",
    image: "https://i.scdn.co/image/ab67706f000000025abbf123fbee38adf6123059",
    description:
      "Most exciting artists from the Indian Indie scene. Cover: RANJ x Clifr",
  },
  {
    title: "Existential feels",
    image: "https://i.scdn.co/image/ab67706f00000002c805a1e460776019a1570ad9",
    description: "Music to give you company for those random blues",
  },
  {
    title: "Hot Hits India",
    image: "https://i.scdn.co/image/ab67706f00000002cacf8be864d0b18e5a54670c",
    description: "The hottest tracks in India. Cover: Taylor Swift",
  },
];

function returnStation(data) {
  let station = document.createElement("div");
  station.classList.add("station");
  let figure = document.createElement("figure");
  let image = document.createElement("img");
  image.setAttribute("src", data.image);
  let caption = document.createElement("figcaption");
  caption.textContent = data.title;
  figure.appendChild(image);
  figure.appendChild(caption);
  station.appendChild(figure);
  return station;
}

function returnMood(data) {
  let moodDiv = document.createElement("div");
  moodDiv.classList.add("mood-div");
  let mood = document.createElement("div");
  let title = document.createElement("div");
  mood.classList.add("mood");
  title.classList.add("title");
  title.innerHTML = data.mood;
  mood.style.backgroundImage = `url("${data.image}")`;
  moodDiv.appendChild(mood);
  moodDiv.appendChild(title);
  return moodDiv;
}

function returnChartsCard(data) {
  let descriptionText =
    data.description.length > 40
      ? data.description.substring(0, 37) + "..."
      : data.description;
  let chartDiv = document.createElement("div");
  chartDiv.classList.add("chart-div");
  let thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");
  let img = document.createElement("img");
  img.setAttribute("src", data.image);
  thumbnail.appendChild(img);
  let play = document.createElement("div");
  play.classList.add("play-btn");
  let playImg = document.createElement("img");
  playImg.setAttribute("src", "./images/play-icon-green.svg");
  play.appendChild(playImg);
  thumbnail.appendChild(img);
  thumbnail.appendChild(play);
  chartDiv.appendChild(thumbnail);
  let title = document.createElement("div");
  title.classList.add("title");
  title.innerHTML = data.title;
  chartDiv.appendChild(title);
  let description = document.createElement("div");
  description.classList.add("description");
  description.innerHTML = descriptionText;
  chartDiv.appendChild(description);
  return chartDiv;
}

export {
  stations,
  returnStation,
  moods,
  returnMood,
  indiaBest,
  onlyForYou,
  returnChartsCard,
};
