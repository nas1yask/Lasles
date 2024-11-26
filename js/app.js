const mobileBlock = document.querySelector('.mobile_block')
const sp = document.querySelector('main header section')
const logo = document.querySelector('main header > a')

sp.addEventListener('click', ()=>{
    mobileBlock.classList.toggle('mobile_active')
    setTimeout(()=>{
        logo.classList.toggle('hide')
    }, 100)
})
