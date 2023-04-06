//
// Вывод результата
// 7.5 - 100%
// 6.4 - x
// x = 6.4 * 100 / 7.5
// 100% - x% = statistic
const resultsFromStorage = document.getElementById('idresults');
const headerlogo = document.getElementById('headerlogoid')
const carbonFootprintValue = 7.5;
let resultValue = sessionStorage.getItem('result');
let statistic = (Number(resultValue / 1000) * 100) / carbonFootprintValue;
const renderResults = () => {
    resultsFromStorage.innerHTML = `<h1>${Number(resultValue / 1000).toFixed(2)} тонн CO2</h1>`;
    if (Number(resultValue / 1000).toFixed(2) > carbonFootprintValue) {
        let resultStatistic = statistic - 100;
        headerlogo.innerHTML = `<h5>Ваш углеродный след на ${resultStatistic.toFixed(1)}% больше, чем среднестатистическое значение</h5>`;
    }
    else if (Number(resultValue / 1000).toFixed(2) < carbonFootprintValue) {
        let resultStatistic = 100 - statistic;
        headerlogo.innerHTML = `<h5>Ваш углеродный след на ${resultStatistic.toFixed(1)}% меньше, чем среднестатистическое значение</h5>`;
    }
};

renderResults();