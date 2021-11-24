import "../sass/style.scss"
window.onload = function () {
  // Javascript disabled
  const html = document.querySelector("html")
  html.classList.remove("no-js")

  // See carousel.js
  slidesContainerMarginBottom()
}

import "./accordion"
import "./modal"
import "./slideout"
import slidesContainerMarginBottom from "./carousel"
