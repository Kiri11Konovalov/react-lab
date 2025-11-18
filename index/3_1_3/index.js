// Используем состояние, как в React
let state = {
    isEditing: false,
    firstName: 'Jane',
    lastName: 'Jacobs'
};

function updateDOM() {
    // Обновляем DOM в соответствии с состоянием
    if (state.isEditing) {
        editButton.textContent = 'Save Profile';
        firstNameText.style.display = 'none';
        lastNameText.style.display = 'none';
        firstNameInput.style.display = '';
        lastNameInput.style.display = '';
    } else {
        editButton.textContent = 'Edit Profile';
        firstNameInput.style.display = 'none';
        lastNameInput.style.display = 'none';
        firstNameText.style.display = '';
        lastNameText.style.display = '';
    }

    // Обновляем значения текстовых элементов
    firstNameText.textContent = state.firstName;
    lastNameText.textContent = state.lastName;
    helloText.textContent = `Hello ${state.firstName} ${state.lastName}!`;

    // Обновляем значения input'ов
    firstNameInput.value = state.firstName;
    lastNameInput.value = state.lastName;
}

function handleFormSubmit(e) {
    e.preventDefault();
    // Переключаем состояние редактирования
    state.isEditing = !state.isEditing;
    updateDOM();
}

function handleFirstNameChange() {
    // Обновляем состояние при изменении ввода
    state.firstName = firstNameInput.value;
    updateDOM();
}

function handleLastNameChange() {
    // Обновляем состояние при изменении ввода
    state.lastName = lastNameInput.value;
    updateDOM();
}


let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;

// Инициализируем DOM
updateDOM();