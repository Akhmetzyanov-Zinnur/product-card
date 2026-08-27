// 3.объект на основе моих данных
const myData = {
  name: 'Zinnur',
  surname: 'Akhmetzyanov',
  email: 'zinnur.2009@mail.ru',
  age: 17,
  country: 'Russia',
  city: 'Nabereshny Chelny',
  hobby: 'soccer',
  school: 26,
};

// 4.объект с данными об автомобиле
const myCar = {
  mark: 'Lada',
  model: 2114,
  yearRelease: 2004,
  color: 'black',
  transmission: 'manual',
};

myCar.owner = { ...myData };

// 5.добавление максимальной скорости к объекту с авто
function setMaxSpeed(car) {
  if (!Object.hasOwn(myCar, 'maxSpeed')) {
    myCar.maxSpeed = 200;
  }
}

setMaxSpeed(myCar);

// 6.вывод значения ключа
function outputKeyValue(object, key) {
  console.log(object[key]);
}

// 7.массив с названиями продуктов
const products = ['молоко', 'хлеб', 'фрукты'];

// 8. массив с фильмами
const films = [
  {
    name: 'Побег из Шоушенка',
    director: 'Фрэнк Дарабонт',
    yearRelease: 1994,
    genre: 'Драма',
  },
  {
    name: 'Зеленая миля',
    director: 'Фрэнк Дарабонт',
    yearRelease: 1999,
    genre: 'Драма',
  },
  {
    name: 'Форрест Гамп',
    director: 'Роберт Земекис',
    yearRelease: 1994,
    genre: 'Драма',
  },
  {
    name: 'Начало',
    director: 'Кристофер Нолан',
    yearRelease: 2010,
    genre: 'Фантастика',
  },
];

films.push({
  name: 'Граф Монте-Кристо',
  director: 'Матьё Делапорт',
  yearRelease: 2024,
  genre: 'Триллер',
});

// 9. массив фильмов марвел
const marvelFilms = [
  {
    name: 'Мстители',
    director: 'Джосс Уидон',
    yearRelease: 2012,
    genre: 'Фантастика',
  },
  {
    name: 'Железный человек',
    director: 'Джон Фавро',
    yearRelease: 2008,
    genre: 'Фантастика',
  },
  {
    name: 'Человек-паук: Нет пути домой',
    director: 'Джон Уоттс',
    yearRelease: 2021,
    genre: 'Фантастика',
  },
  {
    name: 'Стражи Галактики',
    director: 'Джеймс Ганн',
    yearRelease: 2014,
    genre: 'Фантастика',
  },
];

const allFilms = [...films, ...marvelFilms];

// 10. добавление свойства isRare
function addingObjectProperty(films) {
  return allFilms.map((film) => {
    const updateFilm = { ...film };
    if (film.yearRelease > 2009) {
      updateFilm.isRare = true;
    } else {
      updateFilm.isRare = false;
    }
    return updateFilm;
  });
}
addingObjectProperty(allFilms);
console.log(addingObjectProperty(allFilms));
