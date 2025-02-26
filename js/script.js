




//---------------------{ Seleção }---------------------
const html = {
  get(element) {
    return document.querySelector(element);
  },
  getAll(element) {
    return document.querySelectorAll(element);
  }
}

const imgCarrosel = document.querySelector('.main-news')
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");
const btnsCarousel = document.querySelectorAll('.btn-carousel');
const newLatestContainer = document.querySelector('.content_latest_news');
const listNewsHighlight = document.querySelector('.list-news-highlight');
const apiUrl = 'http://localhost:8080/api/news/';

// News
let allNews= []; 

let currentIndex = 0;



const getNews = {
  async getAllNews() {
   
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log(data);
        return data;
    
  }
}

// allNews = getAllNews();

// allNews.then(data => {
//   console.log(data);
// }).catch(error => {
//   console.error('Error fetching all news:', error);
// });



const animeNewsData = [
    {
      id: 1,
      title: 'New Season of "My Hero Academia" Announced',
      content: 'Exciting news for fans of "My Hero Academia" as the anime series has been confirmed to get a new season. Get ready for more action and heroism!',
      category: 'Anime News',
      comments_count: 10,
      views_count: 100,
      author: { name: 'AnimeFan2000' },
      createdAt: 'July 28, 2023',
      imageUrl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/my-hero-academia-season-7-image.jpg',
      views: 1500,
      comments: [
        { id: 101, author: 'SuperHero99', content: 'Can\'t wait for the new season!'},
        { id: 102, author: 'FanGirl22', content: 'OMG, best news ever!!!'},
        { id: 103, author: 'AnimeAddict', content: 'My Hero Academia is life <3'}
      ]
    },
    {
      id: 2,
      title: 'Special Event: "Naruto" 20th Anniversary Celebration',
      content: 'Join us in celebrating the 20th anniversary of the beloved anime "Naruto"! We have exciting events, merchandise, and surprises for all Naruto fans.',
      category: 'Anime Events',
      comments_count: 10,
      views_count: 100,
      author: { name: 'NarutoFan2000' },
      createdAt: 'September 10, 2023',
      imageUrl: 'https://naruto-official.com/common/ogp/NTOS_OG-20th.png',
      views: 2500,
      comments: [
        { id: 104, author: 'HiddenLeafNinja', content: 'Can\'t believe it\'s been 20 years already!'},
        { id: 105, author: 'SharinganMaster', content: 'I\'ll be there for sure!'},
        { id: 106, author: 'RamenLover', content: 'I hope they serve ramen at the event!'}
      ]
    },
    {
      id: 3,
      title: 'New Anime Film: "The Legend of The Dragon Swordsman"',
      content: 'Prepare for an epic adventure with "The Legend of The Dragon Swordsman" movie. Join the protagonist as he embarks on a quest to save the mystical land from darkness.',
      category: 'Anime Movies',
      comments_count: 10,
      views_count: 100,
      author: { name: 'NarutoFan2000' },
      createdAt: 'November 5, 2023',
      imageUrl: 'https://pic1.iqiyipic.com/image/20200928/2a/50/v_153455882_m_601_zh-CN_480_270.jpg',
      views: 1800,
      comments: [
        { id: 107, author: 'EpicQuester', content: 'This movie looks amazing!'},
        { id: 108, author: 'FantasyWatcher', content: 'I\'m excited for the magical creatures!'},
        { id: 109, author: 'AnimeCritic', content: 'Hoping for a gripping storyline!'}
      ]
    },
    {
      id: 4,
      title: 'Interview with Voice Actor: Aya Suzuki (Voice of Sakura)',
      content: 'We had a chance to sit down with Aya Suzuki, the talented voice behind Sakura in "Naruto". She shares her experiences and feelings about the iconic character.',
      category: 'Anime Interviews',
      comments_count: 10,
      views_count: 100,
      author: { name: 'MusicMaestro' },
      createdAt: 'December 15, 2023',
      imageUrl: 'https://criticalhits.com.br/wp-content/uploads/2022/02/signo-sakura-naruto.jpg',
      views: 1200,
      comments: [
        { id: 110, author: 'SakuraFan101', content: 'Sakura is my favorite character!'},
        { id: 111, author: 'VoiceActorEnthusiast', content: 'Aya Suzuki is so talented!'},
        { id: 112, author: 'NarutoGeek', content: 'Loved learning about the voice acting process!'}
      ]
    },
    {
        id: 5,
        title: 'New Anime "Beyond the Stars" Premieres on October 1st',
        content: 'Exciting news for all anime fans! A brand new anime titled "Beyond the Stars" will make its debut on October 1st. Get ready for an intergalactic adventure!',
        category: 'Anime News',
        comments_count: 10,
        views_count: 100,
        author: { name: 'MusicMaestro' },
        createdAt: 'September 20, 2023',
        imageUrl: 'https://psverso.com.br/wp-content/uploads/2023/05/Haruka-Beyond-the-Stars.jpg',
        views: 3000,
        comments: [
          { id: 113, author: 'GalacticExplorer', content: 'Counting down the days!'},
          { id: 114, author: 'SpaceOtaku', content: 'This looks out of this world!'},
          { id: 115, author: 'StarGazer', content: 'Hope it lives up to the hype!'}
        ]
      },
      {
        id: 6,
        title: 'AnimeCon 2024: Save the createdAt!',
        content: 'Mark your calendars for AnimeCon 2024! The biggest anime convention of the year is coming on February 15-18. Get ready for cosplays, panels, and amazing guests!',
        category: 'Anime Events',
        comments_count: 10,
        views_count: 100,
        author: { name: 'MusicMaestro' },
        createdAt: 'October 5, 2023',
        imageUrl: 'https://jotaku.net/wp-content/uploads/2021/01/https___blogs-images.forbes.com_laurenorsini_files_2015_07_anime_expo.jpg',
        views: 4000,
        comments: [
          { id: 116, author: 'CosplayFanatic', content: 'Can\'t wait to show off my new cosplay!'},
          { id: 117, author: 'AnimePanelist', content: 'Excited to present my panel at the con!'},
          { id: 118, author: 'GuestSpotlight', content: 'Looking forward to meeting the special guests!'}
        ]
      },
      {
        id: 7,
        title: 'Top 10 Must-Watch Anime of 2023',
        content: 'Check out our list of the top 10 anime series you shouldn\'t miss in 2023. From action to romance, we\'ve got you covered with the best shows of the year!',
        category: 'Anime Recommendations',
        comments_count: 10,
        views_count: 100,
        author: 'AnimeFanaticsReview',
        author: { name: 'MusicMaestro' },
        imageUrl: 'https://animecorner.me/wp-content/uploads/2023/05/top-best-upcoming-summer-2023-anime-releases.png',
        views: 2800,
        comments: [
          { id: 119, author: 'AnimeLover86', content: 'I\'ve seen most of these, and they\'re amazing!'},
          { id: 120, author: 'NewbieAnimeFan', content: 'Adding these to my watchlist right away!'},
          { id: 121, author: 'AnimeCriticX', content: 'Can\'t believe my favorite show made the list!'}
        ]
      },
      {
        id: 8,
        title: 'Behind the Scenes: "The Making of Anime Music"',
        content: 'Discover the secrets behind creating captivating anime music. We interviewed renowned composers and explored the creative process that brings anime soundtracks to life.',
        category: 'Special Features',
        comments_count: 10,
        views_count: 100,
        author: { name: 'MusicMaestro' },
        createdAt: 'December 20, 2023',
        imageUrl: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/music-anime.jpg',
        views: 1800,
        comments: [
          { id: 122, author: 'MusicLover123', content: 'Anime music is so underrated!'},
          { id: 123, author: 'ComposerEnthusiast', content: 'Inspiring to see the composers at work!'},
          { id: 124, author: 'AnimeSoundtrackFan', content: 'I\'m a big fan of anime OSTs!'}
        ]
      },
  ];
  
  

//---------------------{ Funções }---------------------
const toggleMouse = () =>{
    btnsCarousel.forEach((el)=>{
        el.classList.toggle('hide');
    });
};


function addReadMoreClickEvent(button) {
  console.log('oi');
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const postId = button.parentNode.parentNode.getAttribute('key');
    console.log(postId);
    if (postId == null) {
      console.log('Página não encontrada');
      return;
    }
    pagePost.navigateToNewsPage(postId);
  });
}

// Criar uma noticia ---{Últimas notícias}---
const createNews = (news) => {
    const divNews = document.createElement('div');
    divNews.classList.add('new');

    divNews.classList.add('info_latest_news');
    divNews.setAttribute('key', news.id);

    const categoryNews = document.createElement('span');
    categoryNews.classList.add('category');
    categoryNews.classList.add('category-latest-news');
    categoryNews.innerText = `${news.category}`.toUpperCase();
    divNews.appendChild(categoryNews);

    const imgNews = document.createElement('img');
    imgNews.classList.add('img-post');
    imgNews.setAttribute('src', `${news.imageUrl}`);
    imgNews.setAttribute('alt', `Foto: ${news.title}`);
    divNews.appendChild(imgNews);

    const titleNews = document.createElement('span');
    titleNews.classList.add('title');
    titleNews.innerText = `${news.title}`;
    divNews.appendChild(titleNews);

    const description = document.createElement('span');
    description.classList.add('preview-description');
    description.innerText = `${news.content}`;
    divNews.appendChild(description);

    const btnReadMore = document.createElement('form');
    btnReadMore.innerHTML = `
    
      <button type="submit" class="btn-read-more">
          Ler mais
      </button>
 
    `;
    divNews.appendChild(btnReadMore);

    addReadMoreClickEvent(btnReadMore.querySelector('.btn-read-more'));
    
    const divInfoPost = document.createElement('div');
    divInfoPost.classList.add('infos-post');

    
    const authorNews = document.createElement('span');
    authorNews.classList.add('author-post');
    authorNews.innerHTML = `
        <img class="author-photo" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt=${news.author.name}>
        <span class="author-name">${news.author.name}</span>
    `;
    divInfoPost.appendChild(authorNews);

    
    
    const divStatisticPostNews = document.createElement('div');
    divStatisticPostNews.classList.add('statistic-post');
    divStatisticPostNews.innerHTML = `
    <span class="total-comments">
        <i class="fa fa-comment" aria-hidden="true"></i>
        <span class="value">${news.comments_count}</span>
    </span>
    <span class="total-views">
        <i class="fa fa-eye" aria-hidden="true"></i>
        <span class="value">${news.views_count}</span>
    </span>
    <span class="post-date">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <span class="value">${news.createdAt}</span>
    </span>
    `; 
    divInfoPost.appendChild(divStatisticPostNews);
    

    divNews.appendChild(divInfoPost);
    newLatestContainer.appendChild(divNews);
};

// Criar estrutura das news highlight
const createHighLightNews = (news) =>{
    const divNewsHighligh = document.createElement('div');
    divNewsHighligh.classList.add('news-highlight');

    const titleNewsHighligh = document.createElement('span');
    titleNewsHighligh.classList.add('title-news-highlight');
    titleNewsHighligh.innerText = news.title;
    divNewsHighligh.appendChild(titleNewsHighligh);

    const formNews = document.createElement('form');
    formNews.innerHTML = `
   
        <button type="submit" class="btn-read-more">
            Ler mais
        </button>
 
    `
    divNewsHighligh.appendChild(formNews);
    addReadMoreClickEvent(formNews.querySelector('.btn-read-more'));

    listNewsHighlight.appendChild(divNewsHighligh);
}

animeNewsData.map((news)=>{
    createHighLightNews(news);
})

// 
btnNext.addEventListener('click', ()=>{

    if(currentIndex == animeNewsData.length - 1)
        currentIndex = 0;
    else
        currentIndex++;
    
    upadateNewsCarrousel();
});

btnPrev.addEventListener('click', ()=>{
    if(currentIndex == 0){
        currentIndex = animeNewsData.length;
    }
    currentIndex--;
    upadateNewsCarrousel();
});

// Atualizar o carrousel
const upadateNewsCarrousel = () => {
    let newMain = document.querySelector(".main-news");

    newMain.querySelector("img").setAttribute('src', animeNewsData[currentIndex].imageUrl);
    newMain.querySelector(".category").innerText = animeNewsData[currentIndex].category;
    newMain.querySelector(".title").innerText = animeNewsData[currentIndex].title;
    newMain.querySelector(".author").innerText = "Por "+ animeNewsData[currentIndex].author;
    newMain.querySelector(".totalComments").innerText = animeNewsData[currentIndex].comments.length + " Comentários";
    newMain.querySelector('.link-post').setAttribute('href', `categoria/${animeNewsData[currentIndex].category}/post.html?id=${animeNewsData[currentIndex].id}`)
}
upadateNewsCarrousel();

//---------------------{ Eventos }---------------------
setInterval(()=>{
    currentIndex++;

    if(currentIndex == animeNewsData.length )
        currentIndex = 0;
    
    upadateNewsCarrousel();
}, 5000);



// -------------------------{Post ùnico}-------------------------
const pagePost = {
  navigateToNewsPage(postId) {
    const newsUrl = `post.html?id=${postId}`;
    window.location.href = newsUrl;
  }
};

//---------------------{ Paginação }---------------------
let perPage = 10;
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(animeNewsData.length / perPage),
    maxVisibleButtons: 5
}

const controls = {
  next() {
    state.page++;

    if(state.page > state.totalPage){
      state.page--;
    }
  },
  prev() {
    state.page--;

    if(state.page < 1){
      state.page++;
    }
  },
  goTo(page) {
    if(page < 1){
      page = 1;
    }

    state.page = +page;

    if(page > state.totalPage){
      state.page = state.totalPage;
    }
  },
  createListeners() {
    html.get('.first').addEventListener('click', ()=>{
      controls.goTo(1);
      update();
    });

    html.get('.last').addEventListener('click', ()=>{
      controls.goTo(state.totalPage);
      update();
    })

    html.get('.next').addEventListener('click', ()=>{
      controls.next();
      update();
    });

    html.get('.prev').addEventListener('click', ()=>{
      controls.prev();
      update();
    })

  }
}

const buttons = {
  create(number) {
    const button = document.createElement('div');

    button.innerHTML = number;

    if(state.page ==  number){
      button.classList.add('active');
    }

    button.addEventListener('click', (event)=>{
      const page = event.target.innerText;
      controls.goTo(page);
      update();
    })

    html.get('.numbers').appendChild(button);
  },
  update() {
    html.get('.numbers').innerHTML = '';

    const {maxLeft, maxRight} = buttons.calculateMaxVisible();

    for(let page = maxLeft; page <= maxRight; page++){
      buttons.create(page);
    }

  },
  calculateMaxVisible() {
    const {maxVisibleButtons} =  state;
    let maxLeft = (state.page - Math.floor( maxVisibleButtons /2));  
    let maxRight = (state.page + Math.floor(maxVisibleButtons/2));

    if(maxLeft < 1) {
      maxLeft = 1;
      maxRight = maxVisibleButtons;
    }

    if(maxRight > state.totalPage) {
      maxLeft = state.totalPage - (maxVisibleButtons - 1)
      maxRight = state.totalPage;

      if (maxLeft<1) maxLeft = 1;
    }

    return { maxLeft , maxRight};
  }
}

const list = {
  create(item) {
    createNews(item);
  },
  async update() {
    html.get('.content_latest_news').innerHTML = '';

    let page = state.page - 1;
    let start = page * state.perPage;
    let end = start + state.perPage;

    const data = await getNews.getAllNews();
    const paginatedItems = data.slice(start, end);
    console.log(paginatedItems);
    
    paginatedItems.forEach(list.create);
  },
}

function update() {
  list.update();
  buttons.update();
}

function init() {
  update();
  controls.createListeners();
}

init();

