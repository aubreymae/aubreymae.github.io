// Album Data
const albums = [
    {
      title: "Fetch the Bolt Cutters",
      artist: "Fiona Apple",
      year: 2020,
      description: "\"... [the album] feels more conceptually akin to the revolutionary risk-taking of saint Yoko Ono—a woman who once wrote, “I like to fight the establishment by using methods that are so far removed from establishment-type thinking that the establishment doesn’t know how to fight back.” Fetch the Bolt Cutters does something similar. It contains practically no conventional pop forms. Taken together, the notes of its found percussion and rattling blues are liberationist.\"",
      image: "images/ftbc.jpg",
      link: "https://pitchfork.com/reviews/albums/fiona-apple-fetch-the-bolt-cutters/"
    },
    {
      title: "Magdalene",
      artist: "FKA Twigs",
      year: 2019,
      description: "\"... [FKA Twigs] has said she found solace and inspiration in the story of Mary Magdalene ... By locating herself in Magdalene’s lineage, twigs, a Catholic school alumnus, explores the ways deeply conservative expectations trammel women; in doing so, she locates a version of herself within these ancient and oppressive archetypes, upending and transcending them through the power of her songwriting and the sheer magnetic pull of her presence.\"",
      image: "images/magdalene.jpg",
      link: "https://pitchfork.com/reviews/albums/fka-twigs-magdalene/"
    },
    {
      title: "Renaissance",
      artist: "Beyoncé",
      year: 2022,
      description: "\"... [Beyoncé] writes that Renaissance, her seventh solo album and “Act I” of a mysterious trilogy, is a “safe place, a place without judgment… a place to be free of perfectionism and overthinking.” In turn she pays homage to the true safe places for many of her fans, celebrating the clubs made by and for Black women and queer people, Black Chicagoans and Detroiters and New Yorkers who created house and techno, Black and Latinx ball and kiki houses\"",
      image: "images/renaissance.jpg",
      link: "https://pitchfork.com/reviews/albums/beyonce-renaissance/"
    },
    {
      title: "143",
      artist: "Katy Perry",
      year: 2024,
      description: "\"Despite reuniting with writer-producer Dr. Luke in an ostensible search for past glory, 143 sounds phoned in. The material here is so devoid of anything distinguishing that it makes one suspicious it’s a troll or cynical attempt for the campy realm of so bad it’s good. No stranger to a thrashing, Perry might as well have transformed into a fish, jumped into a barrel, and told critics, “Shoot me!” Regardless of intent, it’s possible to read this album as a metatext on the disposability of so much pop. 143 is Perry saying, “Nothing matters,” except instead of a “lol” preceding it, it’s a heart-hand emoji.\"",
      image: "images/ww.jpg",
      link: "https://pitchfork.com/reviews/albums/katy-perry-143/"
    }
];
  
// Generate Album Cards
const albumsSection = document.getElementById("albums");

albums.forEach((album) => {
    const albumDiv = document.createElement("div");
    albumDiv.classList.add("album");

    albumDiv.innerHTML = `
        <img src="${album.image}" alt="${album.title}" class="album-image">
        <div class="album-info">
            <div class="album-header">
                <p class="album-title">${album.title}</p><p class="artist-name">${album.artist}</p><p class="album-year">${album.year}</p>
            </div>
            <p>${album.description}</p>
            <p><a href="${album.link}" target="_blank">Full Article</a></p>
        </div>
    `;

    albumsSection.appendChild(albumDiv);
});

// Hover over images then animate drop shadows
const albumImages = document.querySelectorAll(".album-image");
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
}

function clear(image) {
  image.style.setProperty("-webkit-filter", "none");
}

function generate_shadow(image) {
  // Generate random color
  let r = Math.floor(Math.random() * 256); // Random value for red (0-255)
  let g = Math.floor(Math.random() * 256); // Random value for green (0-255)
  let b = Math.floor(Math.random() * 256); // Random value for blue (0-255)

  let hexColor = rgbToHex(r, g, b);
  console.log(`The HEX: ${hexColor}`);
  image.style.setProperty(`-webkit-filter`, `drop-shadow(0px 0px 15px ${hexColor})`);
  image.style.transition = "all 1s";
}

albumImages.forEach((album_image) => {
  album_image.addEventListener("mousemove", (e) => {
    generate_shadow(album_image);
  });
  
  album_image.addEventListener("mouseout", (e) => {
    clear(album_image);
  });
});
