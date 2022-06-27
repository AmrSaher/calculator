let input = document.querySelector('.inp'),
    buttons = document.querySelectorAll('.btn'),
    temp = false;

buttons.forEach(btn => {
    btn.onclick = () => {
        switch (btn.innerHTML) {
            case 'C':
                input.value = '';
                break;
            case '=':
                input.value = eval(input.value);
                temp = true;
                break;
            default:
                if (temp) {
                    input.value = '';
                    temp = false;
                }
                input.value += btn.innerHTML;
                break;
        }
    };
});