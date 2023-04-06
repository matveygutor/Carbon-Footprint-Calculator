//
// Контейнер для вопросов
//
const DATA = [
    // Питание
    //1
    {
        questions: 'Как бы вы лучше всего описали свой рацион?',
        answers: [
            { id: '1', text: 'Мясо при каждом приёме пищи', value: 30, }, // value - количество дней в месяц
            { id: '2', text: 'Иногда мясо', value: 15, },
            { id: '3', text: 'Очень редко', value: 5, },
            { id: '4', text: 'Вегетарианец', value: 0, },
            { id: '5', text: 'Веган', value: 0, },]
    },
    //2
    {
        questions: 'Из продуктов, которые вы покупаете, сколько портится и выбрасывается?',
        answers: [
            { id: '10', text: 'Нисколько', value: 0, }, // value - количество кг
            { id: '11', text: '0% - 10%', value: 1, },
            { id: '12', text: '10% - 30%', value: 3, },
            { id: '13', text: 'Больше 30%', value: 5, },]
    },
    //3
    {
        questions: 'Вы часто покупаете продукты местного производства?',
        answers: [
            { id: '14', text: 'Часто', value: 15, }, // value - количество дней в месяц
            { id: '15', text: 'Иногда', value: 5, },
            { id: '16', text: 'Не беспокоит этот вопрос', value: 10, },]
    },
    // Транспорт
    //4
    {
        questions: 'Сколько часов в неделю вы ездите в поезде?',
        answers: [
            { id: '17', text: 'Не пользуюсь поездом', value: 0, }, // value - количество часов в неделю
            { id: '18', text: 'Около 2 часов', value: 2, },
            { id: '19', text: 'От 2 до 5 часов', value: 3, },
            { id: '20', text: 'От 5 до 15 часов', value: 10, },
            { id: '21', text: 'От 15 до 25 часов ', value: 20, },
            { id: '22', text: 'Больше 25 ', value: 30, },]
    },
    //5
    {
        questions: 'Сколько часов в неделю вы ездите в маршрутке?',
        answers: [
            { id: '23', text: 'Не пользуюсь автобусом', value: 0, }, // value - количество часов в неделю
            { id: '24', text: 'Около 1 часа', value: 1, },
            { id: '25', text: 'От 1 до 3 часов', value: 2, },
            { id: '26', text: 'От 3 до 6 часов', value: 4, },
            { id: '27', text: 'От 6 до 10 часов ', value: 8, },
            { id: '28', text: 'Больше 10 ', value: 15, },]
    },
    //6
    {
        questions: 'Сколько часов в неделю вы ездите в автобусе?',
        answers: [
            { id: '23', text: 'Не пользуюсь автобусом', value: 0, }, // value - количество часов в неделю
            { id: '24', text: 'Около 1 часа', value: 1, },
            { id: '25', text: 'От 1 до 3 часов', value: 2, },
            { id: '26', text: 'От 3 до 6 часов', value: 4, },
            { id: '27', text: 'От 6 до 10 часов ', value: 8, },
            { id: '28', text: 'Больше 10 ', value: 15, },]
    },
    //7
    {
        questions: 'Сколько часов в неделю вы ездите в автомобиле?',
        answers: [
            { id: '29', text: 'Не пользуюсь автомобилем', value: 0, }, // value - количество часов в неделю
            { id: '30', text: 'Около 2 часов', value: 2, },
            { id: '31', text: 'От 2 до 5 часов', value: 3, },
            { id: '32', text: 'От 5 до 15 часов', value: 10, },
            { id: '33', text: 'От 15 до 25 часов ', value: 20, },
            { id: '34', text: 'Больше 25 ', value: 30, },]
    },
    // Дом
    //8
    {
        questions: 'Какая площадь вашего дома (в квадратных метрах)?',
        answers: [
            { id: '35', text: 'Меньше 30', value: 20, }, // value - количество квадратных метров
            { id: '36', text: '30 - 60', value: 45, },
            { id: '37', text: '60 - 80', value: 70, },
            { id: '38', text: '80 - 100', value: 90, },
            { id: '39', text: 'Больше 100', value: 120, },]

    },
    //9
    {
        questions: 'Сколько человек проживает в вашем доме?',
        answers: [
            { id: '40', text: '1', value: 1, }, // value - количество человек
            { id: '41', text: '2', value: 2, },
            { id: '42', text: '3', value: 3, },
            { id: '43', text: '4', value: 4, },
            { id: '44', text: '5 и больше', value: 5, },]

    },
    //10
    {
        questions: 'Как вы отапливаете свой дом?',
        answers: [
            { id: '45', text: 'Электричество', value: 0.6, }, // value - кгCO2 в день
            { id: '46', text: 'Уголь', value: 3.26, },
            { id: '47', text: 'Древесина', value: 0.1, },
            { id: '48', text: 'Газ', value: 3.68, },]

    },
    //11
    {
        questions: 'Вы регулярно выключаете свет и не оставляете технику в режиме ожидания?',
        answers: [
            { id: '49', text: 'Да', value: 0, },
            { id: '50', text: 'Нет', value: 0.5, },]
    },
    //12
    {
        questions: 'Сколько вы обычно тратите в месяц на своих питомцев и корм для них (в беларусских рублях)?',
        answers: [
            { id: '51', text: 'У меня нет питомцев', value: 0, },
            { id: '52', text: '0-20', value: 20, },
            { id: '53', text: '20-40', value: 40, },
            { id: '54', text: '40-60', value: 60, },
            { id: '55', text: 'Больше 60', value: 100, },]
    },
];
//
// Расчетываем углеродный след
//
const CarbonEmissionFormula = (answerValue, questionIndex) => {
    let value = 0;
    if (questionIndex == 1) { value = 0.45 * answerValue * 12; }
    if (questionIndex == 2) { value = 2.5 * answerValue * 52; }
    if (questionIndex == 3) { value = 0.45 * answerValue * 12; }
    if (questionIndex == 4) { value = 0.5 * answerValue * 52; }
    if (questionIndex == 5) { value = 1.2 * answerValue * 52; }
    if (questionIndex == 6) { value = 0.5 * answerValue * 52; }
    if (questionIndex == 7) { value = 3.3 * answerValue * 52; }
    if (questionIndex == 8) { value = 7 * answerValue * 12; }
    if (questionIndex == 9) { value = 8.2 * answerValue * 365; }
    if (questionIndex == 10) { value = 0.31 * answerValue * 365; }
    if (questionIndex == 11) { value = 0.45 * answerValue * 365; }
    if (questionIndex == 12) { value = 0.4 * answerValue * 12; }
    return value;
}
//
// Получаем структурные части HTML-страницы
//

const test = document.getElementById('idtest');
const question = document.getElementById('idquestions');
const indicator = document.getElementById('idindicator');
const btnNext = document.getElementById('idbtn-next');
const btnComplete = document.getElementById('idbtn-complete');
const formTest = document.getElementById('form-test');
const message = document.getElementById('idmessage');

//
// Выводим вопрос с вариантами ответов
//
const renderQuestions = (index) => {
    renderIndicator(index + 1);
    let renderIndex = index + 1;
    question.dataset.currentStep = index;
    if (renderIndex >= 1 && renderIndex <= 3) {
        document.getElementById('idbody').style = 'background-image: url("css/img/Food.png");';
    }
    else if (renderIndex >= 4 && renderIndex <= 7) {
        document.getElementById('idbody').style = 'background-image: url("css/img/Car.png");';
    } 
    else if (renderIndex >= 8 && renderIndex <= 12) {
        document.getElementById('idbody').style = 'background-image: url("css/img/Home.png");';
    } 
    
    const renderAnswers = () => DATA[index].answers
        .map((answers) => `
                <li>
                    <label>
                        <input class="answer-input" type="radio" name=${index} value=${answers.value}>
                        ${answers.text}
                    </label>
                </li>
            `)
        .join('');
    question.innerHTML = `
        <div class="test-questions-item">
            <div class="test-questions-item-question">
                ${DATA[index].questions}     
            </div>
            <ul class="test-questions-item-answers">
                ${renderAnswers()}     
            </ul>    
        </div> `;
};
//
// Выводим счетчик вопросов
//
const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};
//
// Привязываем событие на выбор варианта ответа
//
let localResults = () => { }
test.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer-input')) {
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});
//
// Привязываем событие на нажатие кнопки
//
test.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-next')) {

        let nextQuestionsIndex = Number(question.dataset.currentStep) + 1;
        localStorageSetItem(Number(question.dataset.currentStep));
        if (DATA.length === nextQuestionsIndex) {
            btnComplete.hidden = false;
            btnNext.hidden = true;
            sessionStorage.setItem('result', result);
        } else {
            renderQuestions(nextQuestionsIndex);
        }
        btnNext.disabled = true;
    }

    if (event.target.classList.contains('btn-complete')) {
    }
});
//
// Получаем данные из формы
//
let result = 0;
const localStorageSetItem = (index) => {
    formTest.addEventListener('submit', getFormValue);
    function getFormValue(event) {
        event.preventDefault();
    };
    const answerValue = formTest.querySelector(`[name="${index}"]:checked`);
    let carbonValue = CarbonEmissionFormula(answerValue.value, index + 1);
    result += carbonValue;
    localStorage.setItem(`answer ${index + 1}`, Number(carbonValue).toFixed(2));
}
//
// Выводим первый вопрос
//
renderQuestions(0);
btnNext.hidden = false;