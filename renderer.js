old_sum = 0;
eur_rate = 0;
string = "";
transcript = "";
operators_array = [];
value_array = [];

// Listening for keypress and bind them as inputs
window.addEventListener('keypress', function(ev){
  if (ev.keyCode === 48) {
    num0();
  }
  if (ev.keyCode === 49) {
    num1();
  }
  if (ev.keyCode === 50) {
    num2();
  }
  if (ev.keyCode === 51) {
    num3();
  }
  if (ev.keyCode === 52) {
    num4();
  }
  if (ev.keyCode === 53) {
    num5();
  }
  if (ev.keyCode === 54) {
    num6();
  }
  if (ev.keyCode === 55) {
    num7();
  }
  if (ev.keyCode === 56) {
    num8();
  }
  if (ev.keyCode === 57) {
    num9();
  }
  if (ev.keyCode === 44) {
    comma();
  }
  if (ev.keyCode === 13) {
    calc();
  }
  if (ev.keyCode === 43) {
    plus();
  }
  if (ev.keyCode === 45) {
    minus();
  }
  if (ev.keyCode === 42) {
    addition();
  }
  if (ev.keyCode === 47) {
    subtraction();
  }
});

window.addEventListener('keydown', function(ev){
  if (ev.keyCode === 46 || ev.keyCode === 8) {
    del();
  }
});

// Adding numbers
function num1() {
  value_array.push(1);
  string += "1";
  document.getElementById('result').innerHTML = string;
}

function num2() {
  value_array.push(2);
  string += "2";
  document.getElementById('result').innerHTML = string;
}

function num3() {
  value_array.push(3);
  string += "3";
  document.getElementById('result').innerHTML = string;
}

function num4() {
  value_array.push(4);
  string += "4";
  document.getElementById('result').innerHTML = string;
}

function num5() {
  value_array.push(5);
  string += "5";
  document.getElementById('result').innerHTML = string;
}

function num6() {
  value_array.push(6);
  string += "6";
  document.getElementById('result').innerHTML = string;
}

function num7() {
  value_array.push(7);
  string += "7";
  document.getElementById('result').innerHTML = string;
}

function num8() {
  value_array.push(8);
  string += "8";
  document.getElementById('result').innerHTML = string;
}

function num9() {
  value_array.push(9);
  string += "9";
  document.getElementById('result').innerHTML = string;
}

function num0() {
  value_array.push(0);
  string += "0";
  document.getElementById('result').innerHTML = string;
}

// Adding comma, negate, functions and operators
function comma() {
  if (string.slice(-1) !== ',') {
    value_array.push('.');
    string += ",";
    document.getElementById('result').innerHTML = string;
  }
}

function negate() {
  for (t = string.length; t >= 0; t--) {

    if (value_array.slice(t, t+1) == 'N') {
      value_array.splice((string.length - (string.length - t)), 1);
      str1 = string.slice(0, (t));
      str2 = string.slice((t+1), string.length);
      string = str1 + str2;
      document.getElementById('result').innerHTML = string;
      break;
    }

    if (isNaN(string.slice(t, t+1))) {
      value_array.splice((string.length - (string.length - t) + 1), 0, 'N');
      str1 = string.slice(0, (t+1));
      str2 = string.slice((t+1), string.length);
      string = str1 + '-' + str2;
      document.getElementById('result').innerHTML = string;
      break;

    } else if (t === 0) {
      value_array.splice((string.length - (string.length - t)), 0, 'N');
      str2 = string.slice(0, string.length)
      string = '-' + str2;
      document.getElementById('result').innerHTML = string;
      break;
    }

  }
}

function plus() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    value_array.push('+');
    string += "+";
    document.getElementById('result').innerHTML = string;
  }
}

function minus() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    value_array.push('-');
    string += "-";
    document.getElementById('result').innerHTML = string;
  }
}

function addition() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    value_array.push('*');
    string += "*";
    document.getElementById('result').innerHTML = string;
  }
}

function subtraction() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    value_array.push('/');
    string += "/";
    document.getElementById('result').innerHTML = string;
  }
}

function plusVat() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    value_array.push('*');
    value_array.push(1);
    value_array.push('.');
    value_array.push(2);
    value_array.push(5);
    string += "*1,25";
    document.getElementById('result').innerHTML = string;
  }
}

function minusVat() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    value_array.push('*');
    value_array.push(0);
    value_array.push('.');
    value_array.push(8);
    string += "*0,8";
    document.getElementById('result').innerHTML = string;
  }
}

function eur() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    // Getting latest EUR to NOK values
    fetch('http://api.fixer.io/latest?base=EUR')
    .then(res => res.json())
    .then((out) => {
      eurRate = "" + out.rates.NOK + "";
      value_array.push('/');
      for (t = 0; t < eurRate.length; t++) {
        if (isNaN(eurRate.slice(t, t+1)) === true) {
          toPush = eurRate.slice(t, t+1);
        } else {
          toPush = parseInt(eurRate.slice(t, t+1));
        }
        value_array.push(toPush);
      }
      string += "/" + eurRate;
      document.getElementById('result').innerHTML = string;
    });
  }
}

function nok() {
  if (string.slice(-1) !== '-'  && string.slice(-1) !== '+') {
    if (string.length === 0) {
      value_array.push(old_sum);
      string += "Ans";
    }
    // Getting latest EUR to NOK values
    fetch('http://api.fixer.io/latest?base=EUR')
    .then(res => res.json())
    .then((out) => {
      eurRate = "" + out.rates.NOK + "";
      value_array.push('*');
      for (t = 0; t < eurRate.length; t++) {
        if (isNaN(eurRate.slice(t, t+1)) === true) {
          toPush = eurRate.slice(t, t+1);
        } else {
          toPush = parseInt(eurRate.slice(t, t+1));
        }
        value_array.push(toPush);
      }
      string += "*" + eurRate;
      document.getElementById('result').innerHTML = string;
    });
  }
}

function clearAll() {
  string = "";
  document.getElementById('result').innerHTML = string;
}

function del() {
  string = string.slice(0, -1);
  value_array.splice((value_array.length-1), 1);
  document.getElementById('result').innerHTML = string;
}

// Calculating the result
function calc() {

  if (value_array.length > 0) {

    sum = 0;
    value = "";
    calc_value = "";
    var i;
    var i_after;

    // Cleaning up the array by removing any trailing + or -
    if (value_array[(value_array.length-1)] == '+' || value_array[(value_array.length-1)] == '-') {
      value_array.splice((value_array.length-1), 1);
    }

    // Making a new array by combinding numbers including negates
    for (i = 0; i <= value_array.length; i++) {

      if (value_array[i] === parseInt(value_array[i], 10) || value_array[i] === '.' || value_array[i] === 'N') {
        if (value_array[i] === 'N') {
          value += '-';
        } else {
          value += value_array[i];
        }

      } else {

        if (value) {
          operators_array.push(value);
        }
        if (value_array[i]) {
          operators_array.push(value_array[i]);
        }
        max_sum_length = value.length;
        value = "";
      }

    }

    // Calculating the sum
    for (i = 0; i <= operators_array.length; i++) {
      i_after = i + 1;

      if (i === 0 && parseFloat(operators_array[i])) {
        sum = (operators_array[i]);
      }

      if (i === 0 && operators_array[i] === '-') {
        sum = (operators_array[i_after])*-1;
      }

      if (operators_array[i] === '+' && i !== 0 && i_after <= operators_array.length) {
        sum = parseFloat(sum) + parseFloat(operators_array[i_after]);
      }

      if (operators_array[i] === '-' && i !== 0 && i_after <= operators_array.length) {
        sum = parseFloat(sum) - parseFloat(operators_array[i_after]);
      }

      if (operators_array[i] === '*' && i !== 0 && i_after <= operators_array.length) {
        sum = parseFloat(sum) * parseFloat(operators_array[i_after]);
      }

      if (operators_array[i] === '/' && i !== 0 && i_after <= operators_array.length) {
        sum = parseFloat(sum) / parseFloat(operators_array[i_after]);
      }

    }

    // Outputing and resetting
    old_sum = sum;
    sum = sum.toPrecision(max_sum_length);
    transcript += '<p>' + string + ' = ' + sum + '</p>';
    document.getElementById('result').innerHTML = sum;
    document.getElementById('transcript').innerHTML = transcript;
    string = "";
    operators_array = [];
    value_array = [];
  }
}
