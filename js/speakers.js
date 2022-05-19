const data = [{
  name: 'Wayan Istri Dewi',
  picture: 'https://i.pravatar.cc/130?img=42',
  specialty: 'Istri Experince',
  description: 'Istri brings unique brand of Java blues to Bali. Her music is not very unique in sound as she designs her own instruments.',
}, {
  name: 'Ibu Santi Teko',
  picture: 'https://i.pravatar.cc/130?img=34',
  specialty: 'Yoga',
  description: 'Ibu Santi finds Bali as her second home both for its beaches for her love of surfing and her love of rock climbing.',
}, {
  name: 'Emilia kadek',
  picture: 'https://i.pravatar.cc/130?img=62',
  specialty: 'Consciousness practitioner',
  description: 'Emilia kadek been practicing the Access Consciousness healing work since 2017 starting with Access Bars, Access Body Process.',
}, {
  name: 'Gusti Budi',
  picture: 'https://i.pravatar.cc/130?img=55',
  specialty: 'Multitalented artist and musician',
  description: 'Gusti Budi came from a traditional healer lineage connected to the nature and wildlife of Sumatra island.',
}, {
  name: 'Made Agung',
  picture: 'https://i.pravatar.cc/130?img=70',
  specialty: 'Spiritual reading & Meditation',
  description: 'Agung studied and practiced law in the corporate world before seeking his peace in his ancestral traditional Javanese meditation.',
}, {
  name: 'Chelo Kamau',
  picture: 'https://i.pravatar.cc/130?img=16',
  specialty: 'African Drumming Meditation',
  description: 'Vibrant, soul-stirring, colorful and passionate, with an infectious smile that reaches back to Nigeria.',
},
];

function createSpeakerCard(item, index) {
  const templateSpeakers = document.querySelector('.js-template-speakers');
  const speakerCard = templateSpeakers.content.firstElementChild.cloneNode(true);

  const speakerPic = speakerCard.querySelector('.js-speaker-pic');
  speakerPic.src = item.picture;

  const speakerName = speakerCard.querySelector('.js-speaker-name');
  speakerName.textContent = item.name;

  const speakerSpecialty = speakerCard.querySelector('.js-speaker-specialty');
  speakerSpecialty.textContent = item.specialty;

  const speakerDesription = speakerCard.querySelector('.js-speaker-desription');
  speakerDesription.textContent = item.description;

  const mediaQuery = window.matchMedia('(min-width: 768px)');
  if (index >= 2 && !mediaQuery.matches) {
    speakerCard.classList.toggle('js-hide-speaker');
    speakerCard.style.display = 'none';
  }

  const homePage = document.querySelector('.js-home-page');
  if (homePage !== null) {
    const templateSpeakersContainer = document.querySelector('.js-template-speakers-container');
    templateSpeakersContainer.appendChild(speakerCard);
  }
}

function addSpeakerCardWithData() {
  if ('content' in document.createElement('template')) {
    data.forEach((item, index) => {
      createSpeakerCard(item, index);
    });

    const hiddenSpeakers = document.getElementsByClassName('js-hide-speaker');
    if (hiddenSpeakers.length > 0) {
      const speakersShowLessButton = document.querySelector('.js-speakers-show-less-button');
      const speakersShowMoreButton = document.querySelector('.js-speakers-show-more-button');

      speakersShowMoreButton.addEventListener('click', (event) => {
        event.preventDefault();

        Array.from(hiddenSpeakers).forEach((item) => {
          item.style.display = 'flex';
          window.scrollBy({
            top: 600,
            left: 0,
            behavior: 'smooth',
          });
        });

        speakersShowLessButton.style.display = 'flex';
        speakersShowMoreButton.style.display = 'none';
      });

      speakersShowLessButton.addEventListener('click', (event) => {
        event.preventDefault();

        Array.from(hiddenSpeakers).forEach((item) => {
          item.style.display = 'none';
          window.scrollBy({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        });

        speakersShowLessButton.style.display = 'none';
        speakersShowMoreButton.style.display = 'flex';
      });
    }
  }
}

window.addEventListener('load', () => {
  addSpeakerCardWithData();

  const homePagetLink = document.querySelector('.js-home-page-link');
  homePagetLink.addEventListener('click', () => {
    const speakerCard = document.querySelector('.featured-speakers__card');
    if (speakerCard === null) addSpeakerCardWithData();
  });
});
