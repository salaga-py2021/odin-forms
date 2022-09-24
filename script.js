checkList = document.querySelectorAll('.check');
passwordInput = document.querySelector('#user_password');
passwordCheckInput = document.querySelector('#user_password_check')

regex_dictionary = {
    'uppercase': /[A-Z]/,
    'lowercase': /[a-z]/,
    'number': /[0-9]/,
    'symbol':/!|@|#|\$|%|\^|&|\*|\(|\)|-|\+|~|`|'|"|:|;|]|\[/,
    'tenChar':/.{10,}/
};

checkListMap = {
    'uppercase':checkList[0],
    'lowercase':checkList[1],
    'number':checkList[2],
    'symbol':checkList[3],
    'tenChar':checkList[4],
    'passwordMatch':checkList[5],
}


function checkPassword(userInput){
    password = this.value;
    if (regex_dictionary.uppercase.test(password)){
        checkListMap['uppercase'].style.color = 'green';
    }
    if (regex_dictionary.lowercase.test(password)){
        checkListMap['lowercase'].style.color = 'green';
    }
    if (regex_dictionary.number.test(password)){
        checkListMap['number'].style.color = 'green';
    }
    if (regex_dictionary.symbol.test(password)){
        checkListMap['symbol'].style.color = 'green';
    }
    if (regex_dictionary.tenChar.test(password)){
        checkListMap['tenChar'].style.color = 'green';
    }
}

passwordInput.addEventListener('input',checkPassword);
