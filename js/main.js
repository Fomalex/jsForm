//Задание 1:
window.onload = function () {
    //страница полностью загружена и в этом случае невозможно будет использовать
    // подход с указанием функции в атрибуте html
    let collection = document.getElementsByTagName('input');
    let inputs = []
    for (i of collection) {
        inputs.push(i);
    }
    inputs.pop();

    //Задание 2:
    inputs[0].onkeypress = function (event) {
        let number = parseInt(event.key);
        if (number || number === 0) {
            event.preventDefault();
        }
    }

    //Задание 3:
    inputs[1].onkeypress = function (event) {
        let number = event.key;
        if (number === '.' || number === ',') {
            event.preventDefault();
        }
    }

    //Задание 4:
    let checkbox = document.querySelector('#main-checkbox input');
    checkbox.onchange = function () {
        if (checkbox.checked === true) {
            console.log('Согласен');
            return true;
        } else {
            console.log('Не согласен');
        }
    }

    //Задание 5:
    let btn = document.getElementById('btn');
    let inputNames = document.getElementsByClassName('input-name');
    btn.onclick = function (event) {
        // let fullInputs = 0
        // for (let i = 0; i < inputs.length; i++) {
        //     if (inputs[i].value) {
        //         fullInputs++;
        //     } else {
        //         alert('Заполните поле ' + inputNames[i].innerText);
        //     }
        // }
        // if (fullInputs === inputs.length) {
        // Второй вариант использования без переменной fullInputs:
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                alert('Заполните поле ' + inputNames[i].innerText);
                return;
            }
        }
        if (inputs[3].value === inputs[4].value) {
            if (checkbox.checked === true) {
                alert('OKAY');
            } else {
                alert('You must agree to our Terms of Service and Privacy Statement');
            }
        } else {
            alert('Пароли не совпадают');
        }
    }
    // }

    //Задание 6:
    let link = document.getElementById('question');
    link.onclick = function (event) {

        // Текст "Get your free account" заменить на "Log in to the system":
        document.getElementById('main-title').innerText = 'Log in to the system';

        // Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить:
        let form = document.getElementById('main-form');
        let inputBlocks = document.getElementsByClassName('input');
        for (let i of inputBlocks) {
            form.removeChild(i);
        }

        //Блок с чекбоксом также удалить:
        form.removeChild(document.getElementById('main-checkbox'));

        //Текст в кнопке заменить на "Sign In"
        btn.innerText = 'Sign In';

        //Ссылку "Already have an account?" также удалить
        form.removeChild(link.parentNode);

        //Чуть выровняем элементы:
        document.getElementById('main-image').style.marginTop = '0';
        document.getElementById('main').style.alignItems = 'center';

        //Изменение btn.onclick:
        btn.onclick = null;
        let inputs = document.getElementsByTagName('input');
        btn.onclick = function (event) {
            let fullInputs = 0
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value) {
                    fullInputs++;
                } else {
                    alert('Заполните поле ' + inputNames[i].innerText);
                }
            }
            if (fullInputs === inputs.length) {
                alert('OKAY');
            }
        }
    }
}