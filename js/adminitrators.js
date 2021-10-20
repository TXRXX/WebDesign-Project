const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.rowGra');
  
      if (entry.isIntersecting) {
        square.classList.add('animation-rowGra');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animation-rowGra');
    });
  });
  
  observer.observe(document.querySelector('.main-admin'));