const music = new Audio('audio/7.mp3');
music.play();  
    const songs = [   
        {
            id: 1,
            songName:'Sada ninnu<br> <div class="subtitle">Mahanatir</div>',
            p1: "img/1.jpg"
        },
        {
            id: 2,
            songName:'Mannat<br> <div class="subtitle">Darshan Raval</div>',
             p1: "img/2.jpg"
        },
        {
            id: 3,
            songName:'Aakasam ammayi aitey<br> <div class="subtitle">DSP</div>',
            p1: "img/3.jpg"
        },
        {
            id: 4,
            songName:'Edho pichi pichiga<br> <div class="subtitle">Chirutha</div>',
            p1: "img/4.jpg"
        },
        {
            id: 5,
            songName:'Adire Hrudayam<br> <div class="subtitle">RX 100</div>',
            p1: "img/5.jpg"
        },
        {
            id: 6,
            songName:'kallolam<br> <div class="subtitle">Padi padi leche manusu</div>',
            p1: "img/6.jpg"
        },
        {
            id: 7,
            songName:'Mast magan<br> <div class="subtitle">Arjit Singh</div>',
            p1: "img/7.jpg"
        },
        {
            id: 8,
            songName:'Phizue<br> <div class="subtitle">Phizue</div>',
            p1: "img/8.jpg"
        },
        {
            id: 9,
            songName:'Oy...Oy..<br> <div class="subtitle">Oye Oye</div>',
            p1: "img/9.jpg"
        },
        {
            id: 10,
            songName:'On My Way<br> <div class="subtitle">Allan Walker</div>',
            p1: "img/10.jpg"
        },

    ]
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
        const imgElement = e.querySelector('img');
        const h5Element = e.querySelector('h5');
        if (imgElement && h5Element && songs[i] && songs[i].p1) {
          imgElement.src = songs[i].p1;
          h5Element.innerHTML = songs[i].songName;
        }
      });
      
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if(music.paused||music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});
const makeAllPlays =  ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((e1)=>{
        e1.computedStyleMap.background = 'rgb(105,105,105,.0)';
        e1.classList.add('bi bi-play-circle-fill');
        e1.classList.remove('bi-pause-fill');
    })
};

const makeAllBackground =  ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((e1)=>{
        e1.computedStyleMap.background = 'rgb(105,105,105,.0)';
    })
};

let index = 0;
poster_master_play = document.getElementById('poster_master_play');
download_music = document.getElementById('download_music');
title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (e1) => {
        index = e1.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
      //  download_music.hred
        let songTitles = songs.filter((els) => {
            return els.id == index;
        });
        songTitles.forEach((elss) => {
            let { songName } = elss;
            title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105, 105, 105, 0)";
        makeAllPlays();
        e1.target.classList.remove(`bi bi-play-circle-fill`);
        e1.target.classList.add(`bi bi-play-circle-fill`);
        wave.classList.add(`active1`);
    });
})

let currentStart = document.getElementById('currentStart');
let cuurentEnd  = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot');
music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60);
if(sec1<10)
{
    sec1=`0${sec1}`
}

currentEnd.innerText = `${min1}:${sec1}`;
let min2 = math.floor(music_curr/60);
let sec2 = math.floor(music_curr%60);
if(sec2<10)
{
    sec2=`0${sec2}`
}

currentEnd.innerText = `${min2}:${sec2}`;

let progressBar = parseInt((musi_curr / music_dur)*100);
seek.value -  progressBar;
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;
});
seek.addEventListener('change',()=>{
    music.currentTime= seek.value * music.duration/100;
});


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementById('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');
vol.addEventListener('change',()=>{
    if(vol.value ==0)
    {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    } 
    if(vol.value > 50){
        
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_bar.style.left=`${vol_a}%`;
    music.volume = vol_a /100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click',()=>{
    index -=1;
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
     music.src = `audio/${index}.mp3`;
    poster_master_play.src= `img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss=>{
     let { songName} = elss;
     songTitles.innerHTML = songName;
     poster_master_play.src=poster;
    });
        makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgorund="rgb(105,105,105,.0)";
    makeAllPlays();
    e1.target.classList.remove('bi bi-pause-circle-fill');
    e1.target.classList.add('bi bi-play-circle-fill');
    wave.classList.add('active1');
})
next.addEventListener('click',()=>{
    index++;  
    if(inex<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
     music.src = `audio/${index}.mp3`
    poster_master_play.src= `img/${index}.jpg`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss=>{
     let { songName} = elss;
     songTitles.innerHTML = songName;
     poster_master_play.src=poster;
    });
        makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.backgorund="rgb(105,105,105,.0)";
    makeAllPlays();
    e1.target.classList.remove('bi bi-pause-circle-fill');
    e1.target.classList.add('bi bi-play-circle-fill');
    wave.classList.add('active1');
})
//console
//index++;

function slide(){
    let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];



pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330;
});

pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330;
});
}
