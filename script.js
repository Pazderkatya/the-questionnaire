const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    // Здесь твой код

    function clearInput() {
        document.querySelector('#name').value = "";
        document.querySelector('#secondName').value = "";
        document.querySelector('#email').value = "";
        document.querySelector('#phone').value = "";
        document.querySelector('#agree').value = false;

    }
    const sendButton = document.querySelector('#button');
    const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', clearInput());

    sendButton.addEventListener('click', () => {
        fetch(`http://46.21.248.81:3001/user`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer: PazderKatya'
                },
                body: JSON.stringify({
                    "name": document.querySelector('#name').value,
                    "secondName": document.querySelector('#secondName').checked,
                    "email": document.querySelector('#email').checked,
                    "phone": document.querySelector('#phone').checked,
                    "agree": document.querySelector('#agree').checked
                }),
            })
            .then((a) => {
                return a.json();
            })
            .then((data) => {
                clearInput();
                console.log(data);
            })
            .catch((a) => {
                console.log(a);
            })
    })
});