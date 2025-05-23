const apiKey = "b2bd48e6";
    const url = `https://www.omdbapi.com/?t=Avengers&apikey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('film-container');
        container.innerHTML = `
          <div class="col-md-8">
            <div class="card p-4">
              <div class="row">
                <div class="col-md-4">
                  <img src="${data.Poster}" alt="${data.Title} afiş">
                </div>
                <div class="col-md-8">
                  <h3>${data.Title} (${data.Year})</h3>
                  <p><strong>Yönetmen:</strong> ${data.Director}</p>
                  <p><strong>Oyuncular:</strong> ${data.Actors}</p>
                  <p><strong>Tür:</strong> ${data.Genre}</p>
                  <p><strong>Süre:</strong> ${data.Runtime}</p>
                  <p><strong>IMDb Puanı:</strong> ${data.imdbRating}</p>
                  <p><strong>Açıklama:</strong><br> ${data.Plot}</p>
                </div>
              </div>
            </div>
          </div>
        `;
      })
      .catch(err => {
        document.getElementById('film-container').innerHTML = "<p class='text-danger text-center'>Veri alınamadı. API hatası.</p>";
        console.error(err);
      });