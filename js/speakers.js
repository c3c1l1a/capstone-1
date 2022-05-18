const data = [{
		name: 'Wayan Istri Dewi',
		picture: 'https://i.pravatar.cc/130?img=42', 
		specialty: 'Istri Experince',
		description: `Yana brings unique brand of Java blues to Bali. Her music is not very unique in sound as she designs her own instruments.`
	},{
		name: 'Ibu Santi Teko',
		picture: 'https://i.pravatar.cc/130?img=34', 
		specialty: 'Yoga',
		description: `Ibu Santi finds Bali as her second home both for its beaches for her love of surfing and her love of rock climbing.`
	},{
		name: 'Emilia kadek',
		picture: 'https://i.pravatar.cc/130?img=62', 
		specialty: 'Consciousness practitioner',
		description: `Emilia kadek been practicing the Access Consciousness healing work since 2017 starting with Access Bars, Access Body Process.`
	},{
		name: 'Gusti Budi',
		picture: 'https://i.pravatar.cc/130?img=55', 
		specialty: 'Multitalented artist and musician',
		description: `Gusti Budi came from a traditional healer lineage connected to the nature and wildlife of Sumatra island.`
	},{
		name: 'Made Agung',
		picture: 'https://i.pravatar.cc/130?img=70', 
		specialty: 'Spiritual reading & Meditation',
		description: `Agung studied and practiced law in the corporate world before seeking his peace in his ancestral traditional Javanese meditation.`
	},{
		name: 'Chelo Kamau',
		picture: 'https://i.pravatar.cc/130?img=16', 
		specialty: 'African Drumming Meditation',
		description: `Vibrant, soul-stirring, colorful and passionate, with an infectious smile that reaches back to Nigeria.`
	},
]

function createSpeakerCard(item){
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

	const templateSpeakersContainer = document.querySelector('.js-template-speakers-container');
	templateSpeakersContainer.appendChild(speakerCard);
}


window.onload = () => {
  if ('content' in document.createElement('template')) {
  	
  	data.forEach((item) =>{
  		createSpeakerCard(item);		
  	});
  }
};

