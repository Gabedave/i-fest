const iconBaseF = () => 'https://maps.google.com/mapfiles/kml/shapes/';

const festivalsF = () => [
  {
    name: "Ifa Festival",
    short_description: "The Ifa festival is an annual seven-day event that ends on the first Saturday of June. Ifa (also known as Òrúnmìlà) is an oracle of divinity and one of the principal deities of the Yoruba people.",
    image: "https://i0.wp.com/newscentral.africa/wp-content/uploads/IFE.jpg?resize=1229%2C638&ssl=1",
    location: new google.maps.LatLng(7.482176, 4.560266),
    icon: ""
  },
  {  
    name: "Egungun Festival",
    short_description: "Egungun refers to the return of the ancestors in masquerade form and is celebrated by the Yoruba people. In Iragbiji, a town near Osogbo, the Egungun festival is celebrated as the period of interaction between the living and the dead.", // Many colourful masquerades parade the streets and offer prayers for the living. The festival takes place in May every year and lasts for seven days. On the final day of the festival, all of the masquerades meet at the Oja-oba (king's market) to entertain the people. The Aragbiji (owner) of Iragbiji and his chiefs arrive at Oja-oba from 5.00pm to receive them and perform the traditional blessing.",
    image: "https://www.facts.ng/wp-content/uploads/2014/09/egungun-festival.jpg",
    location: new google.maps.LatLng(7.896903, 4.705009),
    icon: ""
  },
  {  
    name: "Olojo Festival",
    short_description: "The Yoruba word 'Olojo' means 'The Day Of The First Dawn' that describes the grateful heart of man towards God's creation and the existence of Human. The Olojo Festival, held annually in October in Ife, Osun State, Nigeria is the celebration of the remembrance of “Ogun”, god of Iron, who is believed to be the first son of Oduduwa, progenitor of the Yoruba people.",
    long_description: "The Olojo Festival is an ancient festival celebrated annually in Ife, Osun State, Nigeria. This festival is one of the popular festival in the Yoruba land, it was once described by Oba Adeyeye Enitan Ogunwusi as a festival that celebrate the Black race all over the world. The Yoruba word 'Olojo' means 'The Day Of The First Dawn' that describes the grateful heart of man towards God's creation and the existence of Human. The Olojo Festival is a culture festival in the calendar of the Ile-Ife, Osun State which is located in the Southwestern part of Nigeria. It is the celebration of the remembrance of “Ogun”, god of Iron, who is believed to be the first son of Oduduwa, progenitor of the Yoruba people. The festival is held annually in October.",
    source: "~ Wikipedia",
    image: "https://foretvhub.ng/artsandculture/wp-content/uploads/sites/19/2020/09/OLOJO-IMAGE-2_8392348502052151866_n.jpg",
    location: new google.maps.LatLng(7.482176, 4.560270),
    icon: ""
  }
]

const landmarksF = () => [
  {
    name: "National Museum, Ile-Ife",
    short_description: "Near Ooni’s Palace Enuwa Area, Ile-Ife",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Natural_History_Museum%2C_Obafemi_Awolowo_University%2C_Ile-Ife%2C_Osun_State%2C_Nigeria_%2812997776433%29.jpg/1200px-Natural_History_Museum%2C_Obafemi_Awolowo_University%2C_Ile-Ife%2C_Osun_State%2C_Nigeria_%2812997776433%29.jpg",
    location: new google.maps.LatLng(7.518331484541343, 4.52792286675676),
  },
  {
    name: "Ooni’s Palace",
    short_description: "Enuwa Area, Ile-Ife",
    image: "https://i0.wp.com/www.ekohotblog.com/wp-content/uploads/2021/02/7e6057f0b21899f1d04595e6cfaebf2c.jpg?fit=678%2C452&ssl=1",
    location: new google.maps.LatLng(7.482389069268765, 4.560255868371528),
  },
  {
    name: "Agbonniregun Temple",
    short_description: "Oke-Itase Street, Ile-Ife",
    image: "https://djausar.files.wordpress.com/2013/06/ifa-temple.jpg?w=402",
    location: new google.maps.LatLng(7.484467288166024, 4.562306211533395),
  },
  {
    name: "Oranmiyan Staff",
    short_description: "Mopa Area, Aarubidi, Ile-Ife",
    image: "https://www.nairaland.com/attachments/2968908_oranmiyan20staff_jpeg17eb3114faa7462f61e281180567a04d",
    location: new google.maps.LatLng(7.476754210345674, 4.557404481865161),
  },
  {
    name: "Zoological Garden",
    short_description: "Obafemi Awolowo University Campus, Ile-Ife",
    image: "https://www.naijaloaded.com.ng/wp-content/uploads/2017/10/zoo-700x466.jpg",
    location: new google.maps.LatLng(7.52469069889343, 4.525223791819207),
  },
]

function initMap() {
  const landmarks = landmarksF()
  const festivals = festivalsF()
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: festivals[0].location,
  });
  
  for( let i = 0; i < festivals.length; i++ ) {
    festival = festivals[i]
    let marker = new google.maps.Marker({
      position: festival.location,
      map: map,
      icon: festival.icon,
      title: festival.name
    });
    console.log(marker)
  }
  
  for( let i = 0; i < landmarks.length; i++ ) {
    landmark = landmarks[i]
    let marker = new google.maps.Marker({
      position: landmark.location,
      map: map,
      title: landmark.name
    });
  }
}

window.initMap = initMap;

function populateLandmark() {
  const landmarks = landmarksF()
  const first = landmarks[0]
  document.getElementById("landmark_details").innerHTML += `
    <div class="carousel-item active">
                <img class="landing-page-image d-block w-100" src="${first.image}" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <span class="outline-button-button button">
                    <span>
                      ${first.name}
                    </span>
                  </span>
                </div>
              </div>
              `
  document.getElementById("carousel-indicators").innerHTML += `
  <li data-target="#majorLandmarksCarousel" data-slide-to="0" class="active"></li>
  `
  // landmarks.shift()
  for (let i = 1; i < landmarks.length; i ++) {
    const landmark = landmarks[i]
    document.getElementById("landmark_details").innerHTML += `
    <div class="carousel-item">
                <img class="landing-page-image d-block w-100" src="${landmark.image}" alt="">
                <div class="carousel-caption d-none d-md-block">
                  <span class="outline-button-button button">
                    <span>
                      ${landmark.name}
                    </span>
                  </span>
                </div>
              </div>
              `
    document.getElementById("carousel-indicators").innerHTML += `
    <li data-target="#majorLandmarksCarousel" data-slide-to="${i}" class=" "></li>
    `
  }
};

function populateFestivals() {
  const festivals = festivalsF()
  festivals.forEach((festival) => {
    document.getElementById("festival_cards").innerHTML += `<div class="place-card-container">
      <img
        alt="${festival.name} image"
        src="${festival.image}"
        class="place-card-image"
      />
      <div class="place-card-container1">
        <span class="place-card-text"><span>${festival.name}</span></span>
        <span class="place-card-text1">
          <span>
            ${festival.short_description}
          </span>
        </span>
        <div class="outline-button-container">
          <button class="outline-button-button button">
            <span>Discover festival</span>
          </button>
        </div>
      </div>
    </div>`
  })
  
};

const populateModal = () => {
  const olojoFestival = festivalsF()[festivalsF().length - 1]
  document.getElementById("festivalModalTitle").innerHTML = olojoFestival.name
  document.getElementById("festivalModalBody").innerHTML += `
  <div><p>${olojoFestival.long_description}</p></div>
  <p class="text-muted m-0">${olojoFestival.source}</p>
  `
}

window.onload = () => {
  populateLandmark()
  populateFestivals()
  populateModal()
  $('.carousel').carousel({
    interval: 3000,
  })
  // let i = 0
  // setInterval(() => {
  //   const festivals = festivalsF()
  //   let name = festivals[i++ % festivals.length].name
  //   document.getElementById("create-trip").innerHTML = `Create a trip to ${name}`
  // }, 3000)
}