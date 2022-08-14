
let flag=false;

let $li=$('.banner ul li')
let $m_img=$('.m_img')
let $m_name=$('.m_name')
$li.on('click',function(){
    /*更改title 以及 class */
    changeToCenter(this);
    changPlayerImg();
    changePlayToPause();
    addRoate();
    musicPlayer(this);
})

function changeToCenter(a){
    let t=$(a).attr('class');//获取当前的class
    let t2=$(a).children('img').attr('class');//获取当前点的size
    // console.log(t2);
    $('.l3').children('img').attr('class',t2)//先把l3下的size改为当前点的size
    $('.l3').attr('class',t);//将l3的class转化为当前的点class
    $(a).attr('class','l3')//再把当前的class变为l3
    $(a).children('img').attr('class','l')
}

function changPlayerImg(){
    let t=$('.l3').attr('title')
    $m_img.children('img').attr('src','.//static/picture/'+t+'.jpg')
    // console.log($m_name.text())
    $m_name.text(t)
}

function changePlayToPause(){
    $('.m_play').attr('title','暂停')
    $('.m_play').attr('class','m_pause')
}

function addRoate(){
    $('.l3').addClass('rotate')
    // console.log("添加完毕")
}

function musicPlayer(a){
    $('.play').attr('src',$(a).attr('datasrc'));
    $('.play').get(0).play();
}


$('body').on('click','.m_play',function(){
    if(!flag){//如果是第一次进页面的话
        flag=true;
        $('.l3').addClass('rotate');
        $('.play').attr('src',$('.l3').attr('datasrc'));
    }
    $('.play').get(0).play();//播放
    $('.l3').removeClass('rotate_pause')
    $('.m_play').attr('class','m_pause')//改变播放按钮的样式
})

$('body').on('click','.m_pause',function(){
    $('.play').get(0).pause();//暂停
    //暂停动画
    $('.l3').addClass('rotate_pause')
    $('.m_pause').attr('class','m_play')//改变播放按钮的样式

})


$('.m_next').on('click',function(){
    let t1=$('.l3').attr('id');
    $('.l3').removeClass('rotate_pause')//移出原来的暂停
    //交换当前播放的音乐和下一首播放的音乐的class
    let t2=parseInt(t1[1]);
    t2++
    if(t2>5){
        t2=1
    }
    console.log(t2)
    t3='#m'+t2;
    changeToCenter(t3)
    console.log("交换完毕")
    musicPlayer('.l3')
    changPlayerImg();
    changePlayToPause();
    addRoate();
})

$('.m_pre').on('click',function(){
    let t1=$('.l3').attr('id');
    $('.l3').removeClass('rotate_pause')//移出原来的暂停
    //交换当前播放的音乐和下一首播放的音乐的class
    let t2=parseInt(t1[1]);
    t2--
    if(t2<1){
        t2=5
    }
    console.log(t2)
    t3='#m'+t2;
    changeToCenter(t3)
    console.log("交换完毕")
    musicPlayer('.l3')
    changPlayerImg();
    changePlayToPause();
    addRoate();
})

let co=true

$('.change').on('click',function(){
    if(co){
        $('.player').animate({'left':'-460px'},1000)
        $('.change').removeClass('change_left')
        $('.change').addClass('change_right')
        co=false
    }else{
        $('.player').animate({'left':'0px'},1000)
        $('.change').removeClass('change_right')
        $('.change').addClass('change_left')
        co=true
    }
    
})

console.log($('.player'))