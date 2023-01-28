fetch("./assets/js/data.json")
  .then(response => response.json())
  .then(data => {
    const main = document.getElementById("main");
    const content = document.querySelector("#content");
    let mainContent = ``;
    let elements = ``;
    for (let key in data) {
      let element = `    <div class="element" id="element-${key}">
      <div class="elementContent">
        <div class="information">
          <img src="${data[key].avatar}"/>
          <p class="content-header">
            ${data[key].authorName} <span class="gray-text">in</span> ${data[key].topicsName}&nbsp;
            · &nbsp;<span class="gray-text">${data[key].date}</span>
          </p>
        </div>
        <div class="textContent">
          <h1 id="id-${key}" class="links content-topic">${data[key].header}</h1>
          <p class="content-paragraph">
          ${data[key].content}
          </p>
        </div>
        <div class="content-footer">
          <div class="content-footer-left">
            <div class="language">${data[key].language}</div>
            <p>
              <span class="gray-text">${data[key].duration}</span> &nbsp; · &nbsp;
              <span class="gray-text">${data[key].intended}</span>
            </p>
          </div>
          <div class="squares">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
          </div>
        </div>
      </div>
      <div><img src="${data[key].img}" class="imgContent" /></div>
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
             let newContent = `<img class="arrow-right" src="./assets/img/arrow-left.png"/>
        <div class="content-header changed-content">
            <div class="content-left-header">
                <img width="64" height="64" src="./assets/img/avatar-changed.png"/>
                <div class="content-left-info">
                    <h3>${data[currentIndex].authorName}</h3>
                    <p class="gray-text">${data[currentIndex].date} · ${data[currentIndex].duration} · ${data[currentIndex].intended}</p>
                </div>
            </div>
            <div class="content-right-header">
                <img src="./assets/img/linkedin.png"/>
                <img src="./assets/img/facebook.png"/>
                <img src="./assets/img/twitter.png"/>
            </div>
        </div>
        <div class="content-main">
            <h1 class="changed-text">${data[currentIndex].header}</h1>
            <p class="changed-p">${data[currentIndex].content}</p>
            <img class="changed-img" src="${data[currentIndex].img}"/>
            <div class="changed-subheader">${data[currentIndex].header}</div>
            <p class="changed-subparagraph">${data[currentIndex].content}</p>
        </div>
        <div class="content-likes">
            <img src="./assets/img/likes.png"/>
            <img height="20" src="./assets/img/bookmark.png"/>       
        </div>`; 
            main.innerHTML = newContent;
          } else if(event.target.classList.contains("arrow-right")) {
            main.innerHTML = mainContent;
          }
        });
        

  }).catch(e => console.log(e));