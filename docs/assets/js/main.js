"use strict";const body=document.querySelector(".body"),title=document.querySelector(".page__title"),subtitle=document.querySelector(".page__subtitle"),footer=document.querySelector(".footer");function changeBg(s){body.classList="",title.classList.remove("page__title"),title.classList.add("hidden"),subtitle.classList.remove("page__subtitle"),subtitle.classList.add("hidden"),footer.classList.remove("footer"),footer.classList.add("hidden");let t=s.key.toLowerCase();"a"===s.key||"A"===s.key?body.classList.toggle("bg-a"):"b"===t?body.classList.toggle("bg-b"):"c"===t?body.classList.toggle("bg-c"):"d"===t?body.classList.toggle("bg-d"):"e"===t?body.classList.toggle("bg-e"):"f"===t?body.classList.toggle("bg-f"):"g"===t?body.classList.toggle("bg-g"):"h"===t?body.classList.toggle("bg-h"):"i"===t?body.classList.toggle("bg-i"):"j"===t?body.classList.toggle("bg-j"):"k"===t?body.classList.toggle("bg-k"):"l"===t?body.classList.toggle("bg-l"):"m"===t?body.classList.toggle("bg-m"):"n"===t?body.classList.toggle("bg-n"):"o"===t?body.classList.toggle("bg-o"):"p"===t?body.classList.toggle("bg-p"):"q"===t?body.classList.toggle("bg-q"):"r"===t?body.classList.toggle("bg-r"):"s"===t?body.classList.toggle("bg-s"):"t"===t?body.classList.toggle("bg-t"):"u"===t?body.classList.toggle("bg-u"):"v"===t?body.classList.toggle("bg-v"):"w"===t?body.classList.toggle("bg-w"):"x"===t?body.classList.toggle("bg-x"):"y"===t?body.classList.toggle("bg-y"):"z"===t?body.classList.toggle("bg-z"):(body.classList.add("body"),title.classList.remove("hidden"),title.classList.add("page__title"),subtitle.classList.remove("hidden"),subtitle.classList.add("page__subtitle"),footer.classList.add("footer"))}document.addEventListener("keydown",changeBg);