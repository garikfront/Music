let audioPlayer = document.querySelector(".audio-player");
let artistName = document.querySelector(".artist-name");
let songName = document.querySelector(".song-name");
let songCategory = document.querySelector(".song-category");
let currentTimeText = document.querySelector(".audio-current-time");
let currentRange = document.querySelector(".audio-curenttime");
let durationText = document.querySelector(".audio-duration");
let songPicture = document.querySelector(".song-picture");
let redo = document.querySelector(".redo");
let undo = document.querySelector(".undo");
let playpause = document.querySelector(".playpause");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let random = document.querySelector(".random");
let interval = document.querySelector(".interval");
let speed = document.querySelectorAll(".speed-modal > button");
let repeat = document.querySelector(".repeat");
let audioVolume = document.querySelector(".audio-volume");
let volumeIcon = document.querySelector(".volume-bar > i");
let categories = document.querySelectorAll(".item");
let forA = false;
let forB = false;
let currentA, currentB;
let repeatChecked = false;
let speedButton = document.querySelector(".speed");
let modal = document.querySelector(".speed-modal");
let playlistItems;
let filtersongs = [];
let categoryactive = false;
let list = [
  {
    artist: "Timati",
    name: "AMG",
    category: "Rap",
    song: "audio/timati.mp3",
    photo: "picture/timati.jpg",
  },
  {
    artist: "Guf",
    name: "Ураган",
    category: "Rap",
    song: "audio/guf.mp3",
    photo: "picture/guf.jpg",
  },
  {
    artist: "Santiz",
    name: "Rastafarai",
    category: "Rap",
    song: "audio/Santiz.mp3",
    photo: "picture/Santiz.jpg",
  },
  {
    artist: "Egor Kreed",
    name: "We gotta get love",
    category: "Rap",
    song: "audio/egor.mp3",
    photo: "picture/egor.jpg",
  },
  {
    artist: "Bones",
    name: "The One",
    category: "Rap",
    song: "audio/Bones.mp3",
    photo: "picture/Bones.jpg",
  },
  {
    artist: "Korn",
    name: "No Way",
    category: "Rock",
    song: "audio/Korn.mp3",
    photo: "picture/Korn.jpg",
  },
  {
    artist: "Night Lovell",
    name: "Bad Kid",
    category: "Hip-Hop",
    song: "audio/NightLovell.mp3",
    photo: "picture/NightL.jpg",
  },
  {
    artist: "Night Lovell",
    name: "Murder Rate",
    category: "Hip-Hop",
    song: "audio/NightLovell2.mp3",
    photo: "picture/NightL.jpg",
  },
  {
    artist: "Night Lovell",
    name: "Inside",
    category: "Hip-Hop",
    song: "audio/NightLovell3.mp3",
    photo: "picture/NightL.jpg",
  },
  {
    artist: "Night Lovell",
    name: "Hero",
    category: "Hip-Hop",
    song: "audio/NVTVS.mp3",
    photo: "picture/nvtvs.jpg",
  },
  {
    artist: "Shakewell",
    name: "Leglock",
    category: "Hip-Hop",
    song: "audio/shakewell.mp3",
    photo: "picture/shakewell.jpg",
  },
  {
    artist: "Shakewell",
    name: "Sleeping Bag",
    category: "Hip-Hop",
    song: "audio/shakewell2.mp3",
    photo: "picture/shakewell.jpg",
  },
  {
    artist: "Smokepurpp",
    name: "No Smoke",
    category: "Hip-Hop",
    song: "audio/smokepurpp.mp3",
    photo: "picture/smokepurpp.jpg",
  },
  {
    artist: "Sted.d",
    name: "Я тону",
    category: "Hip-Hop",
    song: "audio/sted.d.mp3",
    photo: "picture/sted.d.jpg",
  },
  {
    artist: "Sted.d",
    name: "Я убью тебя",
    category: "Hip-Hop",
    song: "audio/sted.d2.mp3",
    photo: "picture/sted.d.jpg",
  },
  {
    artist: "Sted.d",
    name: "Записки",
    category: "Hip-Hop",
    song: "audio/sted.d3.mp3",
    photo: "picture/sted.d.jpg",
  },
  {
    artist: "Twitterboy",
    name: "Пушка",
    category: "Rock",
    song: "audio/twitt.mp3",
    photo: "picture/twitt.jpg",
  },
  {
    artist: "Twitterboy",
    name: "Среди нас",
    category: "Rock",
    song: "audio/twitt2.mp3",
    photo: "picture/twitt.jpg",
  },
  {
    artist: "Три дня дождя",
    name: "Безразличие",
    category: "Rock",
    song: "audio/тдд2.mp3",
    photo: "picture/тдд.jpg",
  },
  {
    artist: "Три дня дождя",
    name: "Если я умру",
    category: "Rock",
    song: "audio/тдд3.mp3",
    photo: "picture/тдд.jpg",
  },
  {
    artist: "Три дня дождя",
    name: "Космос",
    category: "Rock",
    song: "audio/тдд4.mp3",
    photo: "picture/тдд.jpg",
  },
  {
    artist: "Хаски",
    name: "Убей меня",
    category: "Hip-Hop",
    song: "audio/хаски.mp3",
    photo: "picture/хаски.jpg",
  },
  {
    artist: "Хаски",
    name: "Седьмое октября",
    category: "Hip-Hop",
    song: "audio/хаски2.mp3",
    photo: "picture/хаски.jpg",
  },
  {
    artist: "Смоки Мо",
    name: "Just do it",
    category: "Rap",
    song: "audio/смок.mp3",
    photo: "picture/смок.jpg",
  },
  {
    artist: "Saluki",
    name: "Вкус твоих слёз",
    category: "Hip-Hop",
    song: "audio/saluki.mp3",
    photo: "picture/saluki.webp",
  },
  {
    artist: "Offmi",
    name: "Virus",
    category: "Hip-Hop",
    song: "audio/offmi.mp3",
    photo: "picture/offmi.jpg",
  },
  {
    artist: "Rocket",
    name: "4276 3800 1921 1056",
    category: "Hip-Hop",
    song: "audio/rocket.mp3",
    photo: "picture/rocket.webp",
  },
  {
    artist: "Rocket",
    name: "Солдат",
    category: "Hip-Hop",
    song: "audio/rocket2.mp3",
    photo: "picture/rocket.webp",
  },
  {
    artist: "Pharaoh",
    name: "Одним Целым",
    category: "Rap",
    song: "audio/Pharaoh.mp3",
    photo: "picture/Pharaoh.jpg",
  },
  {
    artist: "Pyrokinesis",
    name: "Останови Меня",
    category: "Rap",
    song: "audio/Pyrokinesis.mp3",
    photo: "picture/Pyrokinesis.jpg",
  },
  {
    artist: "Ssshhhiiittt!",
    name: "Тебя нет",
    category: "Rock",
    song: "audio/Ssshhhiiittt!.mp3",
    photo: "picture/Ssshhhiiittt.jpg",
  },
  {
    artist: "The Limba",
    name: "Смузи",
    category: "Rap",
    song: "audio/TheLimba.mp3",
    photo: "picture/TheLimba.jpg",
  },
  {
    artist: "Twenty One Pilots",
    name: "Goner",
    category: "Rock",
    song: "audio/Twenty.mp3",
    photo: "picture/Twenty.jpg",
  },
  {
    artist: "Тату",
    name: "Полчаса",
    category: "Rock",
    song: "audio/Tatoo.mp3",
    photo: "picture/Tatoo.jpg",
  },
  {
    artist: "Velial Squad",
    name: "Полчаса",
    category: "Rap",
    song: "audio/Velial.mp3",
    photo: "picture/Velial.jpg",
  },
  {
    artist: "Xxxtentacion",
    name: "Sad!",
    category: "Hip-Hop",
    song: "audio/xxxtent.mp3",
    photo: "picture/xxxtent.jpg",
  },
  {
    artist: "Масло черного тмина",
    name: "Maximum Black",
    category: "Hip-Hop",
    song: "audio/масло.mp3",
    photo: "picture/масло.jpg",
  },
  {
    artist: "Три дня дождя",
    name: "Где ты",
    category: "Rock",
    song: "audio/тдд.mp3",
    photo: "picture/тдд.jpg",
  },
  {
    artist: "MASN",
    name: "Hate me",
    category: "Hip-Hop",
    song: "audio/masn.mp3",
    photo: "picture/masn.jpg",
  },
  {
    artist: "Loqiemean",
    name: "Солнечная сторона",
    category: "Rock",
    song: "audio/Loqi.mp3",
    photo: "picture/Loqi.jpg",
  },
  {
    artist: "Lizer",
    name: "Корабли",
    category: "Rap",
    song: "audio/Lizer.mp3",
    photo: "picture/Lizer.jpg",
  },
  {
    artist: "Linkin Park",
    name: "The Messenger",
    category: "Rock",
    song: "audio/LP.mp3",
    photo: "picture/LP.jpg",
  },
  {
    artist: "Killstation",
    name: "Absolution",
    category: "Hip-Hop",
    song: "audio/killstation.mp3",
    photo: "picture/killstation.jpg",
  },
  {
    artist: "50 Cent",
    name: "In Da Club",
    category: "Hip-Hop",
    song: "audio/50cent.mp3",
    photo: "picture/50cent.jpg",
  },
  {
    artist: "Bob Marley",
    name: "A la la la long",
    category: "Raggie",
    song: "audio/bob.mp3",
    photo: "picture/bob.jpg",
  },
  {
    artist: "Eminem",
    name: "Mockingbird",
    category: "Rap",
    song: "audio/eminem.mp3",
    photo: "picture/eminem.jpg",
  },
  {
    artist: "Ramstein",
    name: "Du Hast",
    category: "Rock",
    song: "audio/rammstein.mp3",
    photo: "picture/ramstein.png",
  },
  {
    artist: "Daniel Castro",
    name: "I will play the blues for you",
    category: "Blues",
    song: "audio/castro.mp3",
    photo: "picture/castro.webp",
  },
  {
    artist: "2pac",
    name: "All eyez On me",
    category: "Hip-Hop",
    song: "audio/2pac.mp3",
    photo: "picture/2pac.jpg",
  },
  {
    artist: "SHOUSE",
    name: "Love Toniht",
    category: "Electro",
    song: "audio/shouse.mp3",
    photo: "picture/shouse.jpg",
  },
  {
    artist: "Viktor Tsoy",
    name: "Blood Type",
    category: "Rock",
    song: "audio/tsoy.mp3",
    photo: "picture/tsoy.jpg",
  },
  {
    artist: "Gradusy",
    name: "Director",
    category: "Pop",
    song: "audio/gradusy.mp3",
    photo: "picture/gradusi.jpg",
  },
  {
    artist: "Tatul",
    name: "Garun e",
    category: "Rabiz",
    song: "audio/Tatul.mp3",
    photo: "picture/tatul.jpg",
  },
  {
    artist: "Tatul",
    name: "Karapi lchi mot",
    category: "Rabiz",
    song: "audio/karapi.mp3",
    photo: "picture/tatul.jpg",
  },
  {
    artist: "Aram Asatryan",
    name: "7:40",
    category: "Rabiz",
    song: "audio/Aram.mp3",
    photo: "picture/aram.jpg",
  },
  {
    artist: "Armstrong",
    name: "La vie en rose",
    category: "Jazz",
    song: "audio/armstrong.mp3",
    photo: "picture/armstrong.jpg",
  },
  {
    artist: "Gnarls Barkley",
    name: "Crazy",
    category: "Pop",
    song: "audio/crazy.mp3",
    photo: "picture/crazy.jpg",
  },
  {
    artist: "Einaudi",
    name: "Experience",
    category: "Classic",
    song: "audio/einaudi.mp3",
    photo: "picture/einaudi.jpg",
  },
  {
    artist: "Harut Pamboukjian",
    name: "Te achers qez voronen",
    category: "Pop",
    song: "audio/harut.mp3",
    photo: "picture/harut.jpg",
  },
  {
    artist: "Lav Eli",
    name: "Gta qez erknqum",
    category: "Rock",
    song: "audio/laveli.mp3",
    photo: "picture/laveli.jpg",
  },
  {
    artist: "Daft Punk",
    name: "Lucky",
    category: "Funk",
    song: "audio/lucky.mp3",
    photo: "picture/lucky.jpg",
  },
  {
    artist: "Arctics Monkeys",
    name: "Do i wanna know?",
    category: "Rock",
    song: "audio/monkeys.mp3",
    photo: "picture/monkeys.jpeg",
  },
  {
    artist: "Black Pumas",
    name: "Colors",
    category: "Blues",
    song: "audio/pumas.mp3",
    photo: "picture/pumas.jpg",
  },
  {
    artist: "Side Project",
    name: "Eraz",
    category: "Rock",
    song: "audio/side.mp3",
    photo: "picture/side.jpg",
  },
  {
    artist: "Vardan Sargsyan",
    name: "Xent",
    category: "Pop",
    song: "audio/vardan.mp3",
    photo: "picture/vardan.webp",
  },
  {
    artist: "Antonio Vivaldi",
    name: "Winter",
    category: "Classic",
    song: "audio/vivaldi.mp3",
    photo: "picture/vivaldi.png",
  },
  {
    artist: "Brunette",
    name: "Dimak",
    category: "Pop",
    song: "audio/brunette.mp3",
    photo: "picture/brunette.jpg",
  },
  {
    artist: "The Weeknd",
    name: "Blinding Lights",
    category: "R&B",
    song: "audio/Weeknd.mp3",
    photo: "picture/Weeknd.jpg",
  },
    {
    artist: "Frank Wiedemann",
    name: "Howling",
    category: "Electro",
    song: "audio/howling.mp3",
    photo: "picture/howling.jpg",
  },
    {
    artist: "Burak Yeter",
    name: "Tuesday",
    category: "Electro",
    song: "audio/burak.mp3",
    photo: "picture/burak.jpg",
  },
  {
    artist: "NTO",
    name: "Every Wall Is A Door",
    category: "Electro",
    song: "audio/nto.mp3",
    photo: "picture/nto.jpg",
  },
    {
    artist: "Peggy Gou",
    name: "Starry Night",
    category: "Electro",
    song: "audio/peggy.mp3",
    photo: "picture/peggy.jpg",
  },
      {
    artist: "Daft Punk",
    name: "Giorgio by Moroder",
    category: "Electro",
    song: "audio/giorgio.mp3",
    photo: "picture/lucky.jpg",
  },
    {
    artist: "Mika",
    name: "Relax",
    category: "Electro",
    song: "audio/mika.mp3",
    photo: "picture/mika.jpg",
  },
      {
    artist: "David Guetta",
    name: "One Love",
    category: "Electro",
    song: "audio/guetta.mp3",
    photo: "picture/guetta.jpg",
  },
    {
    artist: "Mike Vale",
    name: "Music Is The Answer",
    category: "Electro",
    song: "audio/vale.mp3",
    photo: "picture/vale.jpg",
  },
    {
    artist: "Gorillaz",
    name: "Feel Good",
    category: "Hip-Hop",
    song: "audio/gorillaz.mp3",
    photo: "picture/gorillaz.jpg",
  },
    {
    artist: "Coldplay",
    name: "Adventure Of A Lifetime",
    category: "Funk",
    song: "audio/coldplay.mp3",
    photo: "picture/coldplay.jpg",
  },
      {
    artist: "Bruno Mars",
    name: "Uptown Funk",
    category: "Funk",
    song: "audio/bruno.mp3",
    photo: "picture/bruno.jpg",
  },
    {
    artist: "Stevie",
    name: "Superstition",
    category: "Funk",
    song: "audio/stevie.mp3",
    photo: "picture/stevie.jpeg",
  },  
          {
    artist: "Rick James",
    name: "Super Freak",
    category: "Funk",
    song: "audio/rick.mp3",
    photo: "picture/rick.jpg",
  },
    {
    artist: "Michael Jackson",
    name: "Don't Stop Till You Get Enough ",
    category: "Funk",
    song: "audio/jackson.mp3",
    photo: "picture/jackson.jpeg",
  },
      {
    artist: "Tigran Jamkochyan",
    name: "Ur Vor Gnas",
    category: "Rabiz",
    song: "audio/jamkochyan.mp3",
    photo: "picture/jamkochyan.jpg",
  },
       {
    artist: "Tigran Jamkochyan",
    name: "Im Anmorats",
    category: "Rabiz",
    song: "audio/anmorac.mp3",
    photo: "picture/jamkochyan.jpg",
  },
    {
    artist: "Spitakci Hayko feat Tigan Asatryan",
    name: "Garun Garun",
    category: "Rabiz",
    song: "audio/garun.mp3",
    photo: "picture/hayko.jpg",
  },
     {
    artist: "Bethoven",
    name: "Moon Sonata",
    category: "Classic",
    song: "audio/bethoven.mp3",
    photo: "picture/Beethoven.jpg",
  },
     {
    artist: "Yiruma",
    name: "The River Flows On You",
    category: "Classic",
    song: "audio/yiruma.mp3",
    photo: "picture/yiruma.jpg",
  },
     {
    artist: "Chopin",
    name: "Nocturne no. 6",
    category: "Classic",
    song: "audio/chopin1.mp3",
    photo: "picture/chopin.jpg",
  },
    {
    artist: "Chopin",
    name: "Nocturne no. 9",
    category: "Classic",
    song: "audio/chopin2.mp3",
    photo: "picture/chopin.jpg",
  },
    {
    artist: "Yann Tiersen",
    name: "La valse d'Amélie",
    category: "Classic",
    song: "audio/yann.mp3",
    photo: "picture/yann.jpg",
  },
    {
    artist: "Jan A.P. Kaczmarek",
    name: "Goodbye",
    category: "Classic",
    song: "audio/hachiko.mp3",
    photo: "picture/jan.jpeg",
  },
    {
    artist: "Frank Sinatra",
    name: "If You Go Away",
    category: "Jazz",
    song: "audio/sinatra1.mp3",
    photo: "picture/sinatra.jpg",
  },
     {
    artist: "Frank Sinatra",
    name: "Fly Me To The Moon",
    category: "Jazz",
    song: "audio/sinatra2.mp3",
    photo: "picture/sinatra.jpg",
  }, 
    {
    artist: "Louis Armstrong ",
    name: "West End Blues",
    category: "Jazz",
    song: "audio/armstrong1.mp3",
    photo: "picture/armstrong.jpg",
  },
    {
    artist: "Eric Clapton",
    name: "Autumn Leaves",
    category: "Jazz",
    song: "audio/clapton.mp3",
    photo: "picture/clapton.jpg",
  },
      {
    artist: "John Mayer",
    name: "Gravity",
    category: "Blues",
    song: "audio/mayer1.mp3",
    photo: "picture/mayer.jpg",
  },
       {
    artist: "Snowy White",
    name: "Midnight Blues",
    category: "Blues",
    song: "audio/snowy.mp3",
    photo: "picture/snowy.jpg",
  },    
    {
    artist: "Gary Moore",
    name: "Still Got The Blues",
    category: "Jazz",
    song: "audio/gary.mp3",
    photo: "picture/gary.jpg",
  },
     {
    artist: "Rory Gallagher",
    name: "What In The World",
    category: "Blues",
    song: "audio/rory.mp3",
    photo: "picture/rory.jpg",
  },
      {
    artist: "Bill Withers",
    name: "Ain't No Sunshine",
    category: "Blues",
    song: "audio/bill.mp3",
    photo: "picture/bill.jpg",
  },
    
];



let categoryPictures = [
  "picture/cat/jazz.jpg",
  "picture/cat/rap.jpg",
  "picture/cat/blues.webp",
  "picture/cat/hip.jpg",
  "picture/cat/pop.jpg",
  "picture/cat/funk.jpg",
  "picture/cat/classic.jpg",
  "picture/cat/rock.jpg",
  "picture/cat/electro.webp",
  "picture/cat/rabiz.jpg",
];

function loading(x) {
  audioPlayer.style.background = `url(${x.photo})`;
  artistName.innerText = x.artist;
  songName.innerText = x.name;
  songCategory.innerText = x.category;
  audio.src = x.song;
  songPicture.style.background = `url(${x.photo})`;
}

function zeroPoints() {
  currentA = undefined;
  currentB = undefined;
  forA = false;
  forB = false;
  interval.children[0].style.background = "#fff";
  interval.children[2].style.background = "#fff";
  speed.forEach((cleansp) => cleansp.classList.remove("active-speed"));
  speed[2].classList.add("active-speed");
}

let actual = 0;
loading(list[actual]);
let isPlay = false;

function playing() {
  isPlay = true;
  audio.play();
  playpause.className = "fa fa-pause";
  playlistItems.forEach((p) => p.classList.remove("active-item"));
  playlistItems[actual].classList.add("active-item");
}

function pauseing() {
  isPlay = false;
  audio.pause();
  playpause.className = "fa fa-play";
}

playpause.onclick = () => (!isPlay ? playing() : pauseing());

next.onclick = () => {
  actual++;
  if (categoryactive) {
    actual > filtersongs.length - 1 ? (actual = 0) : "";
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    playlistItems[actual].classList.add("active-item");
    loading(filtersongs[actual]);
    playing();
  } else {
    actual > list.length - 1 ? (actual = 0) : "";
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    playlistItems[actual].classList.add("active-item");
    loading(list[actual]);
    playing();
  }
  zeroPoints();
};

prev.onclick = () => {
  actual--;
  if (categoryactive) {
    actual < 0 ? (actual = filtersongs.length - 1) : "";
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    playlistItems[actual].classList.add("active-item");
    loading(filtersongs[actual]);
    playing();
  } else {
    actual < 0 ? (actual = list.length - 1) : "";
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    playlistItems[actual].classList.add("active-item");
    loading(list[actual]);
    playing();
  }
  zeroPoints();
};

redo.onclick = () => (audio.currentTime -= 10);
undo.onclick = () => (audio.currentTime += 10);

currentRange.oninput = () => {
  audio.currentTime = (currentRange.value / 100) * audio.duration;
};

speed[2].classList.add("active-speed");

speed.forEach((sp) => {
  sp.onclick = () => {
    speed.forEach((cleansp) => cleansp.classList.remove("active-speed"));
    sp.classList.add("active-speed");
    audio.playbackRate = sp.innerText == "Normal" ? 1 : sp.innerText;
  };
});

speedButton.onclick = () => modal.classList.toggle("open-modal");
let countChecked = 0;

repeat.onclick = () => {
  if (countChecked % 2 == 0) {
    repeatChecked = true;
    repeat.classList.add("repeatAnimtion");
  } else {
    repeatChecked = false;
    repeat.classList.remove("repeatAnimtion");
  }
  countChecked++;
};

audio.ontimeupdate = () => {
  if (audio.currentTime == 0) {
    currentRange.value = 0;
  } else {
    currentRange.value = (audio.currentTime * 100) / audio.duration;
    let curminute = Math.floor(audio.currentTime / 60);
    let cursecond = Math.floor(audio.currentTime - curminute * 60);
    let durminute = Math.floor(audio.duration / 60);
    let dursecond = Math.floor(audio.duration - durminute * 60);

    currentTimeText.innerHTML = `${(curminute =
      curminute < 10 ? "0" + curminute : curminute)}:${(cursecond =
      cursecond < 10 ? "0" + cursecond : cursecond)}`;

    durationText.innerHTML = `${(durminute =
      durminute < 10 ? "0" + durminute : durminute)}:${(dursecond =
      dursecond < 10 ? "0" + dursecond : dursecond)}`;

    if (durationText.innerHTML == currentTimeText.innerHTML && repeatChecked) {
      playing();
      zeroPoints();
    }

    if (audio.ended && !repeatChecked) {
      actual++;
      if (categoryactive) {
        playlistItems.forEach((p) => p.classList.remove("active-item"));
        playlistItems[actual].classList.add("active-item");
        actual > filtersongs.length - 1 ? (actual = 0) : "";
        loading(filtersongs[actual]);
        playing();
      } else {
        playlistItems.forEach((p) => p.classList.remove("active-item"));
        playlistItems[actual].classList.add("active-item");
        actual > list.length - 1 ? (actual = 0) : "";
        loading(list[actual]);
        playing();
      }
      zeroPoints();
    }
  }

  interval.onclick = () => {
    if (!forA) {
      forA = true;
      interval.children[0].style.background = "#c6bd62";
      currentA = audio.currentTime;
    } else if (forA && !forB) {
      forB = true;
      interval.children[2].style.background = "#c6bd62";
      currentB = audio.currentTime;
      audio.currentTime = currentA;
    } else if (forA && forB) {
      interval.children[0].style.background = "#fff";
      interval.children[2].style.background = "#fff";
      forA = false;
      forB = false;
      currentA = undefined;
      currentB = undefined;
    }
  };
  if (audio.currentTime > currentB) {
    audio.currentTime = currentA;
  }
};

audioVolume.oninput = () => (audio.volume = audioVolume.value / 100);
let playlist = document.querySelector(".playlist");
list.map((item) => {
  playlist.innerHTML += `<div class="playlist-item">
    <img src="${item.photo}" alt="">
    <div class="for-name">
        <h2>${item.artist}</h2>
        <span>${item.name}</span>
    </div>
    <span>${item.category}</span>
</div>`;
  playlistItems = document.querySelectorAll(".playlist-item");
  playlistItems.forEach((it, l) => {
    it.style.animationDelay = l * 0.1 + "s";
  });
});

categories.forEach((item, i) => {
  item.style.background = `url(${categoryPictures[i]})`;
  item.onclick = () => {
    categories.forEach((cat) => cat.classList.remove("activeitem"));
    item.classList.add("activeitem");
    filtersongs = [];
    playlist.innerHTML = "";
    categoryactive = true;
    actual = -1;
    list.forEach((l) => {
      if (item.innerText == l.category) {
        filtersongs.push(l);
      }
    });

    filtersongs.map((item) => {
      playlist.innerHTML += `<div class="playlist-item">
        <img src="${item.photo}" alt="">
        <div class="for-name">
            <h2>${item.artist}</h2>
            <span>${item.name}</span>
        </div>
        <span>${item.category}</span>
    </div>`;
    });

    playlistItems = document.querySelectorAll(".playlist-item");
    playlistItems.forEach((play, i) => {
      play.onclick = () => {
        playlistItems.forEach((p) => p.classList.remove("active-item"));
        play.classList.add("active-item");
        actual = i;
        loading(filtersongs[actual]);
        playing();
        zeroPoints();
      };
    });
    playlistItems.forEach((it, l) => {
      it.style.animationDelay = l * 0.1 + "s";
    });
  };
});

playlistItems.forEach((play, i) => {
  play.onclick = () => {
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    play.classList.add("active-item");
    actual = i;
    loading(list[actual]);
    playing();
    zeroPoints();
  };
});

random.onclick = () => {
  let randomPoint;
  if (categoryactive) {
    randomPoint = Math.round(Math.random() * filtersongs.length - 1);
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    playlistItems[randomPoint].classList.add("active-item");
    actual = randomPoint;
    loading(filtersongs[actual]);
    playing();
    zeroPoints();
  } else {
    randomPoint = Math.round(Math.random() * list.length - 1);
    playlistItems.forEach((p) => p.classList.remove("active-item"));
    playlistItems[randomPoint].classList.add("active-item");
    actual = randomPoint;
    loading(list[actual]);
    playing();
    zeroPoints();
  }
};

let categeriesBlock = document.querySelector('.categories');
let playlistBlock = document.querySelector('.playlist');

playicon.onclick = () => {
  playlistBlock.classList.toggle('active-playlist');
}

caticon.onclick = () => {
  categeriesBlock.classList.toggle('active-category');
}
