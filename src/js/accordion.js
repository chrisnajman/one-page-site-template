// export const accordion = document.addEventListener("click", e => {
//   // Putting the event listener on the document allows for multiple accordions on the same page.

//   // Return out of the function if e.target is NOT [data-accordion-button]
//   if (!e.target.matches("[data-accordion-button]")) return

//   // Open and close accordion content by toggling the 'show' class :
//   // Get the accordion wrapper
//   const accordionWrapper = e.target.closest("[data-accordion-wrapper]")

//   // Get the accordion body
//   const accordionBody = accordionWrapper.querySelector("[data-accordion-body]")

//   // toggle show class
//   accordionBody.classList.toggle("show")

//   // Toggle the button symbol
//   e.target.innerText =
//     e.target.innerText === "[show more ...]"
//       ? "[show less ...]"
//       : "[show more ...]"
// })
const accordionButtons = document.querySelectorAll(".accordion__button")
const accordionSections = document.querySelectorAll(".accordion__section")

accordionSections.forEach(section => {
  section.setAttribute("aria-hidden", true)
  section.classList.remove("open")
})

accordionButtons.forEach(button => {
  button.setAttribute("aria-expanded", false)

  const expanded = button.getAttribute("aria-expanded")
  const number = button.getAttribute("id").split("-").pop()

  const associatedSection = document.querySelector(
    `#accordion-section-${number}`
  )

  button.addEventListener("click", () => {
    button.classList.toggle("expanded")
    associatedSection.classList.toggle("open")
    if (button.classList.contains("expanded")) {
      button.setAttribute("aria-expanded", true)
      associatedSection.setAttribute("aria-hidden", false)
    } else {
      button.setAttribute("aria-expanded", false)
      associatedSection.setAttribute("aria-hidden", true)
    }
  })
})
