const objectMusics = [
    {
        id: 0,
        name: "Lỗi Tại Anh",
        singer: "Alex Lam",
        path: "./assets/music/ALEX LAM  LỖI TẠI ANH.mp3",
        avatar: "./assets/avatar/LỖI TẠI ANH ALEX LAM.jpg",
    },
    {
        id: 1,
        name: "Gió Vẫn Hát",
        singer: "Long Phạm",
        path: "./assets/music/GIÓ VẪN HÁT.mp3",
        avatar: "./assets/avatar/GIÓ VẪN HÁT LONG PHẠM.jpg",
    },
    {
        id: 2,
        name: "Quá Khứ Chỉ Nên Là Quá Khứ",
        singer: "Andiez",
        path: "./assets/music/QUÁ KHƯ CHỈ LÀ QUÁ KHỨ.mp3",
        avatar: "./assets/avatar/QUÁ KHƯ CHỈ LÀ QUÁ KHỨ.jpg",
    },
    {
        id: 3,
        name: "Sau Này Chúng Ta Giàu",
        singer: "Khắc Việt & Thảo BeBe",
        path: "./assets/music/SAU NÀY CHÚNG TA GIÀU  KHẮC VIỆT x THẢO BEBE  OFFICIAL MUSIC VIDEO.mp3",
        avatar: "./assets/avatar/SAU NÀY CHÚNG TA GIÀU.jpg",
    },
    {
        id: 4,
        name: "Sang Trang",
        singer: "Song Luân",
        path: "./assets/music/SONG LUÂN  SANG TRANG.mp3",
        avatar: "./assets/avatar/SANG TRANG SONG LUÂN.jpg",
    },
    {
        id: 5,
        name: "Thả Vào Hoàng Hôn",
        singer: "Thái Đình",
        path: "./assets/music/THẢ VÀO HOÀNG HÔN.mp3",
        avatar: "./assets/avatar/THẢ VÀO HOÀNG HÔN THÁI ĐÌNH.jpg",
    },
    {
        id: 6,
        name: "Suýt Nữa Thì",
        singer: "Andiez",
        path: "./assets/music/SUÝT NỮA THÌ  ANDIEZ  In The Moonlight Show.mp3",
        avatar: "./assets/avatar/suýt nữa thì.jpg",
    },
    {
        id: 7,
        name: "Khác Biệt",
        singer: "Trường Còi cover",
        path: "./assets/music/KHÁC BIỆT  KHẮC VIỆT  Cover Trường Còi  anh mệt rồi phải chạy theo em mãi.mp3",
        avatar: "./assets/avatar/Khác Biệt.jpg",
    },
    {
        id: 8,
        name: "Không Cần Phải Hứa Đâu Em",
        singer: "Kun Đức Nam cover",
        path: "./assets/music/KHÔNG CẦN PHẢI HỨA ĐÂU EM  PHẠM THÀNH HƯNG  KUUN ĐỨC NAM COVER.mp3",
        avatar: "./assets/avatar/không cần phải hứa đâu em.jpg",
    },
    {
        id: 9,
        name: "Dành Cho Em",
        singer: "Hoàng Tôn",
        path: "./assets/music/Dành Cho Em Hoàng Tôn.mp3",
        avatar: "./assets/avatar/Yêu Em Rất Nhiều.jpg",
    },
    {
        id: 10,
        name: "Em Ổn Không",
        singer: "Nguyễn Trần Trung Quân & Minh Su",
        path: "./assets/music/Em Ổn Không  Nguyễn Trần Trung Quân ft Minh Su  Cover.mp3",
        avatar: "./assets/avatar/em ổn không.jpg",
    },
    {
        id: 11,
        name: "Những Kẻ Mộng Mơ",
        singer: "Trung Quân",
        path: "./assets/music/NHỮNG KẺ MỘNG MƠ  Trung Quân  Live at La Cà Hát Ca.mp3",
        avatar: "./assets/avatar/những kẻ mộng mơ.jpg",
    },
    {
        id: 12,
        name: "Cô Gái M52",
        singer: "HuyR & Tùng Viu",
        path: "./assets/music/Cô gái m52  HuyR ft Tùng Viu  PROD BY DANNY EB Lyric Video Meens.mp3",
        avatar: "./assets/avatar/cô gái m52.jpg",
    },
    {
        id: 13,
        name: "Chúng Ta Không Thuộc Về Nhau",
        singer: "Sơn Tùng MTP",
        path: "./assets/music/Chúng Ta Không Thuộc Về Nhau  Official Music Video  Sơn Tùng MTP.mp3",
        avatar: "./assets/avatar/chúng ta không thuộc về nhau.jpg",
    },
    {
        id: 14,
        name: "Còn Thương Thì Không Để Em Phải Khóc",
        singer: "Đạt G",
        path: "./assets/music/CÒN THƯƠNG THÌ KHÔNG ĐỂ EM KHÓC  ĐẠT G live at Lululola.mp3",
        avatar: "./assets/avatar/còn thương sao để em phải khóc.webp",
    },
    {
        id: 15,
        name: "Anh Sẽ Đến Cùng Cơn Mưa",
        singer: "Trung Quân & Bùi Trường Linh",
        path: "./assets/music/ANH SẼ ĐẾN CÙNG CƠN MƯA  Trung Quân x Bùi Trường Linh x Hứa Kim Tuyền  Live at Isle of Art.mp3",
        avatar: "./assets/avatar/anh sẽ đến cùng cơn mua.png",
    },
    {
        id: 16,
        name: "Ngày Em Đẹp Nhất",
        singer: "TAMA",
        path: "./assets/music/NGÀY EM ĐẸP NHẤT  TAMA live at Lululola.mp3",
        avatar: "./assets/avatar/ngày em đẹp nhất.jpg",
    },
    {
        id: 17,
        name: "Như Anh Đã Thấy EM",
        singer: "PhúcXP",
        path: "./assets/music/PhucXp  Như Anh Đã Thấy Em Chẳng Thể Tìm Được Em  Live at LAB VIRAL HITS.mp3",
        avatar: "./assets/avatar/như anh đã thấy em.jpg",
    },
    {
        id: 18,
        name: "Cuối Cùng Thì",
        singer: "Jack",
        path: "./assets/music/cuối cùng thì jack.mp3",
        avatar: "./assets/avatar/cuối cùng thì.jfif",
    },
    {
        id: 19,
        name: "Sóng Gió",
        singer: "Jack & K-ICM",
        path: "./assets/music/sóng gió jack kicm.mp3",
        avatar: "./assets/avatar/sóng gió.jpg",
    },
    {
        id: 20,
        name: "Âm Thầm Bên Em",
        singer: "Sơn Tùng MTP",
        path: "./assets/music/âm thầm bên em sơn tùng mtp.mp3",
        avatar: "./assets/avatar/âm thầm bên em.webp",
    },
    {
        id: 21,
        name: "Như Ngày Hôm Qua",
        singer: "Sơn Tùng MTP",
        path: "./assets/music/Nhu Ngay Hom Qua.mp3",
        avatar: "./assets/avatar/như ngày hôm qua.webp",
    },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
    // {
    //     id:,
    //     name:,
    //     singer:,
    //     path:,
    //     avatar:,
    // },
];

var containerElement = document.querySelector(".container");
var $ = containerElement.querySelector.bind(containerElement);
var $$ = containerElement.querySelectorAll.bind(containerElement);
const iconPause = "fa-pause";
const iconPlay = "fa-play";
const cd = $(".cd");
const audioElement = $("#audio");
const progress = $("#progress");
const listElement = $(".list");
//  function render bài hát
function renderListMusic(objectMusics) {
    for (ob of objectMusics) {
        if (ob) {
            var divElement = document.createElement("div");
            var listItem = listElement
                .appendChild(divElement)
                .classList.add("list__item");
            divElement.innerHTML = `
            <div class="list__item-avatar">
            <img
                src="${ob.avatar}"
                alt=""
            />
           </div>
          <div class="list__item-info">
            <h3 class="list__item-name">${ob.name}</h3>
            <span class="list__item-singer">${ob.singer}</span>
        </div>
        <div class="list__item-icon">
            <i class="fa-solid fa-ellipsis"></i>
        </div>
        `;
            divElement.setAttribute("data-id", `${ob.id}`);
        }
    }
}
renderListMusic(objectMusics);

// function Scroll
function eventScroll() {
    document.onscroll = function () {
        var cdWidth = 200;
        var scroll = window.scrollY || document.documentElement.scrollTop;
        var value = cdWidth - scroll;
        if (value <= 5) {
            cd.style.width = 0;
            cd.style.height = 0;
        } else {
            cd.style.width = value + "px";
            cd.style.height = value + "px";
            cd.style.opacity = value / cdWidth;
        }
    };
}
eventScroll();

// thanh chạy % audio
function runAudio() {
    var value;
    audioElement.ontimeupdate = function () {
        // currentTime là thời lượng hiện tại đã chạy được
        // duration là tổng thời gian
        value = Math.floor(
            (audioElement.currentTime / audioElement.duration) * 100
        );
        if (value || value == 0) progress.value = String(value);
    };

    //  gán ngược lại giá trị khi kéo
    progress.onchange = function () {
        audioElement.currentTime =
            (Number(progress.value) / 100) * audioElement.duration;
    };
}
runAudio();
// function Khi hết bài tự next
// function lắng nghe các event trong controls
function handleEvents(musicNow) {
    var btnRepeat = $(".btn-repeat");
    var btnBack = $(".btn-back");
    var btnNext = $(".btn-next");
    var btnRandom = $(".btn-random");
    var pauseElement = $(".btn-pause");

    // PAUSE / PLAY oke
    // set link audio

    audioElement.setAttribute("src", `${objectMusics[musicNow].path}`);
    var iconElement = $(".btn-pause > i");
    // kiểm tra khi next bài mà bài cũ đang hát thì sẽ phát luôn bài mới
    if (iconElement.classList.contains(`${iconPause}`)) {
        audioElement.play();
    }

    // chuyển icon qua pause or play
    pauseElement.onclick = function () {
        if (iconElement.classList.contains(`${iconPlay}`)) {
            iconElement.classList.toggle(`${iconPlay}`);
            iconElement.classList.toggle(`${iconPause}`);
            audioElement.play();
        } else {
            iconElement.classList.toggle(`${iconPlay}`);
            iconElement.classList.toggle(`${iconPause}`);
            audioElement.pause();
        }
    };

    // REPEAT
    btnRepeat.onclick = function () {
        var repeat = btnRepeat.querySelector("i");
        repeat.classList.toggle("pink");
    };

    // BACK oke
    btnBack.onclick = function () {
        var random = btnRandom.querySelector("i");
        if (random.classList.contains("pink")) {
            // số random trong khoảng phần tử bài hát

            var numberRandom;
            do {
                numberRandom = Math.floor(Math.random() * objectMusics.length);
            } while (numberRandom >= musicNow);
            musicNow = numberRandom;
            setPlay(musicNow);
        } else if (musicNow === 0) {
            musicNow = objectMusics.length - 1;
            setPlay(musicNow);
        } else {
            setPlay(--musicNow);
        }
    };
    // NEXT oke
    btnNext.onclick = function () {
        var random = btnRandom.querySelector("i");
        if (random.classList.contains("pink")) {
            // số random trong khoảng phần tử bài hát
            var numberRandom;
            do {
                numberRandom = Math.floor(Math.random() * objectMusics.length);
            } while (numberRandom <= musicNow);
            musicNow = numberRandom;
            setPlay(musicNow);
        } else if (musicNow === objectMusics.length - 1) {
            musicNow = 0;
            setPlay(musicNow);
        } else {
            setPlay(++musicNow);
        }
    };
    // RANDOM oke
    btnRandom.onclick = function () {
        var random = btnRandom.querySelector("i");
        random.classList.toggle("pink");
    };
    // next bài tự động hoặc phát lại
    audioElement.onended = function () {
        var random = btnRandom.querySelector("i");
        var repeat = btnRepeat.querySelector("i");
        if (repeat.classList.contains("pink")) {
            setPlay(musicNow);
            audioElement.play();
        } else if (random.classList.contains("pink")) {
            // số random trong khoảng phần tử bài hát

            var numberRandom;
            do {
                numberRandom = Math.floor(Math.random() * objectMusics.length);
            } while (numberRandom === musicNow);
            musicNow = numberRandom;
            setPlay(musicNow);
        } else if (musicNow === objectMusics.length - 1) {
            musicNow = 0;
            setPlay(musicNow);
        } else {
            setPlay(++musicNow);
        }
    };
}

// function set thông tin cho dashboard  oke
function setDashboard(object) {
    //    object là một thông tin bài hát

    // gán tên bài hát vào các vị trí
    var headerNameMusic = $(".header__name-music");
    headerNameMusic.innerText = object.name;

    // gán ảnh CD
    var cdElement = $(".cd > img");
    cdElement.setAttribute("src", `${object.avatar}`);
}

// function active music
function activeMusic(object) {
    setDashboard(object);
    // remove active
    var deleteActive = $(".list__item.active");
    if (deleteActive) {
        deleteActive.classList.remove("active");
    }
    // set active
    var listItems = $$(".list__item");
    var setActive = listItems[object.id];
    setActive.classList.add("active");
}

// function chạy 1 bài hát nào đó
function setPlay(musicNow = 0) {
    // set bài hát hiện tại
    activeMusic(objectMusics[musicNow]);
    handleEvents(musicNow);
}

// function choose music  oke
function chooseMusic() {
    //chọn bài hát
    var listItems = $$(".list__item");
    var itemElements = Array.from(listItems);
    itemElements.forEach(function (itemElement) {
        itemElement.onclick = function () {
            let itemId = Number(itemElement.getAttribute("data-id"));
            musicNow = itemId;
            setPlay(musicNow);
        };
    });
}

// function quay cd khi audio phát và pause
function rotateAnimate() {
    var cdThumb = cd.querySelector("img");
    const cdThumbAnimate = cdThumb.animate(
        {
            transform: "rotate(360deg)",
        },
        {
            duration: 10000,
            iterations: Infinity,
        }
    );
    cdThumbAnimate.pause();

    // khi dừng thì dừng quay
    audioElement.onpause = function () {
        cdThumbAnimate.pause();
    };
    audioElement.onplay = function () {
        cdThumbAnimate.play();
    };
}

// function biên dịch chương trình chính oke
function start() {
    setPlay();
    chooseMusic();
    rotateAnimate();
}
start();
