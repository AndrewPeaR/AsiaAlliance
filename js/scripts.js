const allLangs = ['ru-RU', 'en', 'ch']
const select = document.querySelector('select')

// Установка языка по умолчанию. Изначально стоит EN
// console.log(navigator.language)
let currentLang = localStorage.getItem('language') || navigator.language || 'en'
select.value = localStorage.getItem('language') || navigator.language || 'en'

const langButton = document.querySelectorAll("[data-lang]")

const currentPathname = window.location.pathname
let currentTextObject = {}

function checkPagePathname() {
    switch (currentPathname) {
        case '/index.html':
            currentTextObject = someObj
            break
        case '/about.html':
            currentTextObject = anotherObj
            break
        default:
            currentTextObject = {}
            break
    }
    // console.log(currentPathname)
}
checkPagePathname()

function changeLanguage() {
    for (const key in currentTextObject){
        const elem = document.querySelector(key)
        if(elem)
            elem.innerHTML = currentTextObject[key][currentLang]
    }
}
changeLanguage()

select.addEventListener('change', (event) =>{
    currentLang = select.value
    localStorage.setItem('language', select.value)
    changeLanguage()
})
