window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) { // Ajuste este valor para a posição de rolagem desejada
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });
  