function submitChoice() {
    const choices = document.getElementsByName('assignment');
    let selectedAssignment;
    let selectedElement;

    for (const choice of choices) {
        if (choice.checked) {
            selectedAssignment = choice.value;
            selectedElement = choice;
            break;
        }
    }

    if (selectedAssignment) {
        console.log("Выбрано задание: " + selectedAssignment);
        alert("Выбрано задание: " + selectedAssignment);
    } else {
        console.log("Задание не выбрано.");
        alert("Пожалуйста, выберите задание.");
    }

    switch (selectedElement.id) {
        case 'assignment1':
            Quiz();
            break;
        case 'assignment2':
            CorrectName();
            break;
        case 'assignment3':
            AddressDivision();
            break;
        case 'assignment4':
            ChessBoard()
            break;
    }

    function Quiz() {
        let isUserAgree = true;
        while (isUserAgree) {
            let RightAnswers = 0;
            let questions = [
                {
                    question: "Солнце встает на востоке?",
                    answer: true
                },
                {
                    question: "Самая большая планета в Солнечной системе - Марс?",
                    answer: false
                },
                {
                    question: "Вода кипит при 100 градусах Цельсия на уровне моря?",
                    answer: true
                },
                {
                    question: "Кофеин содержится в обычном зеленом чае?",
                    answer: true
                },
                {
                    question: "Человеческий скелет насчитывает более 300 костей?",
                    answer: false
                },
                {
                    question: "Город Токио является столицей Южной Кореи?",
                    answer: false
                },
                {
                    question: "Свет от Солнца до Земли доходит за 8 минут?",
                    answer: true
                }
            ];
            for (const item of questions) {
                let IsRightAnswers = confirm(item.question)
                if (IsRightAnswers === item.answer) {
                    RightAnswers++;
                }
            }
            isUserAgree = confirm(`Вы ответили верно на ${RightAnswers} из ${questions.length}\n Желаете повторить?`);
            console.log(isUserAgree);
        }
    }

    function CorrectName() {
        let isUserAgree = true;
        while (isUserAgree) {
            let userInput = prompt("Введите ФИО:");

            const regExp = /^[a-zA-Zа-яА-ЯёЁ .]+$/;

            if (regExp.test(userInput)) {
                alert("Ввод корректен");
                isUserAgree = false;
            } else {
                alert("Ввод содержит недопустимые символы");
            }
        }
    }

    function AddressDivision() {
        let url = prompt("Введите HTTP-адрес:");
        
        if (url === null) {
            alert("Ввод отменен");
            return;
        }
        let [protocol, rest] = url.split("://");
        protocol += ":"; 
    
        let [hostAndPath, queryString = "нет строки запроса"] = rest.split("?");
        let [host, ...pathArray] = hostAndPath.split("/");
        let path = "/" + pathArray.join("/"); 
    
        let segments = path.split("/");
        let fileName = segments.pop() || "нет файла";
        path = segments.join("/") + (segments.length > 1 ? "/" : "");
    
        alert(`Протокол: ${protocol}\nХост: ${host}\nПуть: ${path}\nИмя файла: ${fileName}\nСтрока запроса: ${queryString}`);
    }

    function ChessBoard() {
        window.location.href = 'board.html';
    }
    


}