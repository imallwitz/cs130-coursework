const tracks = [
    {
      "id": "7iFmqWr2KDvNJt9ZCm7V21",
      "name": "Presumably Dead Arm (617 Sessions)",
      "artist": "Sidney Gish",
      "preview_url": "https://p.scdn.co/mp3-preview/371200b014350a8046be438735e94e274981cfd1?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2735f32135865aea8f078fb2a38"
    },
    {
      "id": "6h8ZaBbCS3IKlVyt3u9mal",
      "name": "Lilacs",
      "artist": "Waxahatchee",
      "preview_url": "https://p.scdn.co/mp3-preview/62f1adb1da329262e8c2ea4001b714a97aedb452?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273a00eb161f924eb38ef7257d7"
    },
    {
      "id": "1CON7om9HhIyr8cuZ6WmzC",
      "name": "Water Me Down",
      "artist": "Vagabon",
      "preview_url": "https://p.scdn.co/mp3-preview/f232486d26b43c1bd1d9845f131e922044d3b3e2?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27320c9946327ab37e5091d726e"
    },
    {
      "id": "1Ozj5XjZUAdnSedBxMgCwO",
      "name": "Resurrection Fern",
      "artist": "Iron and Wine",
      "preview_url": "https://p.scdn.co/mp3-preview/6dc79383c03b722062feb4e36c775c5d404f6736?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273816243514f01ac30d0932622"
    },
    {
      "id": "4Ys8jQvZOISzmp34BsImRf",
      "name": "Washing Machine Heart",
      "artist": "Mitski",
      "preview_url": "https://p.scdn.co/mp3-preview/2dfecb1f73cb68d13a003b2aa2c04a4217f647d8?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273257f81958be25db29f328159"
    },
    {
      "id": "5BWpwPVzb4LuvPpZ1SB0SS",
      "name": "Blood",
      "artist": "Butch Baby",
      "preview_url": "https://p.scdn.co/mp3-preview/e154cf69204619071dc1ab7c7c735e36354cfeae?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273c1e0abdecd4e5be575b341c4"
    },
    {
      "id": "1Lbb2QIpalrF4RgRtKZVLN",
      "name": "Hot Dad Calendar",
      "artist": "Cayetana",
      "preview_url": "https://p.scdn.co/mp3-preview/c7b239fde14fa68a59af0a207733365d7bf7df00?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27372d1ed3b058ef30aa7220610"
    },
    {
      "id": "0MSSvIizmqGAfE1PMKivuf",
      "name": "Granny Smith",
      "artist": "Louie Zong",
      "preview_url": "https://p.scdn.co/mp3-preview/419740bcd4ce158f5ee8f61f41072bad95ccf16f?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273a33fd79311854756329da2c3"
    },
    {
      "id": "6kQ3W5LMxh6ftjEBssYgAd",
      "name": "Seashore",
      "artist": "The Regrettes",
      "preview_url": "https://p.scdn.co/mp3-preview/ce8b330aa651665c2734095557a7c14261d05deb?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2733f9522cd556a0a46a3ed3b31"
    },
    {
      "id": "7KrzSy2ilJtOYXJte8eBVn",
      "name": "Stay Young, Go Dancing",
      "artist": "Death Cab for Cutie",
      "preview_url": "https://p.scdn.co/mp3-preview/e0722eb048d9ccc7899f0dacd01a508228cb9ab1?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27391fd8bfd1629fa46edc070e4"
    },
    {
      "id": "4JpazKcfOhbwqZrsYhzHee",
      "name": "Jackie and Wilson",
      "artist": "Hozier",
      "preview_url": "https://p.scdn.co/mp3-preview/79d27e551fcde07fcbb06b3cac162712f0c70c5e?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2734ca68d59a4a29c856a4a39c2"
    },
    {
      "id": "6clIs8luQtsNHTPEjdwYNV",
      "name": "DQ",
      "artist": "Charly Bliss",
      "preview_url": "https://p.scdn.co/mp3-preview/f1286a3cd87a2dad8a2b0e167a035d83629015e0?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b2733bb81b1ca73b4787cb726b54"
    },
    {
      "id": "7Cw3ppKuBHzjKdqz5ES2Zd",
      "name": "Symphony for a Spider Plant",
      "artist": "Mort Garson",
      "preview_url": "https://p.scdn.co/mp3-preview/bff3e5a1416b3b0f7fa5ec575d5adf06d9f452b5?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b273a941bb5225f09137f035e4f3"
    },
    {
      "id": "4AuZBIN4aeFL9egQldQfRn",
      "name": "Wake Up, Get Up, Get Out There",
      "artist": "Lyn",
      "preview_url": "https://p.scdn.co/mp3-preview/a40b5235690c47e5fcbeee2485dcbd57624abee3?cid=9697a3a271d24deea38f8b7fbfa0e13c",
      "image_url": "https://i.scdn.co/image/ab67616d0000b27339adb3a65bca5ba2ea7ae17f"
    }
];


// Part 1: 
// This code adds a card for the 6th track in the list (above)
// How would you use a loop so that a card is generated for every 
// track in the list?
var i;
for (i = 0; i < tracks.length; i++) {
  const track = tracks[i];
  const template = `
      <div data-index="${i}" onclick="playSong(event);">
          <img src="${track.image_url}" />\
          <h2>${track.name}</h2>
          <h3>${track.artist}</h3>
      </div>`;
  document.querySelector('main').innerHTML += template;
}


// Part 2: 
// Using the event object, detect the element that triggered the
// click event (currentTarget) to figure out which song to load 
// into the player next. When you've figured it out, set the 
// #audio-source element's "src" attribute with the correct 
// sound sample and then invoke the audio.load() and audio.play() 
// logic.
const playSong = (ev) => {
  const i = Number(ev.currentTarget.dataset.index);
  const curr = tracks[i];
  document.getElementById("audio-source").src = curr.preview_url;
  const audio = document.querySelector('audio');
  audio.load();
  audio.play();
}
