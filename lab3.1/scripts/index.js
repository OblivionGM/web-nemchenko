// Функція для перевірки валідності електронної пошти
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Функція для перевірки валідності поштового індексу (5 цифр)
function validatePostalCode(postalCode) {
  var re = /^\d{5}$/;
  return re.test(postalCode);
}

// Функція, яка виконується при натисканні кнопки "Відправити"
function submitForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var country = document.getElementById('country').value;
  var postalCode = document.getElementById('postalCode').value;
  var email = document.getElementById('email').value;

  // Виконуємо перевірку даних
  var errors = [];

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    errors.push('Ім’я повинно містити лише літери');
  }

  if (!/^[a-zA-Z]+$/.test(lastName)) {
    errors.push('Прізвище повинно містити лише літери');
  }

  if (!validatePostalCode(postalCode)) {
    errors.push('Поштовий індекс повинен складатися з 5 цифр');
  }

  if (!validateEmail(email)) {
    errors.push('Невірний формат електронної пошти');
  }

  // Виводимо результат перевірки на екран
  var resultContainer = document.getElementById('result');
  if (errors.length > 0) {
    resultContainer.innerHTML = '<div class="alert alert-danger">' + errors.join('<br>') + '</div>';
  } else {
    resultContainer.innerHTML = '<div class="alert alert-success">Дані введені вірно</div>';
  }
}