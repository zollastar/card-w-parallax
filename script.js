document.addEventListener('mousemove', function(e) {
    let x = (e.clientX / window.innerWidth) - 0.5;
    let y = (e.clientY / window.innerHeight) - 0.5;
  
    document.documentElement.style.setProperty('--x', x * 2);
    document.documentElement.style.setProperty('--y', y * 2);
  });





  