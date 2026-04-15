(function(){
  var nav=document.getElementById('nav');
  var toggle=document.getElementById('navToggle');
  if(nav){
    var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>20)};
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  }
  if(toggle){
    toggle.addEventListener('click',function(){
      var open=nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded',open?'true':'false');
    });
    document.querySelectorAll('#navlinks a').forEach(function(a){
      a.addEventListener('click',function(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');});
    });
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{rootMargin:'0px 0px -10% 0px',threshold:.08});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
  }else{
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in');});
  }
  var inquiry=document.getElementById('inquiry-form');
  if(inquiry){
    inquiry.addEventListener('submit',function(e){
      e.preventDefault();
      var btn=inquiry.querySelector('button[type=submit]');
      btn.textContent="Thank you — we'll be in touch.";
      inquiry.reset();
    });
  }
})();
