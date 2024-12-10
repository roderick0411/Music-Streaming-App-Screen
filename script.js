import { songList, findSongID } from "./songs.js";
import { videos, TopVideos } from "./top-videos.js";
import { podcasts, returnPodcastHtml } from "./podcasts.js";
import { artistsList } from "./artists.js";
import {
  stations,
  returnStation,
  moods,
  returnMood,
  indiaBest,
  onlyForYou,
  returnChartsCard,
} from "./stations_and_moods.js";

console.log(artistsList);

const videoCarousel = new TopVideos(videos);
videoCarousel.renderVideos();

songList.forEach((element) => {
  let songQue = document.querySelector(".songs-queue");
  songQue.insertAdjacentHTML("beforeend", element.createSongCard());
});
document.querySelectorAll(".song-card").forEach((card) => {
  card.addEventListener("click", (event) => {
    if (!document.querySelector(".artist-section.hidden")) {
      let artistID = document
        .querySelector(".artist-section .popular-songs")
        .getAttribute("data-id");
      artistsList.find((artist) => artist.id == artistID).removePlayingIcon();
    }
    songList.forEach((song) => song.removePlayingIcon());
    let songID = findSongID(event);
    songList.find((song) => song.id === songID).insertPlayingIcon();
  });
});

podcasts.forEach((element) => {
  let podcastContainer = document.querySelector(".podcasts");
  podcastContainer.insertAdjacentHTML("beforeend", returnPodcastHtml(element));
});

artistsList.forEach((artist) => {
  artist.renderArtistThumbnail();
});

stations.forEach((element) => {
  let stationContainer = document.querySelector(".stations");
  stationContainer.appendChild(returnStation(element));
});

moods.forEach((element) => {
  let moodsContainer = document.querySelector(".moods");
  moodsContainer.appendChild(returnMood(element));
});

indiaBest.forEach((element) => {
  let chartsContainer = document.querySelector(".india-best-container .charts");
  chartsContainer.appendChild(returnChartsCard(element));
});

onlyForYou.forEach((element) => {
  let chartsContainer = document.querySelector(
    ".only-for-you-container .charts"
  );
  chartsContainer.appendChild(returnChartsCard(element));
});
