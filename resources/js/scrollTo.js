const buttonBackToTo = document.getElementById('btn-back')

function scrollToTop() {
  const scrollY = window.scrollY
  if (scrollY <= 0) {
    return buttonBackToTo.setAttribute('style', "display: none")
  }
  buttonBackToTo.removeAttribute('style')
  buttonBackToTo.addEventListener("click", () => {
    window.scrollTo(
      {
        top     : 0,
        behavior: "smooth"
      })
  })
}

window.addEventListener("scroll", scrollToTop)
