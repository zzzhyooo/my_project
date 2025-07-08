//버튼을 찾은 다음에,

//버튼 클릭하면,
//자바스크립트 문법 : DOM 선택, 이벤트 제어
//할일을 서버로 부터 받아온다.
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(json => console.log(json))
//그런다음 화면에 보여준다.

document.querySelector("input").addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => console.log(json))
})

