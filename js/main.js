console.log("JS 연결됨!");

let currentIndex = 0;
let isSliding = false;

const wrapIndex = (n) => {
    return (n + works.length) % works.length;
}

document.fonts.ready.then(() => {
    document.body.classList.add("fonts-ready");
});

const renderImg = () => {
    
    const prevPrevImg = document.querySelector("#prevPrevImg");
    prevPrevImg.src = works[wrapIndex(currentIndex - 2)].img;
    prevPrevImg.alt = works[wrapIndex(currentIndex - 2)].name;
    
    const prevImg = document.querySelector("#prevImg");
    prevImg.src = works[wrapIndex(currentIndex - 1)].img;
    prevImg.alt = works[wrapIndex(currentIndex - 1)].name;
    
    const currentImg = document.querySelector("#currentImg");
    currentImg.src = works[wrapIndex(currentIndex)].img;
    currentImg.alt = works[wrapIndex(currentIndex)].name;

    const currentImgLink = document.querySelector("#currentImgLink");
    currentImgLink.href = works[wrapIndex(currentIndex)].link;

    const nextImg = document.querySelector("#nextImg");
    nextImg.src = works[wrapIndex(currentIndex + 1)].img;
    nextImg.alt = works[wrapIndex(currentIndex + 1)].name;

    const nextNextImg = document.querySelector("#nextNextImg");
    nextNextImg.src = works[wrapIndex(currentIndex + 2)].img;
    nextNextImg.alt = works[wrapIndex(currentIndex + 2)].name;

};

const renderTxt = () => {
    const name = document.querySelector("#name");
    name.textContent = works[currentIndex].name;

    const nameKo = document.querySelector("#nameKo");
    nameKo.textContent = works[currentIndex].nameKo;

    const client = document.querySelector("#client");
    client.textContent = works[currentIndex].client;

    const intro = document.querySelector("#intro");
    intro.textContent = works[currentIndex].intro;

    const role = document.querySelector("#role");
    role.textContent = works[currentIndex].role;

    const feature = document.querySelector("#feature");
    feature.textContent = works[currentIndex].feature;

    const desc = document.querySelector("#desc");
    desc.textContent = works[currentIndex].desc;
};

const slideWrap = document.querySelector(".slide-wrap");
const txtSlideWrap = document.querySelector(".txt-slide-wrap");

const prevBtn = document.querySelector(".work-prev");
prevBtn.addEventListener("click", () => {
    console.log("prev btn on");
    if (!isSliding) {
        isSliding = true;
        currentIndex = wrapIndex(currentIndex - 1);
        slideWrap.classList.add("slide-down");
        txtSlideWrap.classList.add("txt-slide-down");
    } else {
        console.log("isSliding Lock");
    }
});

const nextBtn = document.querySelector(".work-next");
nextBtn.addEventListener("click", () => {
    console.log("next btn on");
    if (!isSliding) {
        isSliding = true;
        currentIndex = wrapIndex(currentIndex + 1);
        slideWrap.classList.add("slide-up");
        txtSlideWrap.classList.add("txt-slide-up");
        // console.log("next btn on getAnimations:", slideWrap.getAnimations().length, txtSlideWrap.getAnimations().length)
    } else {
        console.log("isSliding Lock");
    }
});

slideWrap.addEventListener("animationend", () => {
    slideWrap.classList.remove("slide-up");
    slideWrap.classList.remove("slide-down");
    renderImg();
    // console.log("sliderWrap off:", slideWrap.getAnimations().length, txtSlideWrap.getAnimations().length);
    if (txtSlideWrap.getAnimations().length === 0 && slideWrap.getAnimations().length === 0) {
        isSliding = false;
    }
});

txtSlideWrap.addEventListener("animationend", (e) => {
    //console.log(e.animationName);
    if (e.animationName === "txt-out-up" || e.animationName === "txt-out-down") {
        renderTxt();
        // console.log("txtSlideWrap.addEventListener:", slideWrap.getAnimations().length, txtSlideWrap.getAnimations().length);
    } else if (e.animationName === "txt-in-up" || e.animationName === "txt-in-down") {
        txtSlideWrap.classList.remove("txt-slide-down");
        txtSlideWrap.classList.remove("txt-slide-up");
        if (txtSlideWrap.getAnimations().length === 0 && slideWrap.getAnimations().length === 0) {
            isSliding = false;
        }

    }
});

//body contents
const work1 = {
    name: "MINIBOOK",
    nameKo: "미니북",
    client: "아이스크림 미디어",
    intro: "교사와 학생을 위한 게이미피케이션 기반 학습 플랫폼",
    role: "기획 보조 | UI·UX 디자인 전반 | BI 외주 관리",
    feature: "문제 은행 | 게이미피케이션 | 문제 편집 | 반응형",
    desc: "미니북은 교사가 디지털 학습 과제를 제작하고, 학생이 모바일로 참여하는 인터랙티브 교실 학습 플랫폼입니다. 코인과 게임을 활용한 보상 시스템으로 학습 참여를 유도하고, 반복 학습이 자연스럽게 이어지는 구조를 설계했습니다.",
    img: "images/works-minibook.webp",
    link: "https://notefolio.net/hausofcraft/456706",
}
const work2 = {
    name: "MATH CANVAS",
    nameKo: "매스 캔버스",
    client: "비상교육",
    intro: "교사와 학생 모두 쉽게 사용할 수 있는 디지털 수학 교구",
    role: "제품 기획 | UI·UX 디자인 | 프로젝트 관리",
    feature: "디지털화 | 교과 과정 | 교사·학생 이중 UX | 유니버설 사용성",
    desc: "매스 캔버스는 출판사와 협업해 설계한 디지털 수학 교구입니다. 물리 교구의 한계를 디지털 환경에서 풀어, 학생은 조작과 반복으로 스스로 개념을 이해하고 교사는 더 직관적으로 설명할 수 있도록 했습니다.",
    img: "images/works-mathcanvas.webp",
    link: "https://notefolio.net/hausofcraft/457593",
}
const work3 = {
    name: "XELF",
    nameKo: "셀프",
    client: "큐리어드",
    intro: "코딩 없이 인터랙티브 콘텐츠를 만드는 HTML5 저작도구",
    role: "제품 기획 | UI·UX 디자인 | 프로젝트 관리",
    feature: "노코드 에디터 | 액션·트리거 인터랙션 | 프레젠테이션·퀴즈·게임 | 클라우드 저장",
    desc: "셀프는 HTML5 기반으로 코딩 없이 인터랙티브 콘텐츠를 만드는 저작도구입니다. 오브젝트에 액션과 트리거를 조합하는 구조로 프레젠테이션, 퀴즈, 게임까지 구현할 수 있으며, 웹 표준 내보내기와 쉬운 UX를 목표로 설계했습니다.",
    img: "images/works-xelf.webp",
    link: "https://notefolio.net/hausofcraft/458108",
}
const work4 = {
    name: "YOUR WISH",
    nameKo: "유어위시",
    client: "유어위시",
    intro: "받는 사람이 직접 선물을 선택하는 기프트 서비스 브랜딩",
    role: "BI 디자인 | 3D 그래픽·모션 | UI·UX 디자인",
    feature: "BI·로고 디자인 | 3D 모션 그래픽 | B2B 비즈니스",
    desc: "유어위시는 받는 사람이 원하는 선물을 직접 선택하는 기프트 서비스입니다. '선물을 주고받는 마음'을 무중력의 3D 그래픽과 별 심벌로 시각화하고, 선물 도착부터 오픈까지의 수신 경험을 BI와 모션 그래픽으로 완성했습니다.",
    img: "images/works-yourwish.webp",
    link: "https://notefolio.net/hausofcraft/316154",
}
const work5 = {
    name: "UCLASS",
    nameKo: "유클래스",
    client: "큐리어드",
    intro: "학습 콘텐츠를 더 스마트하게 만드는 저작·관리 플랫폼",
    role: "제품 기획 | UI·UX 디자인 | 프로모션 디자인",
    feature: "강력한 에디터 | 퀴즈·설문 제작 | 클라우드 기반 관리 | 멀티 디바이스",
    desc: "유클래스는 학습 콘텐츠의 질은 높이고 관리는 간편하게 만드는 저작·관리 플랫폼입니다. 에디터로 퀴즈와 설문까지 제작하고 클라우드로 관리·공유하는 서비스의 브랜드부터 에디터 UI, 프로모션까지 디자인 전반을 진행했습니다.",
    img: "images/works-uclass.webp",
    link: "https://notefolio.net/hausofcraft/290244",
}
const works = [work1, work2, work3, work4, work5];

