"use strict";const body=document.querySelector(".body"),title=document.querySelector(".page__title"),subtitle=document.querySelector(".page__subtitle"),footer=document.querySelector(".footer");function changeBg(s){body.classList="",title.classList.remove("page__title"),title.classList.add("hidden"),subtitle.classList.remove("page__subtitle"),subtitle.classList.add("hidden"),footer.classList.remove("footer"),footer.classList.add("hidden"),"a"===s.key?body.classList.toggle("bg-a"):"b"===s.key?body.classList.toggle("bg-b"):"c"===s.key?body.classList.toggle("bg-c"):"d"===s.key?body.classList.toggle("bg-d"):"e"===s.key?body.classList.toggle("bg-e"):"f"===s.key?body.classList.toggle("bg-f"):"g"===s.key?body.classList.toggle("bg-g"):"h"===s.key?body.classList.toggle("bg-h"):"i"===s.key?body.classList.toggle("bg-i"):"j"===s.key?body.classList.toggle("bg-j"):"k"===s.key?body.classList.toggle("bg-k"):"l"===s.key?body.classList.toggle("bg-l"):"m"===s.key?body.classList.toggle("bg-m"):"n"===s.key?body.classList.toggle("bg-n"):"o"===s.key?body.classList.toggle("bg-o"):"p"===s.key?body.classList.toggle("bg-p"):"q"===s.key?body.classList.toggle("bg-q"):"r"===s.key?body.classList.toggle("bg-r"):"s"===s.key?body.classList.toggle("bg-s"):"t"===s.key?body.classList.toggle("bg-t"):"u"===s.key?body.classList.toggle("bg-u"):"v"===s.key?body.classList.toggle("bg-v"):"w"===s.key?body.classList.toggle("bg-w"):"x"===s.key?body.classList.toggle("bg-x"):"y"===s.key?body.classList.toggle("bg-y"):"z"===s.key?body.classList.toggle("bg-z"):(body.classList.add("body"),title.classList.remove("hidden"),title.classList.add("page__title"),subtitle.classList.remove("hidden"),subtitle.classList.add("page__subtitle"),footer.classList.add("footer"))}document.addEventListener("keydown",changeBg);