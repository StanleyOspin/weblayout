// select
const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	shouldSort: false,
  position: 'bottom'
});


// // map
function init() {
  let myMap = new ymaps.Map('myMap1', {
    center: [48.87212845474138, 2.354266915344228],
    zoom: 16,
    controls: []
  });

  let placemark = new ymaps.Placemark([48.87212845474138, 2.354266915344228], {
    balloonContentHeader: 'Франция, Иль-де-Франс, Париж',
    balloonContentBody: 'X округ Парижа, улица дю Фобур Сен Дени  54'
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img/my-pointer.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-20, -30]
  });


  myMap.geoObjects.add(placemark)
}
ymaps.ready(init);

// form-validation

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.input__name', [{
        rule: 'required',
        value: true,
        errorMessage: 'Вы не ввели имя'
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Должно быть не менее 2 символов"
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: "Слишком длинное имя"
      }
    ])
    .addField('.input__mail', [{
        rule: 'required',
        value: true,
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ])
    .addField('.input__tel', [
      {
        rule: "function",
        validator: (value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length > 0)
        },
        errorMessage: 'Вы не ввели телефон'
      },
      {
        validator: (value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length === 10)
        },
        errorMessage: 'Должно быть не менее 10 цифр'
      }
    ]);
})

// tooltip
tippy('[data-tippy-content]', {
  delay: 300,
  maxWidth: 163
});

