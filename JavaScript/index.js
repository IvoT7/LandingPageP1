document.addEventListener("DOMContentLoaded", function(){
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;
  function showTestimonial(){
    testimonials.forEach(testimonial =>{
      testimonial.classList.remove("active");
      });
      testimonials[index].classList.add("active");
      index++;
      if(index === testimonials.length){
        index = 0;
      }
      setTimeout(showTestimonial, 5000);
    }
    showTestimonial();
  });

document.addEventListener('DOMContentLoaded', function(){
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(function(navLink){
    navLink.addEventListener('click', function(e){
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if(targetElement){
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '&uarr;';
  scrollToTopBtn.classList.add('fixed', 'bottom-4', 'right-4', 'bg-gray-300', 'text-white', 'p-2', 'rounded-full', 'hidden', 'cursor-pointer' , 'scroll-to-top');
  scrollToTopBtn.style.zIndex = '1000';
  document.body.appendChild(scrollToTopBtn);
  window.addEventListener('scroll', function(){
    if (window.scrollY > 500){
      scrollToTopBtn.classList.remove('hidden');
      }else{
        scrollToTopBtn.classList.add('hidden');
       }
  });

  scrollToTopBtn.addEventListener('click', function(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});