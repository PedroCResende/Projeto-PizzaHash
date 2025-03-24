
  const menuBtn = document.getElementById('menu-btn');
  const navBar = document.querySelector('.nav-bar');

  menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('active');
  });

