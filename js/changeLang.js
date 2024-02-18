const select = document.querySelector('select')
const allLang = ['en', 'ru', 'ch']

select.addEventListener('change', changeURLLanguage)

// Перенаправить на URL с указанием языка
function changeURLLanguage() {
    let lang = select.value
    location.href = window.location.pathname + '#' + lang
    location.reload()
}

function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substring(1)
    if (!allLang.includes(hash)){
        // Тут хранится язык ПО УМОЛЧАНИЮ, если требуется поменять - менять en после #
        location.href = window.location.pathname + '#en'
        location.reload()
    }
    select.value = hash
    // document.querySelector('.lng-main__content-title').innerHTML = langArr['lng-main__content-title'][hash]
    // document.querySelector('.lng-main__content-text').innerHTML = langArr['lng-main__content-text'][hash]
    
    // Цикл пробегается по всему массиву langArr и заменяется все элементы,
    // Которые там описаны. Там хранится по сути квериСелектор.
    // Все элементы, которые переводятся маркированы lng- в начале названия класса
    for (let key in langArr){
        let elem = document.querySelector(key)
        if(elem)
            elem.innerHTML = langArr[key][hash]
    }
}

changeLanguage()