document.querySelectorAll('.faq-btn').forEach(function(btn){
  btn.addEventListener('click',function(){
    var item=btn.closest('.faq-item'),isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');i.querySelector('.faq-btn').setAttribute('aria-expanded','false');});
    if(!isOpen){item.classList.add('open');btn.setAttribute('aria-expanded','true');}
  });
});
