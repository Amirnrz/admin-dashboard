const sideBar = document.querySelector('aside')
const sideBarOpenBtn = document.querySelector('.open-btn')
const sideBarCloseBtn = document.querySelector('.close-btn')

sideBarOpenBtn.addEventListener('click',() => {
  sideBar.classList.add('open')
})

sideBarCloseBtn.addEventListener('click',() => {
  sideBar.classList.remove('open')
})