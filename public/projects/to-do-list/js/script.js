"ust strict";

// Переменные

let 
    inputField          = document.querySelector('.input-field > input'),
    taskList            = document.querySelectorAll('.task'),
    tasklisttest        = document.getElementsByClassName('task'),
    localStorageTransit = {

        localStoragetoDoList: {
            coordinates: {},
            tasks      : []
        },

        localStorageNotes   : {}
    };

/* Обработчики событий
=============================*/

//  Кнопка добавления заданий в список

document.querySelector(".input-field__plus").addEventListener('click', createTask);

inputField.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        createTask();
    }
});

// Кнопка полной очистки (корзина)
document.querySelector(".input-field__clear-all").addEventListener('click', clearAll);

/*=============================*/


// Первичный рендер страницы
getTheDataLocalStorage();

emptyMessage();

setEventListenerArr();

let scrollToTopTimer = setInterval(() => {
    scrollToTop();
    
}, 100);
window.addEventListener('load', () => {
    setTimeout(() => {
        clearInterval(scrollToTopTimer);
    }, 1000);
},{'once': 'true'});


// console.log(localStorage);

/* /Первичный рендер страницы*/



/* ФУНКЦИИ
=============================
 */
function createTask() {

    inputField.style.backgroundColor = "";
    inputField.style.borderColor     = "";
    inputField.placeholder           = "Добавить задачу";

    // Создаем объекты
    // Проверка на пустой ввод и рендер

    if (inputField.value != '') {
        let task = document.createElement("div");
        task.classList = "task";
        

        let taskMessage = document.createElement('span');

        taskMessage.textContent = inputField.value;
        taskMessage = taskMessage.innerHTML;

        task.innerHTML = `<div title="Выполнено" class="task__checkbox-wrapper">\n <div class="task__checkbox">\n <span class="task__checkbox-icon">✓</span></div>\n </div>\n <div class="task__quest">\n <span class="task__quest-text">${taskMessage}</span><input type="text" name="" id="edit-input">\n </div>\n <div title="Редактировать" class="task__change-button">\n <img class="change-icon" src="./img/pencil-icon.svg" alt="">\n </div>\n <div title="Удалить" class="task__delete-button"><img class="remove-icon" src="./img/remove-icon.svg" alt=""></div>`;
        setEventListener(task);
        document.querySelector(".task-container").appendChild(task);
        
        

        inputField.value = '';

        localStorageRecord(taskMessage);
        let emptyPhrase = document.querySelector('.empty-phrase');
        if (tasklisttest.length > 0 && emptyPhrase != null) {
            emptyPhrase.remove();
            document.querySelector('.task-container').style = "";
        }

    } else {
        inputField.style.backgroundColor = "#ff00003b";
        inputField.style.borderColor     = "#ff00003b";
        inputField.placeholder           = "Вы ничего не ввели";
        setTimeout(() => {
            inputField.style.backgroundColor = "";
            inputField.style.borderColor     = "";
            inputField.placeholder           = "Добавить задачу";
        }, 5000);
    }
}

function clearAll() {
    let taskList = document.querySelectorAll('.task');
    taskList.forEach(function (item) {
        item.remove();
    });

    localStorage.clear();
    localStorageTransit = {
        localStoragetoDoList: {
            coordinates: {},
            tasks: []
        },
        localStorageNotes: {}
    };

    emptyMessage();
}

function setEventListenerArr() {
    taskList = document.querySelectorAll('.task');
    taskList.forEach(function (item) {
        setEventListener(item);
    });
}

function emptyMessage() {
    let taskList = document.querySelectorAll('.task');
    if (taskList.length === 0) {
        document.querySelector('.task-container').innerHTML = `<span class="empty-phrase">Здесь пока пусто...</span>`;
        document.querySelector('.task-container').style.textAlign = 'center';
    }
}


function getTheDataLocalStorage() {
    if (localStorage.getItem('localStoragetoDoList') != null) {
        localStorageTransit = {
            localStoragetoDoList: JSON.parse(localStorage.getItem('localStoragetoDoList')),
            localStorageNotes: JSON.parse(localStorage.getItem('localStorageNotes'))
        };

        for (let i = 0; i < localStorageTransit.localStoragetoDoList.tasks.length; i++) {

            let taskLS = localStorageTransit.localStoragetoDoList.tasks[i];

            let task = document.createElement("div");
            task.classList = "task";

            task.innerHTML = `
            <div title="Выполнено" class="task__checkbox-wrapper">
                <div class="task__checkbox">
                    <span class="task__checkbox-icon">✓</span>
                </div>
            </div>

            <div class="task__quest">
                <span class="task__quest-text">${taskLS.taskContent}</span><input type="text" name="" id="edit-input">
            </div>

            <div title="Редактировать" class="task__change-button">
                <img class="change-icon" src="./img/pencil-icon.svg" alt="">
            </div>

            <div title="Удалить" class="task__delete-button">
                <img class="remove-icon" src="./img/remove-icon.svg" alt="">
            </div>`;

            if (taskLS.ifComplete == true) {
                task.querySelector('.task__checkbox-icon').classList.toggle('task__checkbox-icon_active');
                task.querySelector('.task__quest-text').classList.toggle('task__quest-text_active');
            }

            document.querySelector(".task-container").appendChild(task);

        }
    }


}

function localStorageRecord(taskMessage) {
    localStorageTransit.localStoragetoDoList.tasks.push(
        {
            taskContent: taskMessage,
            ifComplete: false
        }
    );
    localStorageReWrite();


}

function localStorageReWrite() {
    localStorage.setItem('localStoragetoDoList', JSON.stringify(localStorageTransit.localStoragetoDoList));
}



// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



function setEventListener(item) {
    item.addEventListener('click', function (e) {
        let i = Array.prototype.indexOf.call(tasklisttest, this);

        // Кнопка удаления
        if (e.target.className == 'remove-icon') {
            localStorageTransit.localStoragetoDoList.tasks.splice(i, 1);
            localStorageReWrite();
            this.remove();             
            if (localStorageTransit.localStoragetoDoList.tasks.length == 0) {
                emptyMessage();
            }
        }
        // Кнопка выполнения 
        else if (e.target.classList == 'task__checkbox-icon' || e.target.classList == 'task__checkbox-icon task__checkbox-icon_active') {

            this.querySelector('.task__checkbox-icon').classList.toggle('task__checkbox-icon_active');
            this.querySelector('.task__quest-text').classList.toggle('task__quest-text_active');

            if (localStorageTransit.localStoragetoDoList.tasks[i].ifComplete == true) {
                localStorageTransit.localStoragetoDoList.tasks[i].ifComplete = false;
            } else { localStorageTransit.localStoragetoDoList.tasks[i].ifComplete = true; }

            localStorageReWrite();


        }
        // Кнопка изменения
        else if (e.target.className == 'change-icon') {

            let 
                editInput   = this.querySelector('#edit-input'),
                currentText = this.querySelector('.task__quest-text');

            currentText.style.color = '#ffffff00';
            editInput.style.display = "block";
            editInput.value = currentText.innerHTML;

            editInput.addEventListener('keydown', function (e) {
                if (e.key == 'Enter') {
                    let 
                        editText = document.createElement('span');
                        editText.textContent = editInput.value;
                        editText = editText.innerHTML;

                    currentText.innerHTML = `${editText}<input type="text" name="" id="edit-input">`;
                    localStorageTransit.localStoragetoDoList.tasks[i].taskContent = editText;
                    localStorageReWrite();
                    currentText.style.color = '';
                    editInput.style.display = "none";

                }
            });
        }
    });
}

function scrollToTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
}


// Из файла webp

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
        addImgInCounter();
        preloader();
    } else {
        document.querySelector('body').classList.add('no-webp');
        addImgInCounter();
        preloader();
    }
});


function addImgInCounter() {
    let deleteAfterRenderImg = document.createElement('img');
    deleteAfterRenderImg.className = 'delete-after-render';
    deleteAfterRenderImg.style.display = "none";



    if (document.querySelector("body").className == 'webp') {
        deleteAfterRenderImg.src = './img/background.webp'; 
    }
    else {
        deleteAfterRenderImg.src = './img/background.jpg';
    }

    document.querySelector(".page").after(deleteAfterRenderImg);

    document.querySelector(".page").style.backgroundImage = `url('${document.querySelector(".delete-after-render").src}')`;
}


function preloader() {
    let
    images            = document.images,
    imagesTotalCount  = images.length,
    imagesLoadedCount = 0,
    percDisplay       = document.querySelector('.preload-percentage');

    for (let i = 0; i < images.length; i ++) {
        let imageClone     = document.createElement('img');
        imageClone.src     = images[i].src;
        imageClone.onload  = imageLoaded;
        imageClone.onerror = imageLoaded;
        
    }

    function imageLoaded() {
        imagesLoadedCount++;

        percDisplay.innerHTML = (((100/imagesTotalCount) * imagesLoadedCount) << 0) + "%";

        if (imagesLoadedCount >= imagesTotalCount) {
            window.onload = () => setTimeout(() => {
                let preloader = document.querySelector('.block');
                if (!preloader.classList.contains('done')) {
                    preloader.classList.add('done');
                }
                document.querySelector(".delete-after-render").remove();
                if (window.innerWidth <= 768) {
                    document.querySelector('body').classList.add('mobile-body');
                }
            }, 1000);
    
        }
    }
}