// handler - обработчик, будет вызван при наступление события с аргументом {}
// subscriber - подписчик
// listener - слушатель
// function 
// {} - сведения о произошедшем событии -> event, ev, e, evt

const sm = document.getElementById("small")

function onClickHandler() {
    alert("hey!!!")
}
// sm.onclick = onClickHandler // событие

sm.addEventListener('click', onClickHandler) // функция
sm.removeEventListener('click', onClickHandler) 

