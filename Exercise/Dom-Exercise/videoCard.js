function creatCards(title, cName, views, time, duration, thumbnail){
    let viewstr ;
    if(views < 1000000)
    {
        viewstr = views / 1000 + "K";
    }
    else if(views > 1000000)
    {
        viewstr = views / 1000000 + "M";
    }
    
    let html = `<div class="card">
        <div class="img">
          <img src="${thumbnail}" alt="" />
          <div class="capsule">${duration}</div>
        </div>
        <div class="context">
          <h1>
            ${title}
          </h1>
          <div class="text">
            <p>${cName}</p>
            <p>${viewstr} views</p>
            <p>${time} months ago</p>
          </div>
        </div>
      </div>`;
      document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}



creatCards("Introduction to video editing tool | Learn the video editing zero to hero video #1", "EditiWithLove", 5760000, 3, "31:32", "pexels-serpstat-177219-572056.jpg");