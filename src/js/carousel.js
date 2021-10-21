/**
 *
 Reset slides (return to first slide)

 */
const cardsReset = document.querySelector(".cards-reset")
const imageCards = document.querySelectorAll(".card-image")

const slides = document.querySelectorAll(".slides")

const resetCards = () => {
  for (let i = 0; i < imageCards.length; i++) {
    if (imageCards[i].classList.contains("hide")) {
      imageCards[i].classList.remove("hide")
    }
  }
}

cardsReset.addEventListener("click", () => {
  resetCards()
  currentSlide(1)
  slidesContainerMarginBottom()
})

/**
  Slideshow
 */

let slideIndex = 1
showSlides(slideIndex)

const plusSlides = n => {
  showSlides((slideIndex += n))
}

const currentSlide = n => {
  showSlides((slideIndex = n))
}

const previousSlide = document.querySelector(".slides-prev")
previousSlide.addEventListener("click", e => {
  e.preventDefault()
  plusSlides(-1)
  slidesContainerMarginBottom()
})

const nextSlide = document.querySelector(".slides-next")
nextSlide.addEventListener("click", e => {
  e.preventDefault()
  plusSlides(1)
  slidesContainerMarginBottom()
})

function showSlides(n) {
  let i

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide")
    slides[i].classList.remove("show")
  }

  slides[slideIndex - 1].classList.add("show")
  slides[slideIndex - 1].classList.remove("hide")

  const slideNumber = document.querySelector(".slide-number")
  slideNumber.textContent = n
  const slidesTotal = document.querySelector(".slide-total")
  slidesTotal.textContent = slides.length

  /**
   * Disappear prev button on slide 1 and next button on slide last
   */

  const previousButton = document.querySelector(".previous")
  if (n === 1) {
    previousButton.setAttribute("disabled", "true")
    previousButton.classList.add("slides-button-disabled")
  } else {
    previousButton.removeAttribute("disabled")
    previousButton.classList.remove("slides-button-disabled")
  }

  const nextButton = document.querySelector(".next")
  if (n >= slides.length) {
    nextButton.setAttribute("disabled", "true")
    nextButton.classList.add("slides-button-disabled")
  } else {
    nextButton.removeAttribute("disabled")
    nextButton.classList.remove("slides-button-disabled")
  }

  // Only show 'Reset' button after slide 2
  if (n > 1) {
    cardsReset.style.display = "block"
  } else {
    cardsReset.style.display = "none"
  }
}

/*
  'slidesContainerMarginBottom' addresses the problem of:
  1: Slide caption overflowing into following content (as it's positioned absolutely)
  2: Varying slide caption number of words.

  The solution is to add a margin bottom to the slide container equal to the current
  height of the caption plus 2rem.

  Note: the slidesContainerMarginBottom function is called four times:
  In the global scope, in previousSlide, nextSlide and cardsReset event listeners.

*/
const slidesContainerMarginBottom = () => {
  // Loop through the 'slides' item which contains the 'picture' and the caption
  slides.forEach(item => {
    // Check to see if 'slides' item has the class 'show' (and is therefore the current picture/caption combo)
    if (item.classList.contains("show")) {
      // Get the caption (which is the second child of the slides item)
      const slidesCaption = item.children[1]

      // Get the height of the caption (in pixels)
      const slidesCaptionHeight = slidesCaption.clientHeight

      // Convert the caption height to rems and add 2 more. (The extra 2 rems will separate the slide container from following content)
      const slidesContainerMargin = slidesCaptionHeight / 16 + 2

      // Get the slides container and apply the margin bottom to it
      slidesCaption.closest(
        ".slides-container"
      ).style.marginBottom = `${slidesContainerMargin}rem`
    }
  })
}

slidesContainerMarginBottom()

export {
  cardsReset,
  imageCards,
  slides,
  resetCards,
  slideIndex,
  plusSlides,
  showSlides,
  currentSlide,
  previousSlide,
  nextSlide,
  slidesContainerMarginBottom,
}
