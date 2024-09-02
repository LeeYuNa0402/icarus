$(document).ready(function () {

    function secTop() { 
        var sec0H = $('#main').offset().top - $(window).height() / 5;
        var sec1H = $('#sec1').offset().top - $(window).height() / 5;
        var sec2H = $('#sec2').offset().top - $(window).height() / 5;
        var sec3H = $('#sec3').offset().top - $(window).height() / 5;
        var sec4H = $('#sec4').offset().top - $(window).height() / 5;
        return [sec0H, sec1H, sec2H, sec3H, sec4H];
    };
    function hasScrolled() {
        var cp = $(window).scrollTop();
        var secTops = secTop();
        if (cp < secTops[1]) {
            var i = 0;
        } else if (cp >= secTops[1] && cp < secTops[2]){ 
            var i = 1;
        } else if (cp >= secTops[2] && cp < secTops[3]){
            var i = 2;
        } else if (cp >= secTops[3] && cp < secTops[4]){
            var i = 3;
        } else if (cp >= secTops[4]){
            var i = 4;
        }
        switch (i) {
            case 0 :
                lnbLi(i);
                break;
  
            case 1 :
                lnbLi(i);
                break;
  
            case 2 :
                lnbLi(i);
                break;
  
            case 3 :
                lnbLi(i);
                break;
  
            case 4 :
                lnbLi(i);
                break;
        }
    }
  
    window.fnGotoSec = function(e){
     var selTop = $(e).offset().top;
     $('html, body').animate({scrollTop: selTop }, 50, 'linear');
  }
  
  $(window).scroll(function() {
     hasScrolled();
  });
  
  function lnbLi(e){ // lnb li on/off
     $('.lnb ul li').removeClass('on');
     $('.event'+e).addClass('on');
  }
  
  $(window).on('resize', function() {
      lnbW = $('.lnb').outerWidth(true);
      hasScrolled();
      winWidth = window.innerWidth;
      setNav();

  });
  

let winWidth = window.innerWidth;
    // /.스크롤

    // header
window.fnToggleNav = function() {
    if(winWidth > 1024){
        $('#header').stop().animate({'right':'0'});
    }

    // 1024보다 작고 on 없을 때
    else if( winWidth <= 1024 && $('#header').hasClass('') == true) {
        $('#header').stop().animate({'right':'0'});
        $('#header').addClass('on');
    }

    // 1024보다 작고 on 있을 때
    else if( winWidth <= 1024 && $('#header').hasClass('on') == true) {
        $('#header').stop().animate({'right':'-260px'});
        $('#header').removeClass('on');
    }
}

// 화면너비 조절
window.setNav = function() {
    if(winWidth > 1024) {
        $('.lnb').css({'right':'5%'});
        $('#header').css({'right':'auto'});

    } else {
        $('.lnb').css({'right':'0'});
        $('#header').css({'right':'-260px'});
    }
}

    // /.header


    // 팝업과 닫기 버튼 변수
    var modal = document.getElementById("yt");
    var close = document.getElementsByClassName("close-yt")[0];
    var videoFrame = document.getElementById("ytURL");

    // 모든 버튼에 이벤트 리스너 추가
    var buttons = document.getElementsByClassName("play-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            var videoId = this.getAttribute("data-video-id");
            videoFrame.src = "https://www.youtube.com/embed/" + videoId; // 영상 ID에 따라 URL 설정
            modal.style.display = "block"; // 팝업 열기
            close.style.display = "block"; // 팝업 열기
        }
    }
    // /. 동영상 열기 팝업

      // 닫기 버튼 클릭 시 팝업 닫기
      close.onclick = function() {
        modal.style.display = "none";
        videoFrame.src = ""; // 팝업 닫을 때 영상 정지
    }

    // 팝업 외부 클릭 시 팝업 닫기
    window.onclick = function(event) {
        if (event.target == close) {
            close.style.display = "none";
            videoFrame.src = ""; // 팝업 닫을 때 영상 정지
        }
    }

   // sec4 슬라이드
   $('.video-slide').on('afterChange', function (event, slick, currentSlide) {
        var currentSlide = slick.slickCurrentSlide() + 1 ;
        // console.log(currentSlide);
    
        $('#sec3').css({'background' : 'url(https://file.valofe.com/Valofe_file/web/icarus/ko/event/magmaphora_2023/images/sec3/sec3-bg'+ currentSlide + '-min.png) no-repeat center/cover'});
    });

// sec4 팝업창
const popup_fellow = document.getElementById('pop_fellow');
const fellowShadow = document.querySelector('.layer-wrap2 .shadow');

window.fnFellowShowPop = function (e) {
    const selCont = "cont" + e;

    popup_fellow.setAttribute('data-fellow', e);
    document.getElementById('fellow_img').setAttribute('src', "./images/sec4/fellow-img" + e + "-min.png?ver=2")
    document.querySelector('.popup-tit').innerText = fellowPopTexts[selCont][0];

    document.querySelector('.layer-wrap2 p').innerText = fellowPopTexts[selCont][1];

    popup_fellow.classList.add('show');
    fellowShadow.classList.add('show');
};

window.fnClosePop = function () {
    popup_fellow.classList.remove('show');
    fellowShadow.classList.remove('show');
}

const fellowPopTexts = {
    "cont1": [
        "환영의 조각 레이올",
        "제가 만든 조각상이에요! 저는 봤어요! 커다란 돌 안에 담겨 있던 검은 늑대의 모습을요! 제가 조각한 순간 살아났고, 환영의 숲쪽으로 도망갔어요!\n" +
        "\n" +
        "- 갈라테야 취조문서 전문-\n" +
        "\n" +
        "새벽무렵의 소동에 대한 참고인으로써 조각 장인 갈라테야를 취조하였다.\n" +
        "다른 목격자들의 진술로는 환영의 숲으로 달려나간 늑대의 색은 푸른색이었다고 하나 그녀는 검은색이라고 주장하였다.\n" +
        "추가로 자신이 조각한 조각상이라는 허무맹랑한 이야기로 인하여 그녀의 제자 오타쿤의 취재를 앞두고 있었으나 장인의 정신 이상 증상으로 확인, 사건은 종결 되었다.",
    ],
    "cont2": [
        "멸화의 베아투스",
        "과거 데모닉 스톤을 만든 전설의 크로쿤의 펠로우 멸화의 베아투스.\n" +
        "모든 것을 녹여버리는 엄청난 화력을 본 크로쿤들은 존경을 담아 멸화라는 이명을 붙였다.\n" +
        "\n" +
        "이후 행적은 베아투스가 주인 대신 마신의 저주를 받아, 환영의 숲 너머로 사라졌다는 것이다.\n" +
        "데모닉 스톤 조각이 몸에 박혀 영겁의 시간 동안 되풀이 되는 고통을 홀로 견디고 있을 그를 구원할 자가 있을지…\n" +
        "\n" +
        "그의 주인이었던 전설의 크로쿤은 그 답을 알고 있을 것이다.",
    ],
    "cont3": [
        "저주받은 베아투스",
        "비통으로 가득찬 전설의 크로쿤의 목소리는 참혹한 전쟁의 끄트머리에서 울려퍼졌다.\n" +
        "오오 나의 친우 베아투스여 어찌하여 모습이 변하였나..\n" +
        "\n" +
        " 대신 마기를 온몸으로 받아낸 친구여. 저주받아 사라진 내 친구여.. 영원히 나를 용서하지 말게..\n" +
        "총명했던 자네의 금빛 눈동자는 참혹하게 죽어간 내 동료들의 피와 같은 색으로 물들었네.\n" +
        "\n" +
        "어디서부터 잘못된 것일까. 너의 목걸이의 끈이 마지막 전쟁의 순간 끊어졌을 때부터였을까. \n" +
        "환영의 숲으로 홀연이 사라진 내 친우여. 제발 날 쉼없이 원망해주게..\n" +
        "평생에 걸쳐 네 저주를 풀기 위해 널 찾아다니겠네.",
    ],
    "cont4": [
        "이름 없는 말",
        "극비자료! 이 실험 자료는 사용 되어서는 안된다. \n" +
        "명심하고 다음장을 넘기도록 해라.\n" +
        "만약 그를 만들어내고 말았다면 몇 가지 지켜야 할 수칙이 있다.\n" +
        "\n" +
        "첫번째, 그가 생전에 어떤 이름을 가졌다하여도 그 이름을 부르지 말아야 한다.\n" +
        "두번째, 나이트메어에게 데려가서는 안된다. 그가 스스로의 모습을 깨닫기 전에.\n" +
        "\n" +
        "명심하라. 이는 해서는 안될 실험이다.\n" +
        "메드사틴 그 자의 기억을 지워 내쫓았으니 실험 자료는 폐기하도록 한다.",
    ],
    "cont5": [
        "루브롬",
        "크로쿤들이 작업하고 버린 찌꺼기 광석이 펠로우의 모습으로 변했다는 정설이 있다.\n" +
        "마그마포라의 크로쿤들이 장인으로 인정을 받기 위해서는 반드시 루브롬을 길들여야만 한다고 한다.\n" +
        "\n" +
        "\"크로쿤들이 아주 아끼는 펠로우로서 길거리 어디에서나 볼 수 있으며, 대체로 마그마포라의 생물들이 포악한 것에 비해 상대가 공격해오지 않는 이상 공격을 가하지 않을 정도로 순한 성격이다.\n" +
        "\n" +
        "루브롬 길들이기 지침서를 보면, 붉은숲에 거주하는 루브롬을 길들이기 위해서는 루브롬 협회에서 만든 마그마크림을 등에 올라타 천천히 발라줘야 한다고 한다. 마을 게시판을 확인해보는 것도 좋을 것이다.\" ",

    ],
    "cont6": [
        "마티틀",
        "마튜드가 먼저인가 마티틀이 먼저인가. 마그마포라에서 항상 크게 대두되고 있는 주제중에 하나이다.\n" +
        "\n" +
        "마그마포라 대륙이 생성된 이래로 계속 된 두 집단의 영역 다툼은 주민들에게도 익숙한 광경이다.\n" +
        "\n" +
        "만약 둘이 공존하기로 결정을 내렸다면 누구보다 무서운 집단이 될 것은 자명한 일이다.\n" +
        "\n" +
        "최근 둘의 공존을 기대하는 마그마포라의 주민 마멜씨가 의견을 제시하였으나 다소 과격한 방법이 사용되어 해당 저서에서는 다루지 않도록 하겠다.\n",
    ],
    "cont7": [
        "라세트라 쿰파노",
        "등에서 흘러내린 마그마가 굳어 만들어진 단단한 외피는 어떤 날붙이로도 쉽게 뚫지 못하는 방어력을 가지고 있다.\n" +
        "일견에서는 리자드족이 돌보던 도마뱀이 자취를 감추었다고 한다.\n" +
        "\n" +
        "이 후 거대해진 모습으로 폐쇄된 광산 위에 나타난 쿰파노.\n" +
        "\n" +
        "모습을 변화시킬만큼 강한 마기를 주입받아 이지를 잃은 쿰파노를 길들이기 위해서는\n" +
        "먼저 폐쇄된 광산 내부에서 연구 기록을 찾아 해독제를 만드는 것이 우선일 것이다.",
    ],
    "cont8": [
        "이그네이브",
        "마티틀과 마튜드가 싸우다 서로 지쳤을 때 약해진 쪽을 잡아먹기 위해 주변을 배회하고 있다. \n" +
        "이그네이브의 지능은 어린아이의 지능과 비슷할정도로 높다고 한다.\n" +
        "\n" +
        "최근에는 이그네이브의 날개짓에는 싸움을 부추기는 효과가 있다는 것이 밝혀졌다.\n" +
        "\n" +
        "만약 길들이기를 시도하려 한다면 마티틀의 봉인석으로 꾀어낼 수 있을 것이다.",
    ],
    "cont9": [
        "로퍼스",
        "마그마포라의 온도가 급격하게 높아지면서, 많은 생명체들이 멸종할 때 로퍼스들은 어떻게든 살아남았다.\n" +
        "\n" +
        "그들은 풍요로웠던 과거를 뒤로 하고 혹독한 환경에서 살아남고자 치열한 하루하루를 보내고 있다.\n" +
        "\n" +
        "주변에 먹을 수 있는 것들이 거의 존재하지 않으므로 마을에서 나오는 부산물을 기대하는 로퍼스 무리들은 처절하다 못해 현대 사회의 이면과 교훈을 가져다주는 존재이다.\n" +
        "먹이를 주어 길들일 수 있을 것으로 보이나, 어느누구도 관심도, 시도조차 않았다는 점이 가슴 아픈 점이다.",
    ],
    "cont10": [
        "붉은 화염의 라파예트",
        "폐쇄된 광산에서는 광부들 사이에서 전해지는 오래 된 소문이 있었다.\n" +
        "\n" +
        "'천장이 갑자기 날아갔다. 어젯밤 있었던 돌덩이가 하루 아침에 사라졌다.' \n" +
        " 등의 소문은 이내 붉은색의 천장과 붉은색의 돌을 본 자는 그 날 운수가 좋다는 이야기가 되었다. \n" +
        "\n" +
        "광산의 수호자.. 해를 보는 시간이 짧았던 광부들에게 그는 빛 그 자체였다. \n" +
        "\n" +
        "그는 오래된 크로쿤족의 언어 태양이라는 이름의 라파예트라는 이름을 받아 오늘도 광산 안을 날아다니고 있다. \n" +
        "강력한 영웅급의 폐쇄된 광산의 주인이 그를 길들일 수 있는 보주를 갖고 있다 전해진다.",

    ],
    "cont11": [
        "푸른 화염의 아드리옌",
        "차가움과 뜨거움이 공존 할 수 있을까? 아드리옌의 탄생은 그 물음에서부터 시작했다. \n" +
        "\n" +
        "\"그동안 배척 받아왔던 연구원들에게 있어서 성공적인 결과물로 등장한 아드리옌은 희망 그 자체였다.\n" +
        "그 희망을 담아 아드리옌은 두 가지 색의 불꽃을 반짝이며 오늘도 누구보다 빠르게 폐쇄된 광산 내부를 질주하고 있다.\n" +
        "강력한 영웅급의 폐쇄된 광산의 주인이 그를 길들일 수 있는 보주를 갖고 있다 전해진다.\"",
    ],
    "cont12": [
        "악몽의 아라크네",
        "쿠로디언. 강력한 힘과 아름다운 외모의 그녀는 잘못된 사랑을 택하여 결국 죽음을 맞이하였다.\n" +
        "\n" +
        "묻겠다. 세상에서 가장 위대하고 아름다운 것은 무엇인가?\n" +
        "모든 책들과 선인들은 그것은 사랑이라 외쳤다.\n" +
        "\n" +
        "그녀를 향한 사랑을 품었던 한 연구자에 의해, 또한 그녀는 사랑하는 그 분 사란트님을 위해 다시 돌아왔다. \n" +
        "\n" +
        "위대한 사랑. 비록 아름다운 모습은 변하였으나 강력한 그녀의 마음을 원하는 자들이 여전히 존재한다. \n" +
        "영웅급으로 강력한 그녀가 가진 보주를 얻는다면 그녀의 마음을 얻을 수 있을 것이다.",
    ]
}

    //slick
    $('.tab-cont').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
    });

    $('#sec3 .video-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        // centerMode: true,
    });


   //     메인 애니메이션
   /************* firework *****************/
   function Particles(){
    //particle colors (can adds)
    this.colors = [
        '211, 194, 152',
        '255, 241, 193',
        // '251, 139, 52'
    ]
    //adds gradient to particles on true
    this.blurry = true;
    //adds white border
    this.border = false;
    //particle radius min/max
    this.minRadius = 2;
    this.maxRadius = 8;

    //particle opacity min/max
    this.minOpacity = .005;
    this.maxOpacity = .5;

    //particle speed min/max
    this.minSpeed = 1;
    this.maxSpeed = 5;

    //frames per second
    this.fps = 60;
    //number of particles
    this.numParticles = 50;
    //required canvas variables
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
}

Particles.prototype.init = function(){
    this.render();
    this.createCircle();
}

/* generates random number between min and max values
 - @param  {number} min value
 - @param  {number} max malue
 - @return {number} random number between min and max
 - @method _rand
 */
Particles.prototype._rand = function(min, max){
    return Math.random() * (max - min) + min;
}

/* Sets canvas size and updates values on resize */
Particles.prototype.render = function(){
    var self = this,
        wHeight = $(window).height(),
        wWidth = $(window).width();

    self.canvas.width = wWidth;
    self.canvas.height = wHeight;

    $(window).on('resize', self.render);
}

/* Randomly creates particle attributes */
Particles.prototype.createCircle = function(){
    var particle = [];

    for (var i = 0; i < this.numParticles; i++) {
        var self = this,
            color = self.colors[~~(self._rand(0, self.colors.length))];

        particle[i] = {
            radius    : self._rand(self.minRadius, self.maxRadius),
            xPos      : self._rand(0, canvas.width),
            yPos      : self._rand(0, canvas.height),
            xVelocity : self._rand(self.minSpeed, self.maxSpeed),
            yVelocity : self._rand(self.minSpeed, self.maxSpeed),
            color     : 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
        }

        //once values are determined, draw particle on canvas
        self.draw(particle, i);
    }
    //...and once drawn, animate the particle
    self.animate(particle);
}

/* Draws particles on canvas
 - @param  {array} Particle array from createCircle method
 - @param  {number} i value from createCircle method
 - @method draw
 */
Particles.prototype.draw = function(particle, i){
    var self = this,
        ctx = self.ctx;

    if (self.blurry === true ) {
        //creates gradient if blurry === true
        var grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius/1.25);

        grd.addColorStop(1.000, particle[i].color);
        grd.addColorStop(0.000, 'rgba(255, 77, 0, .3)');
        ctx.fillStyle = grd;
    } else {
        //otherwise sets to solid color w/ opacity value
        ctx.fillStyle = particle[i].color;
    }

    if (self.border === true) {
        ctx.strokeStyle = '#ff442b';
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 0.8 * Math.PI, false);   // 원형 2 * Math.PI
    ctx.fill();
    ctx.shadowColor = "#ff4c00";
    ctx.shadowBlur = 4;
}

/* Animates particles
 - @param  {array} particle value from createCircle & draw methods
 - @method animate
 */
Particles.prototype.animate = function(particle){
    var self = this,
        ctx = self.ctx;

    setInterval(function(){
        //clears canvas
        self.clearCanvas();
        //then redraws particles in new positions based on velocity
        for (var i = 0; i < self.numParticles; i++) {
            particle[i].xPos += particle[i].xVelocity;
            particle[i].yPos -= particle[i].yVelocity;

            //if particle goes off screen call reset method to place it offscreen to the left/bottom
            if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
                self.resetParticle(particle, i);
            } else {
                self.draw(particle, i);
            }
        }
    }, 1000/self.fps);
}

/* Resets position of particle when it goes off screen
 - @param  {array} particle value from createCircle & draw methods
 - @param  {number} i value from createCircle method
 - @method resetParticle
 */
Particles.prototype.resetParticle = function(particle, i){
    var self = this;
    var random = self._rand(0, 1);

    if (random > .5) {
        // 50% chance particle comes from left side of window...
        particle[i].xPos = -particle[i].radius;
        particle[i].yPos = self._rand(0, canvas.height);
    } else {
        //... or bottom of window
        particle[i].xPos = self._rand(0, canvas.width);
        particle[i].yPos = canvas.height + particle[i].radius;
    }
    //redraw particle with new values
    self.draw(particle, i);
}

/* Clears canvas between animation frames */
Particles.prototype.clearCanvas = function(){
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

var particle = new Particles().init();

/************* ./particle *****************/
 });
 
 