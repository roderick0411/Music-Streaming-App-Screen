const songs = [
  {
    id: "1",
    image: "https://i.scdn.co/image/ab67616d00004851d5f4378b1ffc9119fdc7306d",
    title: "Sajni",
    artist: "Ram, Sampath, Arijit Singh, Prashant Pandey",
    duration: 195,
  },
  {
    id: "2",
    image: "https://i.scdn.co/image/ab67616d00004851250d91f9b9c3918c668e167c",
    title: "Can't help Falling in Love",
    artist: "Haley Reinhart",
    duration: 195,
  },
  {
    id: "3",
    image: "https://i.scdn.co/image/ab67616d00004851acebb58ea70a6e5ff1c4d261",
    title: "July (feat. Leon Bridges)",
    artist: "Noah Cyrus, Leon Bridges",
    duration: 195,
  },
  {
    id: "4",
    image: "https://i.scdn.co/image/ab67616d00004851c6bfaf942ed981d5c4c922e4",
    title: "You're Gonna Line Foreven in Me",
    artist: "John Mayer ",
    duration: 253,
  },
  {
    id: "5",
    image:
      "https://m.media-amazon.com/images/I/61zFYsbDABL._SX472_SY472_BL0_QL100_.jpg",
    title: "A Thousand Miles",
    artist: "Vanessa Carlton",
    duration: 259,
  },
  {
    id: "6",
    image: "https://i.scdn.co/image/ab67616d00004851fb11b9cceabfa9a40ba3f720",
    title: "Make You Feel My Love",
    artist: "Adele",
    duration: 165,
  },
  {
    id: "7",
    image:
      "https://m.media-amazon.com/images/I/51fq1OUPrVL._SX284_SY160_BL0_QL100_.jpg",
    title:
      "Layla (Acoustic; Live at MTV Unplugged, Bray Film Studios, Windsor, England, UK, 1/16/1992; 1999 Remaster)",
    artist: "Eric Clapton",
    duration: 215,
  },
  {
    id: "8",
    image: "https://i.scdn.co/image/ab67616d00004851e44963b8bb127552ac761873",
    title: "Don't Cry (Alternate Lyrics / 2022 Remaster)",
    artist: "Guns N' Roses",
    duration: 173,
  },
  {
    id: "9",
    image:
      "https://m.media-amazon.com/images/I/51QVTaj8JNL._SX472_SY472_BL0_QL100_.jpg",
    title: "Pehle Bhi Main",
    artist: "Vishal Mishra & Raj Shekhar",
    duration: 243,
  },
  {
    id: "10",
    image:
      "https://m.media-amazon.com/images/I/61pId5QmuDL._SX472_SY472_BL0_QL100_.jpg",
    title: "Agar Tum Saath Ho",
    artist: "Alka Yagnik, Arijit Singh, A. R. Rahman & Irshad Kamil",
    duration: 218,
  },
  {
    id: "11",
    image:
      "https://m.media-amazon.com/images/I/51EoC9H8juL._SX472_SY472_BL0_QL100_.jpg",
    title: "Vida Karo",
    artist: "Arijit Singh, Jonita Gandhi, A. R. Rahman & Irshad Kamil",
    duration: 199,
  },
  {
    id: "12",
    image:
      "https://m.media-amazon.com/images/I/51Jci+B0jAL._SX472_SY472_BL0_QL100_.jpg",
    title: "Satranga",
    artist: "Shreyas Puranik, Arijit Singh & Siddharth-Garima",
    duration: 213,
  },
  {
    id: "13",
    image:
      "https://m.media-amazon.com/images/I/61xKijepNWS._SX472_SY472_BL0_QL100_.jpg",
    title: "You're Beautiful",
    artist: "James Blunt",
    duration: 217,
  },
];

class Song {
  constructor(obj) {
    this.id = obj.id;
    this.image = obj.image;
    this.title = obj.title;
    this.artist = obj.artist;
    this.duration = obj.duration;
    this.playing = false;
  }

  createSongCard() {
    let title =
      this.title.length > 23 ? this.title.substring(0, 20) + "..." : this.title;
    let artist =
      this.artist.length > 23
        ? this.artist.substring(0, 20) + "..."
        : this.artist;
    return `
      <div class="song-card ${this.id}" data-id="${this.id}">
        <div class="index-or-icon">
          <span class="index">${Number(this.id)}</span>
          <div class="play">
          <img src="./images/play-triangle.svg" alt="">
          </div>
        </div>
        <div class="thumbnail">
          <img src="${this.image}" alt="">
        </div>
        <div class="details">
          <div class="title">${title}</div>
          <div class="artist">${artist}</div>
        </div>
        <div class="heart-icon">
          <img src="./images/heart-svg.svg" alt="">
        </div>
      </div>`;
  }

  insertPlayingIcon() {
    let title =
      this.title.length > 30 ? this.title.substring(0, 27) + "..." : this.title;
    let artist =
      this.artist.length > 30
        ? this.artist.substring(0, 27) + "..."
        : this.artist;
    let song = document.querySelector(`.song-card[data-id="${this.id}"]`);
    let iconHtml = `
    <span class="play-animation">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </span>`;
    song.querySelector(".index-or-icon").innerHTML = iconHtml;
    this.playing = true;
    let player = document.querySelector(".player");
    if (player.classList.contains("hidden")) {
      player.classList.remove("hidden");
    }
    player
      .querySelector(".info-and-icons .thumbnail img")
      .setAttribute("src", this.image);
    player.querySelector(".info .title").textContent = title;
    player.querySelector(".info .artist").textContent = artist;
  }

  removePlayingIcon() {
    let song = document.querySelector(`.song-card[data-id="${this.id}"]`);
    let iconHtml = `
    <span class="index">${Number(this.id)}</span>
    <div class="play">
      <img src="./images/play-triangle.svg" alt="">
    </div>`;
    song.querySelector(".index-or-icon").innerHTML = iconHtml;
  }
}

function findSongID(event) {
  let songCardID = event.target.closest(".song-card").getAttribute("data-id");
  return songCardID;
}

const songList = songs.map((song) => new Song(song));

export { songList, findSongID };
