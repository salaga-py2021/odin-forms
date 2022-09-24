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
}


function checkPassword(userInput){
    password = this.value;
    for (const checkElement in checkListMap){
        if (regex_dictionary[checkElement].test(password)){
            checkListMap[checkElement].style.color = 'green'
        }
        else {
            checkListMap[checkElement].style.color = 'black'
        }
    }
}

passwordInput.addEventListener('input',checkPassword);
