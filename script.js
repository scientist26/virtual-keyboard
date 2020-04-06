const keyContainer = document.createElement("div");
keyContainer.className = 'keyboard-container';

const taskTitle = document.createElement('h1');
taskTitle.innerHTML = 'Virtual-keyboard by scientist26';

const formArea = document.createElement("form");
const textArea = document.createElement("textarea");
formArea.className = 'form';
formArea.appendChild(textArea);


const keyboardArea = document.createElement("div");
keyboardArea.className = 'keyboard';

const alphabet = {
  rus: [['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
        ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'Del'],
        ['Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
        ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'],
        ['Ctrl', 'Win', 'Atl', '', 'Atl', '&#9668', '&#9660;', '&#9658;', 'Ctrl']],
  eng: [['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'],
        ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
        ['Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
        ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'],
        ['Ctrl', 'Win', 'Atl', '', 'Atl', '&#9668;', '&#9660;', '&#9658;', 'Ctrl']],
}

const keyCode = {
  id: [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Del'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']],
}

function getKeyboardLine() {

  function getKeyboardBtn(i) {
    let btn = [];

    if (i == 0) {
      n = 14;
    } else if (i == 1) {
      n = 15;
    } else if (i == 2 || i == 3) {
      n = 13;
    } else if (i == 4) {
      n = 9;
    }

    for (let j = 0; j < n; j++) {

      let divBtn = document.createElement("div");
      divBtn.className = 'line-elem';
      if (i == 0 && j == 13) {
        divBtn.className = 'tab ' + 'line-elem';
      }
      if (i == 1 && j == 0 || j == 14) {
        divBtn.className = 'tab ' + 'line-elem';
      }
      if (i == 2 && j == 0 || i == 2 && j == 12) {
        divBtn.className = 'tab ' + 'line-elem';
      }
      if (i == 3 && j == 0 || i == 3 && j == 12 || i == 3 && j == 11) {
        divBtn.className = 'shift ' + 'line-elem';
      }
      if (i == 3 && j == 11) {
        divBtn.className = 'tab ' + 'line-elem';
      }
      if (i == 4) {
        divBtn.className = 'tab ' + 'line-elem';
      }
      if (i == 4 && j == 3) {
        divBtn.className = 'space ' + 'line-elem';
      }
      // divBtn.append(alphabet.rus[i][j]);
      divBtn.innerHTML = (alphabet.rus[i][j]); // Добавил символы клавиатуры
      divBtn.id = (keyCode.id[i][j]);  // Добавил id.keycode символам
      btn.push(divBtn)
    }
    return btn
  }

  let btnLine = [];
  for (let i = 0; i < 5; i++) {
    let divLine = document.createElement("div");
    divLine.className = 'line';
    divLine.append(...getKeyboardBtn(i));
    btnLine.push(divLine);
  }
  return btnLine
}

keyboardArea.append(...getKeyboardLine());

keyContainer.appendChild(taskTitle);
keyContainer.appendChild(formArea);
keyContainer.appendChild(keyboardArea);

document.body.append(keyContainer);

const btnDiv = document.querySelector('.keyboard');
console.log(btnDiv)

btnDiv.addEventListener('keydown', (event) => {
  btnDiv.querySelectorAll('div.line-elem')
  .forEach(el => {
    if (event.code == 'Digit1') {
      el.classList.add('active')
    }

  })
})

window.addEventListener('keydown', (event) => {
  const btnCode = document.getElementById(event.code);
  btnCode.classList.add('active');
  window.addEventListener('keyup', (event) => {
    const btnCode = document.getElementById(event.code);
    btnCode.classList.remove('active');
  });
  
});





// window.addEventListener('beforeunload', () => {
//   // code 
// })