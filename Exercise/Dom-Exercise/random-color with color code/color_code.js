function cardcreation(thumbnail, heading, cname, views, time){

    let html = `<div class="mainbox">
            <div class="imgbox">
                <img src="${thumbnail}" alt="">

            </div>
            <div class="textbox">
                <h1 class="heading">${heading}</h1>
                <div class="details">
                <p class="cname">${cname}</p>
                <p class="views">${views}</p>
                <p class="time">${time}</p>
                </div>
            </div>
        </div>`;

        document.querySelector(".container").innerHTML= html;
        // document.getElementsByClassName("container").innerHTML= html;
}


cardcreation("/Exercise/Dom-Exercise/pexels-serpstat-177219-572056.jpg", "This is tutorial no .1 and this is about Video Editing","CodewithNaushad", "CodewithNaushad", "6 Months Old" );