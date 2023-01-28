fetch("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=YOqCzCWfxklRKYI8PdRbwxtm2GUpYuwh")
  .then(response => response.json())
  .then(data => {
    console.log(data.results);
    const main = document.getElementById("main");
    const content = document.querySelector("#content");
    let mainContent = ``;
    let elements = ``;
    for (let i = 0; i < data.results.length; i++) {
      let element = `    <div class="element">
      <div class="elementContent">
        <div class="information">
          <img src="../assets/img/avatar.png"/>
          <p class="content-header">
            ${data.results[i].per_facet[0]} <span class="gray-text">in</span> ${data.results[i].section}&nbsp;
            · &nbsp;<span class="gray-text">${data.results[i].published_date}</span>
          </p>
        </div>
        <div class="textContent">
          <h1 id="id-${i}" class="links content-topic">${data.results[i].title}</h1>
          <p class="content-paragraph">
          ${data.results[i].abstract}
          </p>
        </div>
        <div class="content-footer">
          <div class="content-footer-left">
            <div class="language">${data.results[i].item_type}</div>
            <p>
              <span class="gray-text">12 min read</span> &nbsp; · &nbsp;
              <span class="gray-text">${data.results[i].byline}</span>
            </p>
          </div>
          <div class="squares">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </div>
        </div>
      </div>
      <div><img src="${data.results[i].multimedia[0].url}" class="imgContent" /></div>
    </div>`;
      elements += element;
      content.innerHTML += element;
    }
    mainContent = `<h1 class="header">Hello, World!</h1>
    <div id="content">${elements}</div>`

    let currentIndex = 0;
    
    main.addEventListener("click", (event) => {
          if(event.target.classList.contains("links")) {
            currentIndex = +(event.target.id).slice(3);
             let newContent = `<img class="arrow-right" src="../assets/img/arrow-left.png"/>
        <div class="content-header changed-content">
            <div class="content-left-header">
                <img width="64" height="64" src="../assets/img/avatar-changed.png"/>
                <div class="content-left-info">
                    <h3>${data.results[currentIndex].per_facet[0]}</h3>
                    <p class="gray-text">${data.results[currentIndex].published_date} · 12 min read · Member-only</p>
                </div>
            </div>
            <div class="content-right-header">
                <img src="../assets/img/linkedin.png"/>
                <img src="../assets/img/facebook.png"/>
                <img src="../assets/img/twitter.png"/>
            </div>
        </div>
        <div class="content-main">
            <h1 class="changed-text">${data.results[currentIndex].title}</h1>
            <p class="changed-p">${data.results[currentIndex].abstract}</p>
            <img class="changed-img" src="${data.results[currentIndex].multimedia[0].url}"/>
            <div class="changed-subheader">${data.results[currentIndex].title}</div>
            <p class="changed-subparagraph">${data.results[currentIndex].abstract}</p>
        </div>
        <div class="content-likes">
            <img src="../assets/img/likes.png"/>
            <img height="20" src="../assets/img/bookmark.png"/>       
        </div>`; 
            main.innerHTML = newContent;
          } else if(event.target.classList.contains("arrow-right")) {
            main.innerHTML = mainContent;
          }
        });
        

  }).catch(e => console.log(e));