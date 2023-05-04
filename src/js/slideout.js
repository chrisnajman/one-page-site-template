export const reveal = () => {
  const toggleMainContent = document.querySelector(".content-main")
  const toggleAsideContent = document.querySelector(".content-aside")
  const toggleOpenClose = document.querySelector("[data-open-close]")

  toggleMainContent.classList.toggle("content-main-shrink")
  toggleAsideContent.classList.toggle("content-aside-grow")
  toggleOpenClose.innerText = toggleOpenClose.innerText === "+" ? "-" : "+"
}

export const revealbutton = document.querySelector("[data-glossary-button]")

revealbutton.addEventListener("click", () => {
  reveal()
})
