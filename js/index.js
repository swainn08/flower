const title = document.querySelector('.title')
const text = `I Have Something For You`

title.innerHTML = "" // reset dulu

for (let i = 0; i < text.length; i++) {
  if (text[i] === 'F') {
    // bikin baris baru pas ketemu F
    title.innerHTML += `<br><span>${text[i]}</span>`
  } else if (text[i] !== ' ') {
    title.innerHTML += `<span>${text[i]}</span>`
  } else {
    title.innerHTML += `<span style="width: 1rem"></span>`
  }
}

const textElements = document.querySelectorAll('.title span')
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3
  element.style.animationDelay = `${randomDelay}s`
})
