let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;

  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);

  let blog = {
    title: title,
    content: content,
    image: image,
    author: "Farhan Riordan",
    postAt: new Date(),
  };

  blogs.push(blog);

  console.log(blogs);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = firstBlogContent();

  for (let i = 0; i < blogs.length; i++) {
    document.getElementById(
      "contents"
    ).innerHTML += `<ul>
  <li class="blog-list-item">
    <img src="${blogs[i].image}" alt="" />
    <div class="blog-content">
      <div class="item-content">
        <div>
          <h2>
            <a href="blog-detail.html" target="_blank">
              ${blogs[i].title}
            </a>
          </h2>
          <div style="font-size: 11px;" class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right;">
            <span style="font-size: 13px; color: grey">
            ${getDistanceTime(blogs[i].postAt)}
            </span>
          </div>
        </div>
        <div class="actions">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>`
  }
}




{/* <ul>
  <li class="blog-list-item">
    <img src="${blogs[i].image}" alt="" />
    <div class="blog-content">
      <div class="item-content">
        <div>
          <h2>
            <a href="blog-detail.html" target="_blank">
              ${blogs[i].title}
            </a>
          </h2>
          <div style="font-size: 11px;" class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right;">
            <span style="font-size: 13px; color: grey">
            ${getDistanceTime(blogs[i].postAt)}
            </span>
          </div>
        </div>
        <div class="actions">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="blog-list-item">
    <img class="blog-image" src="news.jpg" alt="City of Barcelona" />
    <div class="blog-content">
      <div class="item-content">
        <div>
          <h2>News 1</h2>
          <div style="font-size: 11px;" class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae incidunt eos atque dicta natus quam accusantium placeat.
          </p>
        </div>
        <div class="actions">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>; */}

function firstBlogContent() {
  return `<ul>
  <li class="blog-list-item">
    <img class="blog-image" src="news.jpg" alt="City of Barcelona" />
    <div class="blog-content">
      <div class="item-content">
        <div>
          <h2>News 1</h2>
          <div style="font-size: 11px;" class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae incidunt eos atque dicta natus quam accusantium placeat.
          </p>
        </div>
        <div class="actions">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
    </div>
    
  </li>
  <li class="blog-list-item">
    <img class="blog-image" src="news.jpg" alt="City of Barcelona" />
    <div class="blog-content">
      <div class="item-content">
        <div>
          <h2>News 1</h2>
          <div style="font-size: 11px;" class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            vitae incidunt eos atque dicta natus quam accusantium placeat.
          </p>
        </div>
        <div class="actions">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
        </div>
      </div>
    </div>
    
  </li>
  
</ul>`;
}

// function firstBlogContent() {
//   return `<div class="blog-list-item">
//   <div class="blog-image">
//     <img src="news.png" alt="" />
//   </div>
//   <div class="blog-content">
//     <div class="btn-group">
//       <button class="btn-edit">Edit Post</button>
//       <button class="btn-post">Post Blog</button>
//     </div>
//     <h1>
//       <a href="blog-detail.html" target="_blank"
//         >Fact check: How do I spot fake news?</a
//       >
//     </h1>
//     <div class="detail-blog-content">
//       12 Jul 2021 22:30 WIB | Peter Parker
//     </div>
//     <p>
//     In April, a screenshot of a quote from Annalena Baerbock circulated on Facebook. In it, the German Green Party leader and then-candidate for chancellor supposedly called for an end to private pet ownership because pets would consume too much CO2.
//     In Brazil in 2018, also during an election campaign, millions of messages were sent via WhatsApp in favor of the right-wing populist president, Jair Bolsonaro. Among other things, these messages suggested that the left-wing Workers' Party (PT) was planning a communist dictatorship or wanted to legalize pedophilia.
//     </p>

//     <div style="text-align: right;">
//         <span style="font-size: 13px; color: grey">
//           1 day ago
//         </span>
//     </div>

//   </div>
// </div>`;
// }

let month = [
  "January",
  "Februari",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getFullTime(time) {
  let fullTime = `${time.getDate()} ${
    month[time.getMonth()]
  } ${time.getFullYear()} ${time.getHours()}:${time.getMinutes()} WIB`;

  console.log(fullTime);

  return `${time.getDate()} ${
    month[time.getMonth()]
  } ${time.getFullYear()} ${time.getHours()}:${time.getMinutes()} WIB`;
}

function getDistanceTime(time) {
  let distance = new Date() - time;

  let milisecond = 1000;
  let secondsInHours = 3600;
  let hoursInDay = 23;

  let seconds = 60;
  let minutes = 60;

  let distanceDay = distance / (milisecond * secondsInHours * hoursInDay);
  let distanceHours = Math.floor(distance / (milisecond * seconds * minutes));
  let distanceMinutes = Math.floor(distance / (milisecond * seconds));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceDay >= 1) {
    return `${distanceDay} day ago`;
  } else if (distanceHours >= 1) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes >= 1) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSecond} seconds ago`;
  }
}

setInterval(() => {
  // console.log('render');
  renderBlog();
}, 1000);
