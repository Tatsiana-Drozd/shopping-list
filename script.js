/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
const enterInput = document.querySelector('#input');
const conteinerItems = document.querySelector('#items');

enterInput.addEventListener('click', function() {
        const messageText = enterInput.value;
        const newItem = document.createElement('div');
        newItem.classList.add('newItem');
        const newItemText = document.createElement('p');
        newItemText = messageText;
        newItem.prepend(newItemText);
        conteinerItems.prepend(newItem);
    }

)