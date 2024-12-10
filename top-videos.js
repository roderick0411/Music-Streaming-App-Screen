const videos = [
  {
    id: "1",
    image: "https://m.media-amazon.com/images/I/41e2MuFgAYL.jpg",
    title: "A.R. Rahman",
  },
  {
    id: "2",
    image: "https://m.media-amazon.com/images/I/318LhTSA4TL.jpg",
    title: "Shankar Ehsaan Loy",
  },
  {
    id: "3",
    image: "https://m.media-amazon.com/images/I/31-dd6g4xjL.jpg",
    title: "Ed Sheeran",
  },
  {
    id: "4",
    image: "https://m.media-amazon.com/images/I/41Am0z3pg7L.jpg",
    title: "Rashmeet Kaur",
  },
  {
    id: "5",
    image: "https://m.media-amazon.com/images/I/31xuwhop5NL.jpg",
    title: "Munawar Faruqui",
  },
];

class TopVideos {
  constructor(videos) {
    this.videos = videos;
    this.start = 0;
  }

  videoElement(data) {
    let vid = document.createElement("div");
    vid.classList.add("vid");
    let img = document.createElement("img");
    img.setAttribute("src", data.image);
    vid.appendChild(img);
    return vid;
  }

  renderVideos() {
    videos.slice(this.start, 3).forEach((element) => {
      let carousel = document.querySelector(".top-videos");
      carousel.appendChild(this.videoElement(element));
    });
    // let carousel = document.querySelector(".top-videos");
    // let carouselWidth = carousel.offsetWidth;
    // document
    //   .querySelectorAll(".vid")
    //   .forEach((vid) => (vid.style.width = `${carouselWidth / 3 + 50}px`));
  }

  slideLeft() {
    let nextIndex = (this.start + 3) % videos.length;
    document.querySelector(".videos-carousel-container").style.width = `${
      400 / 3
    }%`;
    let carousel = document.querySelector(".top-videos");
    console.log(carousel.style.width);
    carousel.appendChild(this.videoElement(this.videos[nextIndex]));
    let carouselWidth = carousel.offsetWidth;
    console.log(carouselWidth);
    document
      .querySelectorAll(".vid")
      .forEach((vid) => (vid.style.width = `${carouselWidth / 4}px`));
    let carouselContainer = document.querySelector(
      ".videos-carousel-container"
    );
    carouselContainer.classList.add("slide-left");
  }
}

export { videos };
export { TopVideos };
