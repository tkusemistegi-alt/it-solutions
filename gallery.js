(function(){
  var box=document.getElementById('lightbox');if(!box)return;
  var big=box.querySelector('img'),list=[],i=0;
  function show(n){i=(n+list.length)%list.length;big.src=list[i].dataset.full || list[i].src;big.alt=list[i].alt}
  function close(){box.classList.remove('open')}
  document.querySelectorAll('.shots').forEach(function(row){
    var imgs=[].slice.call(row.querySelectorAll('img'));
    imgs.forEach(function(im,k){im.parentNode.addEventListener('click',function(){list=imgs;show(k);box.classList.add('open')})});
  });
  box.querySelector('.lb-close').onclick=close;
  box.querySelector('.lb-prev').onclick=function(e){e.stopPropagation();show(i-1)};
  box.querySelector('.lb-next').onclick=function(e){e.stopPropagation();show(i+1)};
  box.addEventListener('click',function(e){if(e.target===box)close()});
  document.addEventListener('keydown',function(e){
    if(!box.classList.contains('open'))return;
    if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1);
  });
})();
