//<script type="text/javascript">
window.onload = function(){

    j = window.location.search.split('q=')[1]
    n = j.split('');
    let s = '';

    for (var v in n){

      if (n[v] == '+') {

        n[v] = '%20';

      }

      s += n[v];

    }

    result(s);
    titles();
};
//</script>
function result(s){
  const query = {
    type:'video',
    q:s,
    maxResult: 10,
    key:'AIzaSyAh3FtnGvPoufRwYpWWWvs4sbNVs4JhLDQ'
  };

  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=${query.type}&q=${query.q}&maxResults=${query.maxResult}&key=${query.key}`;
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){

  if(this.readyState == 4 && this.status == 200){

    const res = JSON.parse(this.response);
    //let item = '';
    let thumbnails = [];
    let id = [];
    res.items.forEach(function(pictures){

      //title.push(pictures.snippet.title);
      thumbnails.push(`<div class="mf-image">
        <div class="mf-ibg mcover"></div>
        <img class="lazy-thumbs" src="${pictures.snippet.thumbnails.default.url}" data-title="${pictures.snippet.title}"/>
      </div>`);
      id.push(`            <div class="mf-details">
                    <div class="mf-content">
                      <h3>${pictures.snippet.title}</h3>
                      <!--<ul class="mf-info">
                        <li>
                          <span class="fas fa-user-crown"></span>Nirvana
                        </li>
                        <li>
                          <span class="far fa-calendar-star"></span>12 years ago
                        </li>
                      </ul>
                      <div class="mf-desc"> As heard in Captain Marvel! Listen to more Nirvana here: Nirvana.lnk.to/Essentials Read the story behind 'Nevermind' here: ... </div>-->
                      <div class="music-player"></div>
                    </div>
                    <ul class="mf-actions">
                      <li data-mact="pm">
                        <span class="icon">
                          <span class="fas fa-play fa-fw"></span>
                          <span class="fas fa-spinner-third fa-spin fa-fw"></span>
                        </span>
                        <a>
                          <span class="text">
                            <span class="large">Play Music</span>
                            <span class="short">Play</span>
                          </span>
                        </a>
                      </li>
                      <li data-mact="sm">
                        <span class="icon">
                          <span class="fas fa-circle fa-fw"></span>
                        </span>
                        <a>
                          <span class="text">
                            <span class="large">Stop Music</span>
                            <span class="short">Stop</span>
                          </span>
                        </a>
                      </li>
                      <li data-mact="dl">
                        <span class="icon">
                          <span class="fas fa-download fa-fw"></span>
                        </span>
                        <a href="https://mp3snow.com/${pictures.id.videoId}" target="_blank">
                            <span class="text">
                              <span class="large">Download MP3</span>
                              <span class="short">Download</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>`);
        }
    );
    //console.log(thumbnails);
    //console.log(id);
    document.querySelector('.music-files').innerHTML = `${music_file(thumbnails, id)}`;
  }
};

xhttp.open('GET', URL, true);
xhttp.send(null);
}

function titles(){
  let title = window.location.search.split('q=')[1].split('');
  let app = document.querySelector('h1#title');
  let subtitle = document.querySelector('.showcase .layout .results h2');
  let text = '';

  for (var i = 0; i < title.length; i++) {
    if(title[i] == '+'){

      title[i] = ' ';
    }
    text += title[i];
  }

  app.innerHTML = `${text}`;
  subtitle.innerHTML = `${text} Songs`;
}
function music_file(x, y){
  let container = '';
  for (var i = 0; i < x.length; i++) {
    container +=`<div class="music-file" data-media="9354e95eb77661626e5a392d6578376f">${x[i]+y[i]}</div>`;
  }
  return container;
}
