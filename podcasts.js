const podcasts = [
  {
    episode: "74: How do I center a div?",
    image: "https://i.scdn.co/image/ab67656300005f1fe042c6d62fc79842355f3e51",
    title: "The CSS Podcast",
    date: "Oct 2023",
    duration: "17 min 1 sec",
  },
  {
    episode: "75: Why isn't percentage working here?",
    image: "https://i.scdn.co/image/ab67656300005f1fe042c6d62fc79842355f3e51",
    title: "The CSS Podcast",
    date: "Nov 2023",
    duration: "15 min 4 sec",
  },
  {
    episode: "76: Why is my animation glitching?",
    image: "https://i.scdn.co/image/ab67656300005f1fe042c6d62fc79842355f3e51",
    title: "The CSS Podcast",
    date: "Nov 2023",
    duration: "25 min 49 sec",
  },
  {
    episode: "77: Why do I have layout shift?",
    image: "https://i.scdn.co/image/ab67656300005f1fe042c6d62fc79842355f3e51",
    title: "The CSS Podcast",
    date: "Feb 2024",
    duration: "11 min 29 sec",
  },
];

function returnPodcastHtml(data) {
  let episode =
    data.episode.length > 30
      ? data.episode.substring(0, 27) + "..."
      : data.episode;
  return `
  <div class="podcast">
              <div class="thumbnail">
                <img src="https://i.scdn.co/image/ab67656300005f1fe042c6d62fc79842355f3e51" alt="">
                <div class="play-btn">
                  <img src="./images/play-icon-green.svg" alt="">
                </div>
              </div>
              <div class="info">
              <div class="episode">${episode}</div>
              <div class="title">${data.title}</div>
              <div class="date-duration">
              <span class="date">${data.date}</span>
              <span> &nbsp; . &nbsp; </span>
              <span class="duration">${data.duration}</span>
              </div>
            </div>
            <div class="menu">
              <img src="./images/three-dots.svg" alt="">
              <ul class="dropdown">
              <li>Play Now</li>
              <li>Add to Queue</li>
              <li>Add to favorites</li>
              <li>Get Info</li>
              </ul>
            </div>
            </div>`;
}

export { podcasts, returnPodcastHtml };
