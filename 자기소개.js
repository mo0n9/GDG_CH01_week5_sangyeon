function setNightMode() {
    document.querySelector('body').style.backgroundColor = 'rgb(30,30,30)';
    document.querySelectorAll('*').forEach(el => el.style.color = 'white');
  }

  function setDayMode() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelectorAll('*').forEach(el => el.style.color = 'rgb(30,30,30)');
  }