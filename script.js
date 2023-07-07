function changeHeaderAfterScroll() {
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
  
    window.addEventListener('scroll', () => {
      window.scrollY >= navHeight
        ? header.classList.add('scroll')
        : header.classList.remove('scroll')
    })
  }
  changeHeaderAfterScroll() 