const api_key = "Encontre a sua chave e insira aqui";
const url = 'http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums'
const form = document.getElementById("search");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const artist = document.getElementById("artist").value;
  fetch(`${url}&artist=${artist}&api_key=${api_key}&format=json&limit=5`)
    .then(response => response.json())
    .then((data) => {
    const displayedAlbums = document.getElementById("albums-container");
    displayedAlbums.innerHTML = "";
    data.topalbums.album.forEach((album) => {
      const item = `
      <div class="row m-t-1">
        <div class="col-xs-12">
          <img src="${album.image[2]["#text"]}" class='pull-left m-r-1'>
          <h2>${album.name}</h2>
          <p>${album.artist.name}</p>
        </div>
      </div>`
      displayedAlbums.insertAdjacentHTML("beforeend", item);
      console.log(album);
    });
  })
})
