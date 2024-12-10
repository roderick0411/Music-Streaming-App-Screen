import { songList } from "./songs.js";

const artists = [
  {
    id: "1",
    name: "Sona Mohapatra",
    thumbnail:
      "https://i.scdn.co/image/ab676161000051746d4442e1bec66c122220070d",
    poster: "https://i.scdn.co/image/ab67618600001016203f8e34ff7ed125ea8ef946",
    monthlyListeners: "3,456,704",
    songs: [
      {
        id: "1",
        title: 'Ambarsariya"',
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e029701faf1c34cc355fd3cd3c0",
        timesPlayed: "66,521,393",
        duration: "4:08",
      },
      {
        id: "2",
        title: "Naina",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e023b37f6de72015eefce8ee5d3",
        timesPlayed: "58,264,376",
        duration: "3:45",
      },
      {
        id: "3",
        title: "Jiya Lage Na",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02e8acd7446270164f4806f9d2",
        timesPlayed: "6,430,826",
        duration: "4:36",
      },
      {
        id: "4",
        title: "Rupaiyya",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e021fa83c77709eda4a0ecb690c",
        timesPlayed: "1,958,769",
        duration: "4:20",
      },
      {
        id: "5",
        title: "Beda Paar",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851f68efc7b536d5bfee4cf24ff",
        timesPlayed: "168,513",
        duration: "2:26",
      },
    ],
  },
  {
    id: "2",
    name: "Finneas",
    thumbnail:
      "https://i.scdn.co/image/ab676161000051740c56e1a2c14efda30c57b98e",
    poster: "https://i.scdn.co/image/ab676186000010165216bcb0a621e8e8e67c3220",
    monthlyListeners: "4,046,194",
    songs: [
      {
        id: "1",
        title: "Till Forever Falls Apart",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02639c6811b5d0c6cfb145de3a",
        timesPlayed: "313,786,799",
        duration: "3:42",
      },
      {
        id: "2",
        title: "Let's Fall in Love for the Night",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02500f0405c1d3feb14d62849c",
        timesPlayed: "432,792,217",
        duration: "3:10",
      },
      {
        id: "3",
        title: "Break My Heart Again",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e023e21a8c14f533edf876be407",
        timesPlayed: "274,671,378",
        duration: "3:57",
      },
      {
        id: "4",
        title: "Hate to be Lame",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02d370fdc4dbc47778b9b667c3",
        timesPlayed: "60,274,773",
        duration: "2:36",
      },
      {
        id: "5",
        title: "I Lost a Friend",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02500f0405c1d3feb14d62849c",
        timesPlayed: "147,779,123",
        duration: "3:57",
      },
    ],
  },
  {
    id: "3",
    name: "Mohit Chauhan",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000517416691117e2ba803946b203ba",
    poster: "https://i.scdn.co/image/ab67618600001016fc17b6596d3145f6d9372f72",
    monthlyListeners: "18,220,815",
    songs: [
      {
        id: "1",
        title: "Matargashti",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851da50894e074ecd5ce61de0a1",
        timesPlayed: "27,520,703",
        duration: "5:28",
      },
      {
        id: "2",
        title: "Masakali",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851f7c6e0a439f01c38bac5730c",
        timesPlayed: "41,520,741",
        duration: "4:28",
      },
      {
        id: "3",
        title: "Ilahi (Reprise)",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851707ea5b8023ac77d31756ed4",
        timesPlayed: "27,520,703",
        duration: "3:34",
      },
      {
        id: "4",
        title: "Boondein",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048516e9fed2a5034e61111d785b1",
        timesPlayed: "13,920,623",
        duration: "4:50",
      },
      {
        id: "5",
        title: "Pehli Baar Mohabbat",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851697900b24eb6e48a78923d98",
        timesPlayed: "47,280,049",
        duration: "5:21",
      },
    ],
  },
  {
    id: "4",
    name: "Arctic Monkeys",
    thumbnail:
      "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
    poster: "https://i.scdn.co/image/ab67618600001016ef22c74e18c2002d4c1d6402",
    monthlyListeners: "50,468,662",
    songs: [
      {
        id: "1",
        title: "Do I Wanna Know?",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163",
        timesPlayed: "2,139,968,691",
        duration: "4:32",
      },
      {
        id: "2",
        title: "Fluorescent Adolescent",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02b1f8da74f225fa1225cdface",
        timesPlayed: "837,594,703",
        duration: "3:03",
      },
      {
        id: "3",
        title: "I Wanna Be Yours",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048514ae1c4c5c45aabe565499163",
        timesPlayed: "2,027,423,813",
        duration: "3:03",
      },
      {
        id: "4",
        title: "Suck It and See",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851e39741db1e2a37675cb53723",
        timesPlayed: "98,353,293",
        duration: "3:45",
      },
      {
        id: "5",
        title: "Cornerstone",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851f65d720a5d70dbb93e96d528",
        timesPlayed: "150,080,029",
        duration: "3:17",
      },
      {
        id: "6",
        title: "Baby I'm Yours",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851fc5f23d71de7ad824565f94c",
        timesPlayed: "168,523,266",
        duration: "2:32",
      },
    ],
  },
  {
    id: "5",
    name: "Olivia Dean",
    thumbnail:
      "https://i.scdn.co/image/ab6761610000517421c1b52c26e9bf7b4d5ccf44",
    poster: "https://i.scdn.co/image/ab676186000010164e8963de09abed14e91dde3a",
    monthlyListeners: "18,220,815",
    songs: [
      {
        id: "1",
        title: "Dive",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02cac9b52107643faf13a7587b",
        timesPlayed: "36,881,469",
        duration: "3:20",
      },
      {
        id: "2",
        title: "Echo",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851b188c6075acdb737375c1f4f",
        timesPlayed: "21,913,037",
        duration: "3:17",
      },
      {
        id: "3",
        title: "Float",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02a67c5c1aa5192977c669a736",
        timesPlayed: "8,373,619",
        duration: "3:13",
      },
      {
        id: "4",
        title: "The Hardest Part",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02cac9b52107643faf13a7587b",
        timesPlayed: "56,373,619",
        duration: "2:56",
      },
      {
        id: "5",
        title: "Ok Love You Bye",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00001e02b05c07b076354a0542c92544",
        timesPlayed: "37,057,355",
        duration: "2:53",
      },
    ],
  },
  {
    id: "6",
    name: "Amy Winehouse",
    thumbnail:
      "https://i.scdn.co/image/ab676161000051742ceb023b10da17590878e88c",
    poster: "https://i.scdn.co/image/ab676186000010162d2ae0de03a95f361fb84f4e",
    monthlyListeners: "18,220,815",
    songs: [
      {
        id: "1",
        title: "Valerie - Live At BBC Radio 1 Live Lounge, London / 2007",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000485176ffb5b5ab045d22c81235c1",
        timesPlayed: "548,907,701",
        duration: "3:53",
      },
      {
        id: "2",
        title: "Our Day Will Come",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048514c896e873306c17847c254e9",
        timesPlayed: "115,586,668",
        duration: "2:49",
      },
      {
        id: "3",
        title: "Stronger Than Me",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851bd8d74b33f8be9a6fef39e54",
        timesPlayed: "120,008,164",
        duration: "3:34",
      },
      {
        id: "4",
        title: "You Know I'm No Good",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000485176ffb5b5ab045d22c81235c1",
        timesPlayed: "462,521,270",
        duration: "3:53",
      },
      {
        id: "5",
        title: "You Sent Me Flying",
        thumbnail:
          "https://i.scdn.co/image/ab67616d0000485114655886a5d7ef8a606e0c1f",
        timesPlayed: "24,317,764",
        duration: "6:50",
      },
    ],
  },
  {
    id: "7",
    name: "John Mayer",
    thumbnail:
      "https://i.scdn.co/image/ab67616100005174e926dd683e1700a6d65bd835",
    poster: "https://i.scdn.co/image/ab67618600001016e3d6181684c144ce7aa2a129",
    monthlyListeners: "18,220,815",
    songs: [
      {
        id: "1",
        title: "Your Body Is a Wonderland",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048518848d57cbfa7751e028f4dc9",
        timesPlayed: "547,340,023",
        duration: "4:09",
      },
      {
        id: "2",
        title: "New Light",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851779063301154e835a91a35e0",
        timesPlayed: "689,541,023",
        duration: "3:37",
      },
      {
        id: "3",
        title: "You're Gonna Live Forever in Me",
        thumbnail:
          "https://i.scdn.co/image/ab67616d00004851c6bfaf942ed981d5c4c922e4",
        timesPlayed: "234,323,416",
        duration: "3:10",
      },
      {
        id: "4",
        title: "Who Says",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048511e3dbe4453ed61633c472fbe",
        timesPlayed: "237,285,162",
        duration: "2:55",
      },
      {
        id: "5",
        title: "Daughters",
        thumbnail:
          "https://i.scdn.co/image/ab67616d000048511a4c7c7e6eeaee67c9e8ce71",
        timesPlayed: "189,956,657",
        duration: "3:57",
      },
    ],
  },
];

class Artist {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.thumbnail = obj.thumbnail;
    this.poster = obj.poster;
    this.monthlyListeners = obj.monthlyListeners;
    this.songs = obj.songs;
  }

  artistThumbnailElement() {
    let artist = document.createElement("figure");
    artist.classList.add("artist");
    artist.setAttribute("data-id", this.id);
    artist.innerHTML = `
    <img src="${this.thumbnail}" alt="">
    <figcaption>${this.name}</figcaption>`;
    artist.addEventListener("click", () => {
      document.querySelector("header").scrollIntoView({ behavior: "smooth" });
      this.renderArtistSection();
    });
    return artist;
  }

  renderArtistThumbnail() {
    let artistsDiv = document.querySelector(".artists");
    artistsDiv.appendChild(this.artistThumbnailElement());
  }

  renderArtistSection() {
    let topVids = document.querySelector(".recommendation .top-vids-container");
    if (!topVids.classList.contains("hidden")) {
      topVids.classList.add("hidden");
    }
    let artistSection = document.querySelector(
      ".recommendation .artist-section"
    );
    if (artistSection.classList.contains("hidden")) {
      artistSection.classList.remove("hidden");
    }
    artistSection.innerHTML = this.artistSectionHtml();
    let popularSongs = document.querySelector(".popular-songs");
    this.songs.forEach((song) =>
      popularSongs.insertAdjacentHTML("beforeend", this.renderSong(song))
    );
    document.querySelectorAll(".popular-songs .song").forEach((song) => {
      song.addEventListener("click", (event) => {
        let artistID = event.target
          .closest(".popular-songs")
          .getAttribute("data-id");
        console.log(`Artist ID: ${artistID}`);
        let songID = event.target.closest(".song").getAttribute("data-id");
        console.log(`Song ID: ${songID}`);
        let artist = artistsList.find((artist) => artist.id == artistID);
        console.log(artistsList);
        console.log(artist);
        artist.removePlayingIcon();
        artist.insertPlayingIcon(songID);
      });
    });
  }

  artistSectionHtml() {
    return `
        <figure class="poster">
            <img src="${this.poster}">
            <figcaption>
              <div class="name">${this.name}</div>
              <div class="monthly-listeners">${this.monthlyListeners} monthly listeners</div>
            </figcaption>
        </figure>
        <div class="play-all">
            <div class="play-icon">
              <img src="./images/play-icon-green.svg" alt="">
            </div>
            <div class="follow-btn">
              Follow
            </div>
            <div class="menu">
              <img src="./images/three-dots.svg" alt="">
            </div>
        </div>
        <div class="popular-songs" data-id="${this.id}">
        </div>`;
  }

  renderSong(info) {
    let title =
      info.title.length > 30 ? info.title.substring(0, 27) + "..." : info.title;
    return `
      <div class="song" data-id="${info.id}">
        <div class="index-or-icon">
          <span class="index">${Number(info.id)}</span>
          <div class="play">
          <img src="./images/play-triangle.svg" alt="">
          </div>
        </div>
        <div class="thumbnail">
          <img src="${info.thumbnail}" alt="">
        </div>
        <div class="info">
          <div class="title">${title}</div>
          <div class="listeners">${info.timesPlayed}</div>
          <div class="plus-sign">
            <img src="./images/plus-sign.svg" alt="">
          </div>
          <div class="duration">${info.duration}</div>
          <div class="menu">
            <img src="./images/three-dots.svg" alt="">
          </div>
        </div>
      </div>
      `;
  }

  removePlayingIcon() {
    let songs = document.querySelectorAll(
      `.popular-songs[data-id="${this.id}"] .song`
    );
    songs.forEach((song) => {
      let songID = song.getAttribute("data-id");
      let iconHtml = `
    <span class="index">${songID}</span>
    <div class="play">
      <img src="./images/play-triangle.svg" alt="">
    </div>`;
      song.querySelector(".index-or-icon").innerHTML = iconHtml;
    });
  }

  insertPlayingIcon(songID) {
    console.log("Inside insertPlayingIcon, this:");
    console.log(this);
    let songObj = this.songs.find((song) => song.id === songID);
    let title =
      songObj.title.length > 30
        ? songObj.title.substring(0, 27) + "..."
        : songObj.title;
    let artist =
      this.name.length > 30 ? this.name.substring(0, 27) + "..." : this.name;
    let song = document.querySelector(
      `.popular-songs[data-id="${this.id}"] .song[data-id="${songID}"]`
    );
    let iconHtml = `
    <span class="play-animation">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </span>`;
    song.querySelector(".index-or-icon").innerHTML = iconHtml;
    songList.forEach((song) => song.removePlayingIcon());
    let player = document.querySelector(".player");
    if (player.classList.contains("hidden")) {
      player.classList.remove("hidden");
    }
    player
      .querySelector(".info-and-icons .thumbnail img")
      .setAttribute("src", songObj.thumbnail);
    player.querySelector(".info .title").textContent = title;
    player.querySelector(".info .artist").textContent = artist;
  }
}

const artistsList = artists.map((artist) => new Artist(artist));

export { artistsList };
