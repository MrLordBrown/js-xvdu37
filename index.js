import './style.css';

var slide = 0;

var mine = [
  {
    "Building": "Oudhof",
    "Block": "Amazing Homes",
    "Week": 15,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w15.png.png"
  },
  {
    "Building": "Temple of Doom",
    "Block": "80's Block",
    "Week": 9,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w9.png.png"
  },
  {
    "Building": "Maitland House",
    "Block": "80's Block",
    "Week": 6,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w6.png.png"
  },
  {
    "Building": "Eames House",
    "Block": "Amazing Homes",
    "Week": 11,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w11.png.png"
  },
  {
    "Building": "Casa Barragan",
    "Block": "Amazing Homes",
    "Week": 14,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w14.png.png"
  },
  {
    "Building": "Hill Valley Clock Tower",
    "Block": "80's Block",
    "Week": 7,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w7.png.png"
  },
  {
    "Building": "Castle of Lions",
    "Block": "80's Block",
    "Week": 10,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w10.png.png"
  },
  {
    "Building": "Falling Water",
    "Block": "Amazing Homes",
    "Week": 13,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w9.png.png"
  },
  {
    "Building": "Villa Ronconci",
    "Block": "Amazing Homes",
    "Week": 12,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w12.png.png"
  },
  {
    "Building": "555 CPW",
    "Block": "80's Block",
    "Week": 8,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w8.png.png"
  },
  {
    "Building": "Villa Savoye",
    "Block": "Amazing Homes",
    "Week": 11,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w11.png.png"
  },
  {
    "Building": "Death Star",
    "Block": "80's Block",
    "Week": "",
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w80.png.png"
  },
  {
    "Building": "Hawaiian Bamboo Apartments",
    "Block": "Central City",
    "Week": 1,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w1.png.png"
  },
  {
    "Building": "Event Center",
    "Block": "Central City",
    "Week": 4,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w4.png.png"
  },
  {
    "Building": "Form & Nature",
    "Block": "Future of Architecture",
    "Week": 19,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w19.png.png"
  },
  {
    "Building": "Skypad Apartments",
    "Block": "Future of Architecture",
    "Week": 17,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w17.png.png"
  },
  {
    "Building": "Mayor's House",
    "Block": "Central City",
    "Week": 3,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w3.png.png"
  },
  {
    "Building": "One Flame Hotel",
    "Block": "Central City",
    "Week": 2,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w2.png.png"
  },
  {
    "Building": "Mars-ONE Habitat Module",
    "Block": "Future of Architecture",
    "Week": 18,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w18.png.png"
  },
  {
    "Building": "Heydar Aliyev Center",
    "Block": "Future of Architecture",
    "Week": 16,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w16.png.png"
  },
  {
    "Building": "City Hall",
    "Block": "Central City",
    "Week": 5,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w5.png.png"
  },
  {
    "Building": "Natural History Museum",
    "Block": "Future of Architecture",
    "Week": 20,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w20.png.png"
  },
  {
    "Building": "Library Tower, Los Angeles",
    "Block": "City Skylines",
    "Week": 21,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w21.png.png"
  },
  {
    "Building": "Columbia Business Center, Seattle",
    "Block": "",
    "Week": 22,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w22.png.png"
  },
  {
    "Building": "Wilshire Grand Hotel, Los Angeles",
    "Block": "City Skylines",
    "Week": 21,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w21.png.png"
  },
  {
    "Building": "Space Needle, Seattle",
    "Block": "City Skylines",
    "Week": 22,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w22.png.png"
  },
  {
    "Building": "Namsan Tower, Seoul",
    "Block": "City Skylines",
    "Week": 23,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w23.png.png"
  },
  {
    "Building": "Lotte World Building, Seoul",
    "Block": "City Skylines",
    "Week": 23,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w23.png.png"
  },
  {
    "Building": "Ping An Financial Building",
    "Block": "City Skylines",
    "Week": 24,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w24.png.png"
  },
  {
    "Building": "K100 Building",
    "Block": "City Skylines",
    "Week": 24,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w24.png.png"
  },
  {
    "Building": "Panorama Tower",
    "Block": "City Skylines",
    "Week": 25,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w25.png.png"
  },
  {
    "Building": "Four Seasons Miami",
    "Block": "City Skylines",
    "Week": 25,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w25.png.png"
  },
  {
    "Building": "Liam Tower",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26a.png.png"
  },
  {
    "Building": "Jailhouse Sam",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26b.png.png"
  },
  {
    "Building": "Appartamento di Miekele",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26c.png.png"
  },
  {
    "Building": "Haunted Mansion",
    "Block": "Magic Kingdom",
    "Week": 27,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w27.png.png"
  },
  {
    "Building": "Temple of the Forbidden Eye",
    "Block": "Magic Kingdom",
    "Week": 28,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w28.png.png"
  },
  {
    "Building": "Luka Wizards Co.",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26d.png.png"
  },
  {
    "Building": "Luke's Cathedral",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26e.png.png"
  },
  {
    "Building": "Space Mountain",
    "Block": "Magic Kingdom",
    "Week": 29,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w29.png.png"
  },
  {
    "Building": "Lee Business Center",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26f.png.png"
  },
  {
    "Building": "Seuessenstraus Boingenhoppeturm",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26g.png.png"
  },
  {
    "Building": "Pagoda Matthew",
    "Block": "City Skylines",
    "Week": 26,
    "Image": "https://raw.githubusercontent.com/MrLordBrown/bbbcbcphotos/master/w26h.png.png"
  }
]
var count = Object.keys(mine).length;
function start() {
  console.log(count);
    var names = document.createElement('h1');
    var weeks = document.createElement('h2');
    var imgs = document.getElementById('img');
    var srcs = document.createAttribute('src');
    imgs.setAttributeNode(srcs);
    cont.appendChild(names);
    cont.appendChild(weeks);
    cont.appendChild(imgs);
    appDiv.appendChild(cont);
    console.log(mine[slide].Week);
    }

function update() {
  var names = document.getElementById('title');
  var weeks = document.getElementById('weeks');
var imgs = document.getElementById('img');
var cont = document.getElementById('current');
var srcs = document.createAttribute('src');
   var names2 = document.createElement('h1');
    var weeks2 = document.createElement('h2');
    var imgs2 = document.createElement('img');
    var srcs = document.createAttribute('src');
    var cont2 = document.createElement('div')
    names2.textContent = mine[slide].Building;
    weeks2.textContent = "Week: "+mine[slide].Week;
    srcs.value = mine[slide].Image;
    cont2.id = "current";
    names2.id = "title";
    imgs2.id = "img";
    weeks2.id="weeks";
     imgs2.setAttributeNode(srcs);
    cont.replaceChild(names2,names);
    cont.replaceChild(weeks2,weeks);
    cont.replaceChild(imgs2,imgs);
    appDiv.appendChild(cont2,cont);
    console.log(mine[slide].Week);
    }


start();

function back() {
  slide--
  if (slide <0) {
    slide = count-1;
  }
  update();
}

function forward() {
  slide++
  if (slide > count-1) {
    slide = 0;
  }
  update();
}

var backer = document.getElementById('left');
var fronter = document.getElementById('right');
backer.addEventListener('click',back);
fronter.addEventListener('click',forward);