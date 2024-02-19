const allLangs = ['ru', 'en', 'ch']
const select = document.querySelector('select')

// Установка языка по умолчанию. Изначально стоит EN
// console.log(navigator.language)
let currentLang = localStorage.getItem('language') || checkBrowserLang() || 'en'
select.value = localStorage.getItem('language') || checkBrowserLang() || 'en'

const langButton = document.querySelectorAll("[data-lang]")

const currentPathname = window.location.pathname
// const currentPathname = location.pathname.match(/[^/]*$/)[0]
// const currentPathname = location.pathname.split('/')[location.pathname.split('/').length - 1]
let currentTextObject = {}

// console.log("Pathname win", window.location.pathname)
// console.log("Pathname loc", location.pathname)
console.log("Pathname", currentPathname)
function checkPagePathname() {
    // switch (currentPathname) {
    //     case currentPathname.includes('/index.html'):
    //         currentTextObject = someObj
    //         break
    //     case currentPathname.includes('/about.html'):
    //         currentTextObject = anotherObj
    //         break
    //     default:
    //         currentTextObject = {}
    //         break
    // }
    if(currentPathname.includes('/index.html')){
        currentTextObject = someObj
        return null
    }
    if(currentPathname.includes('/about.html')){
        currentTextObject = anotherObj
        return null
    }
    currentTextObject = {}
    // console.log(currentPathname)
}
checkPagePathname()

function changeLanguage() {
    for (const key in currentTextObject){
        const elem = document.querySelector(key)
        if(elem)
            elem.innerHTML = currentTextObject[key][currentLang]
    }
    // location.reload()
}
changeLanguage()

select.addEventListener('change', () =>{
    currentLang = select.value
    localStorage.setItem('language', select.value)
    changeLanguage()
    location.reload()
})

function checkBrowserLang() {
    const navLang = navigator.language.slice(0, 2).toLowerCase()
    const result = allLangs.some(elem => {
        return elem === navLang
    })

    if(result)
        return navLang
}
console.log("lang", navigator.language.slice(0, 2))
console.log("Check", checkBrowserLang())