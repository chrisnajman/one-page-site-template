export const modal = document.querySelector("#modal")
export const closeModalBtn = document.querySelector("#close-modal-btn")
export const overlay = document.querySelector("#overlay")
export const main = document.querySelector("#main")

window.addEventListener("load", () => {
  modal.classList.add("open")
  overlay.classList.add("open")
  overlay.setAttribute("aria-hidden", "false")
  main.setAttribute("aria-hidden", "true")
})

export const closeModal = () => {
  modal.classList.remove("open")
  overlay.classList.remove("open")
  overlay.setAttribute("aria-hidden", "true")
  main.setAttribute("aria-hidden", "false")
}

closeModalBtn.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)
