document.querySelector('.types').addEventListener('click', () => {
  document.querySelector('.types').classList.add('click-choose')
  document.querySelector('.essence').classList.remove('click-choose')
  document.querySelector('.content-types').classList.remove('hidden')
  document.querySelector('.content-essence').classList.add('hidden')
})

document.querySelector('.essence').addEventListener('click', () => {
  document.querySelector('.essence').classList.add('click-choose')
  document.querySelector('.types').classList.remove('click-choose')
  document.querySelector('.content-essence').classList.remove('hidden')
  document.querySelector('.content-types').classList.add('hidden')
})

const buttonMore = document.querySelectorAll('.more')

for (let i = 0; i < buttonMore.length; i++) {
  buttonMore[i].addEventListener('click', () => {
    document.querySelector(`.description-${i + 1} > .p1`).classList.add('hidden')
    document.querySelector(`.description-${i + 1} > .more`).classList.add('hidden')
    document.querySelector(`.description-${i + 1} > .p2`).classList.remove('hidden')
    document.querySelector(`.description-${i + 1} > .in-short`).classList.remove('hidden')
  })
}

const buttonInShort = document.querySelectorAll('.in-short')

for (let i = 0; i < buttonInShort.length; i++) {
  buttonInShort[i].addEventListener('click', () => {
    document.querySelector(`.description-${i + 1} > .p1`).classList.remove('hidden')
    document.querySelector(`.description-${i + 1} > .more`).classList.remove('hidden')
    document.querySelector(`.description-${i + 1} > .p2`).classList.add('hidden')
    document.querySelector(`.description-${i + 1} > .in-short`).classList.add('hidden')
  })
}
