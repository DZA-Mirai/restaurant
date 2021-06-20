let form = document.querySelector('form');
let inputs = document.querySelectorAll('input');
let orderList = '';
let price = 0;
let delivery = 9000;

let modal = document.querySelector('.modal');
let bg = document.querySelector('.bg');
let button = document.querySelector('.ok');

let orderPrice = document.querySelector('.order-price');
let order = document.querySelector('.order');
let orderDelivery = document.querySelector('.order-delivery');
let allPrice = document.querySelector('.all-price');
console.log();


form.addEventListener('submit', function(e){
    e.preventDefault();
    modal.classList.add('show');
    bg.style.display = 'block';
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
            orderList += `${inputs[i].getAttribute('name')} - ${inputs[i].getAttribute('price')}, `;
            price += +inputs[i].getAttribute('price');
        }
    }
    order.innerHTML = `${order.innerHTML} ${orderList}`
    orderPrice.innerHTML = `${orderPrice.innerHTML} ${price}`
    orderDelivery.innerHTML = `${orderDelivery.innerHTML} ${delivery}`
    allPrice.innerHTML = `${allPrice.innerHTML} ${price + delivery}`
})

button.addEventListener('click', function(){
    location.reload();
    modal.classList.remove('show');
    bg.style.display = 'none';
})

bg.addEventListener('click', function(){
    location.reload();
    modal.classList.remove('show');
    bg.style.display = 'none';
})


// Translate
let tnl = document.querySelectorAll('.tnl');
let select = document.querySelector('select');

const local = {
    ru: {
        1: 'Ссылка 1',
        2: 'Ссылка 2',
        3: 'Ссылка 3',
        4: 'Ссылка 4',
        5: 'МЕНЮ',
        6: 'Лаваши',
        7: 'Донары',
        8: 'Бургеры',
        9: 'Комбо',
        10: 'Напитки',
        11: 'Закуски',
        12: 'Лаваши',
        13: 'Маленький Лаваш',
        14: 'Маленький Лаваш с сыром',
        15: 'Большой Лаваш',
        16: 'Большой Лаваш с сыром',
        17: 'Донары',
        18: 'Шаурма маленькая',
        19: 'Шаурма средняя',
        20: 'Шаурма большая',
        21: 'Донар блюдо',
        22: 'Бургеры',
        23: 'Чизбургер',
        24: 'Дабл Чизбургер',
        25: 'Чизбургер 2 сыра',
        26: 'Чизбургер-мини',
        27: 'Комбо',
        28: 'Комбо 1',
        29: 'Комбо 2',
        30: 'Комбо 3',
        31: 'Комбо 4',
        32: 'Напитки',
        33: 'Кола 0,5',
        34: 'Кола 1',
        35: 'Кола 1,5',
        36: 'Сок',
        37: 'Закуски',
        38: 'Картошка Фри',
        39: 'Фри большая',
        40: 'Картофель по деревенски',
        41: 'Набор Снеков',
        42: 'Отправить',
        43: 'Заказ',
        44: 'Ваш заказ: ',
        45: 'Стоимость заказа: ',
        46: 'Доставка: ',
        47: 'Общая Стоимость: ',
        48: 'Подтвердить'
    },
    en: {
        1: 'Link 1',
        2: 'Link 2',
        3: 'Link 3',
        4: 'Link 4',
        5: 'MENU',
        6: 'Lavash',
        7: 'Donars',
        8: 'Burgers',
        9: 'Combo',
        10: 'Beverages',
        11: 'Snacks',
        12: 'Lavash',
        13: 'Mini Lavash',
        14: 'Cheese Mini Lavash',
        15: 'Big Lavash',
        16: 'Cheese Big Lavash',
        17: 'Donars',
        18: 'Mini Donar',
        19: 'Middle Donar',
        20: 'Big Donar',
        21: 'Donar Dish',
        22: 'Burgers',
        23: 'Cheeseburger',
        24: 'Double Cheeseburger',
        25: 'Cheeseburger with 2 Cheeses',
        26: 'Mini-Cheeseburger',
        27: 'Combo',
        28: 'Combo 1',
        29: 'Combo 2',
        30: 'Combo 3',
        31: 'Combo 4',
        32: 'Beverages',
        33: 'Cola 0,5',
        34: 'Cola 1',
        35: 'Cola 1,5',
        36: 'Juice',
        37: 'Snacks',
        38: 'French Fries',
        39: 'Big Fries',
        40: 'Potato wedges',
        41: 'Set of Snacks',
        42: 'Send',
        43: 'Order',
        44: 'Your order: ',
        45: 'Order price: ',
        46: 'Delivery: ',
        47: 'Total cost: ',
        48: 'Confirm'
    },
    getLang(lang){
        const langStr = lang != 'ru' && lang != 'en' || lang === undefined ? 'ru' : lang;
        return this[langStr];
    }
}

select.addEventListener('input', function(){
    let lang = this.value;
    let language = local.getLang(lang);
    let array = [];
    let i = 0;
    for(let key in language){
        array[i] = language[key];
        i++;
    }
    for(let i = 0; i < tnl.length; i++){
        tnl[i].innerHTML = array[i];
    }
});

// Плавный переход к элементам
let link = document.querySelectorAll('.link');
let destination = document.querySelectorAll('.scroll');

for(let j = 0; j < link.length; j++){
    link[j].addEventListener('click', function(){
        destination[this.getAttribute('index')].scrollIntoView({behavior: 'smooth'});
    })
}

// Фиксированная позиция когда пользователь доскролил до элемента
let menu = document.querySelector('.name');
let sticky = menu.offsetTop;

window.onscroll = function(){
    if(window.pageYOffset > sticky){
        menu.classList.add('sticky');
    } else{
        menu.classList.remove('sticky');
    }
}