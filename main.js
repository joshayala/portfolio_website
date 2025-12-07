const toggle = document.querySelector('#dark-mode-toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});
