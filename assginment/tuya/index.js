window.onload = function(){

  /*轮播切换效果*/
  var images= document.querySelector('.content-wrap .content .content_top .loop ul')
  var image= document.querySelectorAll('.content-wrap .content .content_top .loop ul li')
  var colors = document.querySelector('.content-wrap .content .content_down ul')
  var color = document.querySelectorAll('.content-wrap .content .content_down ul li')
  var cards = document.querySelector('.content-wrap .content .content_top .cards-hidden .cards')

  colors.addEventListener('mouseover',function(ev){
    var target = ev.target
    var index = target.dataset.index-1
    for(var i= 0;i<=color.length-1;i++){
      color[i]. classList.remove('active')
    }
    if(target.nodeName === "LI"){
      target.classList.add('active')
      images.style.left = -index*600+"px"
      // image[index].style.opacity = 1
      target.style.transition = " .5s"
      cards.style.top = -index*246+"px"
    }
  })

  /*获取滚动条的位置*/
  var scrollTop
  var header = document.getElementById('header')
  if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFun,false);
  }
  window.onscroll = scrollFun
  function scrollFun(){
    scrollTop = document.documentElement.scrollTop||document.body.scrollTop
    if(scrollTop>0){
      header.classList.add('active')
    }else{
      header.classList.remove('active')
    }
  }

  /*头部输入框动态效果*/
  var search = document.querySelector('.header .head_content .right .search input ')
  search.onclick= function(){
    this.classList.add('active')
  }
  search.onblur= function(){
    this.classList.remove('active')
  }

  /*拖拽*/
  var lis = document.querySelectorAll('.content-cards .cards .card')
  for(var i=0;i<lis.length;i++){
    lis[i].ondragstart = function (ev){
      ev.dataTransfer.setData('liNodeId',ev.target.id)
    }
    lis[i].ondragover = function (ev){
      ev.preventDefault()
    }
    lis[i].ondrop = function (ev){
      ev.preventDefault()
      var data = ev.dataTransfer.getData('liNodeId')

      if(ev.target.parentNode.nodeName ==='UL' ){
        ev.target.parentNode.insertBefore(document.getElementById(data),ev.target)
        console.log(ev.target.nodeName+"111111111111");
      }else if(ev.target.nodeName ==='DIV' ){
        ev.target.parentNode.parentNode.insertBefore(document.getElementById(data),ev.target.parentNode)
        console.log(ev.target.parentNode.nodeName+"22222222222222");
      }else if(ev.target.nodeName ==='IMG' ){
        ev.target.parentNode.parentNode.parentNode.insertBefore(document.getElementById(data),ev.target.parentNode.parentNode)
        console.log(ev.target.parentNode.nodeName+"3333333333333333");
      }
    }
  }
}

