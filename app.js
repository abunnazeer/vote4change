'use strict';

// variables
const bannerContainer = document.querySelector('.banner__section');
const bannerImg = document.querySelector('#banner__img');
const caption = document.querySelector('.caption');
const bannerVoteBtn = document.querySelector('.vote__btn');
//slide images and caption
const slideDetails = [
  {
    imgPth: 'assets/img/slide.jpg',
    caption: `Don't Believe there lies, they leave us with no seccurity`,
  },
  {
    imgPth: 'assets/img/slide1.jpg',
    caption: 'No education --Strike',
  },
  {
    imgPth: 'assets/img/slide2.jpg',
    caption: `Don't be decieve again!`,
  },
  {
    imgPth: 'assets/img/slide3.jpg',
    caption: `We can fight them by casting for the right person!`,
  },
  {
    imgPth: 'assets/img/slide4.jpg',
    caption: `Choose the right candidate`,
  },
  {
    imgPth: 'assets/img/slide5.jpg',
    caption: `Let's save Nigeria together`,
  },
  {
    imgPth: 'assets/img/slide6.jpg',
    caption: `We deserve more from our Government`,
  },
];

// candidate details
const candidateDetails = [
  [
    {
      image: 'assets/img/tinub.png',
      fullName: 'Ahmad Bola Tinubu',
      position: 'APC Presidential Candidate',
      noOfVote: 0,
    },
    {
      image: 'assets/img/tinub.png',
      fullName: 'Atiku Abubakar',
      position: 'PDP Presidential Candidate',
      noOfVote: 0,
    },
    {
      image: 'assets/img/tinub.png',
      fullName: 'Rabiu Musa Kwankoso',
      position: 'ANPP Presidential Candidate',
      noOfVote: 0,
    },
  ],

  [
    {
      image: 'assets/img/kashim.png',
      fullName: 'Kashim Shettima',
      position: 'APC Vice Presidential Candidate',
      noOfVote: 0,
    },
    {
      image: 'assets/img/ifeanyi.png',
      fullName: 'Ifeanyi Chukwu Arthur Okowa',
      position: 'PDP Vice Presidential Candidate',
      noOfVote: 0,
    },
    {
      image: 'assets/img/tinub.png',
      fullName: 'Chief Edwin Ume-Ezeoke',
      position: 'ANPP Vice Presidential Candidate',
      noOfVote: 0,
    },
  ],
];
// this navigate to vote page
bannerVoteBtn?.addEventListener('click', () => (location.href = 'vote.html'));

// Load the banner slides
let curent = 0;
window.addEventListener('DOMContentLoaded', function () {
  setInterval(() => {
    bannerImg.src = slideDetails[curent].imgPth;
    caption.textContent = slideDetails[curent].caption;
    curent++;
    if (curent === slideDetails.length) {
      curent = 0;
    }
  }, 5000);
});
