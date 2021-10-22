export const accordion = document.addEventListener("click", e => {
  // Putting the event listener on the document allows for multiple accordions on the same page.

  // Return out of the function if e.target is NOT [data-accordion-button]
  if (!e.target.matches("[data-accordion-button]")) return

  // Open and close accordion content by toggling the 'show' class :
  // Get the accordion wrapper
  const accordionWrapper = e.target.closest("[data-accordion-wrapper]")

  // Get the accordion body
  const accordionBody = accordionWrapper.querySelector("[data-accordion-body]")

  // toggle show class
  accordionBody.classList.toggle("show")

  // Toggle the button symbol
  e.target.innerText =
    e.target.innerText === "[show more ...]"
      ? "[show less ...]"
      : "[show more ...]"
})
