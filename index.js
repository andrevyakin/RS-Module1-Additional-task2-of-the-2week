const showSuccessMessage = message => console.log(message);
const showErrorMessage = message => console.error(message);

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    [...text].filter((symbol, index) =>  {
        if (symbol === errorSymbol) {
            showErrorMessage(`Найден запрещенный символ "${symbol}" под индексом ${index}`);
            return symbol;
        }
    })
    .length === 0
    ? showSuccessMessage("В данном тексте нет запрещенных символов.")
    : true;
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);