window.onload = function () {
    let box = document.getElementsByClassName('box')[0];
    box.addEventListener('click', () => {
        alert("您点击了一下按钮！");
    });
}