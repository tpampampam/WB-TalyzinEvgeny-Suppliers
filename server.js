import express from 'express';
import cors from 'cors';
const app = express();

const port = 8000;

app.use(express.json());
app.use(cors());

const suppliers =  [
    {
      "id": "3",
      "date": "24.06.2024",
      "number": "984153",
      "city": "Псков",
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. Индустриальная, д.9/1",
      "status": "Задерживается",
      "quantity": 897
    },
    {
      "id": "4",
      "date": "22.06.2024",
      "number": "02118",
      "city": "Абакан",
      "type": "Монопалетта",
      "warehouse": "СЦ Абакан",
      "address": "ул.Игарская, д.21Г",
      "status": "Задерживается",
      "quantity": "12"
    },
    {
      "id": "5",
      "date": "22.06.2024",
      "number": "26589",
      "city": "Тверь",
      "type": "Короб",
      "warehouse": "СЦ Абакан",
      "address": "ул. Волоколамское шоссе, 51Б",
      "status": "Задерживается",
      "quantity": 789
    },
    {
      "id": "6",
      "date": "01.07.2024",
      "number": "154814",
      "city": "Москва",
      "type": "Короб",
      "warehouse": "Электросталь",
      "address": "Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт",
      "status": "В пути",
      "quantity": "100332"
    },
    {
      "id": "7",
      "number": "984153",
      "date": "30.06.2024",
      "city": "Абакан",
      "quantity": 456,
      "type": "Короб",
      "warehouse": "СЦ Абакан",
      "address": "ул.Игарская, д.21Г",
      "status": "В пути"
    },
    {
      "id": "8",
      "number": "154814",
      "date": "30.06.2024",
      "city": "Москва",
      "quantity": 10,
      "type": "Короб",
      "warehouse": "Белая дача",
      "address": "Яничкин проезд, 3",
      "status": "В пути"
    },
    {
      "id": "9",
      "number": "26589",
      "date": "05.07.2024",
      "city": "Ярославль",
      "quantity": 232,
      "type": "Короб",
      "warehouse": "Электросталь",
      "address": "Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт",
      "status": "В пути"
    },
    {
      "id": "10",
      "number": "154814",
      "date": "22.06.2024",
      "city": "Москва",
      "quantity": 487,
      "type": "Короб",
      "warehouse": "Черная грязь",
      "address": "д.Черная грязь, ул.Промышленная, с.2",
      "status": "В пути"
    },
    {
      "id": "11",
      "number": "26589",
      "date": "26.06.2024",
      "city": "Москва",
      "quantity": 50,
      "type": "Монопалетта",
      "warehouse": "Внуково",
      "address": "Поселение Марушкинское, квартал №8",
      "status": "В пути"
    },
    {
      "id": "12",
      "number": "984153",
      "date": "24.06.2024",
      "city": "Москва",
      "quantity": 897,
      "type": "Короб",
      "warehouse": "Черная грязь",
      "address": "д.Черная грязь, ул.Промышленная, с.2",
      "status": "Задерживается"
    },
    {
      "id": "13",
      "number": "02118",
      "date": "22.06.2022",
      "city": "Псков",
      "quantity": 345,
      "type": "Монопалетта",
      "warehouse": "Склад",
      "address": "ул. Индустриальная, д.9/1",
      "status": "В пути"
    },
    {
      "id": "14",
      "number": "26589",
      "date": "22.06.2024",
      "city": "Тверь",
      "quantity": 789,
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. Волоколамское шоссе, 51Б",
      "status": "Задерживается"
    },
    {
      "id": "15",
      "number": "154814",
      "date": "01.07.2024",
      "city": "Нижний Новгород",
      "quantity": 1003,
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. ЛенинаБ д.16",
      "status": "В пути"
    },
    {
      "id": "16",
      "number": "984153",
      "date": "30.06.2024",
      "city": "Абакан",
      "quantity": 456,
      "type": "Короб",
      "warehouse": "СЦ Абакан",
      "address": "ул.Игарская, д.21Г",
      "status": "В пути"
    },
    {
      "id": "17",
      "number": "154814",
      "date": "03.06.2024",
      "city": "Москва",
      "quantity": 10,
      "type": "Короб",
      "warehouse": "Белая дача",
      "address": "Яничкин проезд, 3",
      "status": "В пути"
    },
    {
      "id": "18",
      "number": "26589",
      "date": "05.07.2024",
      "city": "Ярославль",
      "quantity": 232,
      "type": "Короб",
      "warehouse": "Электросталь",
      "address": "Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт",
      "status": "В пути"
    },
    {
      "id": "19",
      "number": "154814",
      "date": "22.06.2024",
      "city": "Москва",
      "quantity": 487,
      "type": "Короб",
      "warehouse": "Черная грязь",
      "address": "д.Черная грязь, ул.Промышленная, с.2",
      "status": "В пути"
    },
    {
      "id": "20",
      "number": "26589",
      "date": "26.06.2024",
      "city": "Москва",
      "quantity": 50,
      "type": "Монопалетта",
      "warehouse": "Внуково",
      "address": "Поселение Марушкинское, квартал №8",
      "status": "В пути"
    },
    {
      "id": "21",
      "number": "984153",
      "date": "24.06.2024",
      "city": "Москва",
      "quantity": 897,
      "type": "Короб",
      "warehouse": "Черная грязь",
      "address": "д.Черная грязь, ул.Промышленная, с.2",
      "status": "Задерживается"
    },
    {
      "id": "22",
      "number": "02118",
      "date": "22.06.2024",
      "city": "Псков",
      "quantity": 345,
      "type": "Монопалетта",
      "warehouse": "Склад",
      "address": "ул. Индустриальная, д.9/1",
      "status": "В пути"
    },
    {
      "id": "23",
      "number": "26589",
      "date": "22.06.2024",
      "city": "Тверь",
      "quantity": 789,
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. Волоколамское шоссе, 51Б",
      "status": "Задерживается"
    },
    {
      "id": "24",
      "number": "154814",
      "date": "01.07.2024",
      "city": "Нижний Новгород",
      "quantity": 1003,
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. ЛенинаБ д.16",
      "status": "В пути"
    },
    {
      "id": "25",
      "number": "984153",
      "date": "30.06.2024",
      "city": "Абакан",
      "quantity": 456,
      "type": "Короб",
      "warehouse": "СЦ Абакан",
      "address": "ул.Игарская, д.21Г",
      "status": "В пути"
    },
    {
      "id": "26",
      "number": "154814",
      "date": "30.06.2024",
      "city": "Москва",
      "quantity": 10,
      "type": "Короб",
      "warehouse": "Белая дача",
      "address": "Яничкин проезд, 3",
      "status": "В пути"
    },
    {
      "id": "27",
      "number": "26589",
      "date": "05.07.2024",
      "city": "Ярославль",
      "quantity": 232,
      "type": "Короб",
      "warehouse": "Электросталь",
      "address": "Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт",
      "status": "В пути"
    },
    {
      "id": "28",
      "number": "154814",
      "date": "22.06.2024",
      "city": "Москва",
      "quantity": 487,
      "type": "Короб",
      "warehouse": "Черная грязь",
      "address": "д.Черная грязь, ул.Промышленная, с.2",
      "status": "В пути"
    },
    {
      "id": "29",
      "number": "26589",
      "date": "26.06.2024",
      "city": "Москва",
      "quantity": 50,
      "type": "Монопалетта",
      "warehouse": "Внуково",
      "address": "Поселение Марушкинское, квартал №8",
      "status": "В пути"
    },
    {
      "id": "30",
      "number": "984153",
      "date": "24.06.2024",
      "city": "Москва",
      "quantity": 897,
      "type": "Короб",
      "warehouse": "Черная грязь",
      "address": "д.Черная грязь, ул.Промышленная, с.2",
      "status": "Задерживается"
    },
    {
      "id": "31",
      "number": "02118",
      "date": "22.06.2024",
      "city": "Псков",
      "quantity": 345,
      "type": "Монопалетта",
      "warehouse": "Склад",
      "address": "ул. Индустриальная, д.9/1",
      "status": "В пути"
    },
    {
      "id": "32",
      "number": "26589",
      "date": "22.06.2024",
      "city": "Тверь",
      "quantity": 789,
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. Волоколамское шоссе, 51Б",
      "status": "Задерживается"
    },
    {
      "id": "33",
      "number": "154814",
      "date": "01.07.2024",
      "city": "Нижний Новгород",
      "quantity": 1003,
      "type": "Короб",
      "warehouse": "Склад",
      "address": "ул. ЛенинаБ д.16",
      "status": "В пути"
    },
    {
      "id": "34",
      "number": "984153",
      "date": "30.06.2024",
      "city": "Абакан",
      "quantity": 456,
      "type": "Короб",
      "warehouse": "СЦ Абакан",
      "address": "ул.Игарская, д.21Г",
      "status": "В пути"
    },
    {
      "id": "35",
      "number": "154814",
      "date": "30.06.2024",
      "city": "Москва",
      "quantity": 10,
      "type": "Короб",
      "warehouse": "Белая дача",
      "address": "Яничкин проезд, 3",
      "status": "В пути"
    },
    {
      "id": "36",
      "number": "26589",
      "date": "05.07.2024",
      "city": "Ярославль",
      "quantity": 232,
      "type": "Короб",
      "warehouse": "Электросталь",
      "address": "Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт",
      "status": "В пути"
    }
]


app.listen(port, () => console.log('server is running'))

app.get('/suppliers', (req, res) => {
    const { city, type, status, number } = req.query;
    
    let filtredCards = suppliers;

    if (city) {
      filtredCards = filtredCards.filter(card => card.city.toLowerCase().includes(city.toLowerCase()));
    }
    if (type) {
      filtredCards= filtredCards.filter(card => card.type.toLowerCase().includes(type.toLowerCase()));
    }
    if (number) {
      filtredCards = filtredCards.filter(card => card.number.includes(number));
    }
    if (status) {
      filtredCards= filtredCards.filter(card => card.status.toLowerCase().includes(status.toLowerCase()));
    }


    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 7;

    const start = (page - 1) * limit
    const end = page * limit

    const currentPage = filtredCards.slice(start, end)

    const firstPage = 1;
    const lastPage = Math.ceil(filtredCards.length / limit);
    const prevPage = (page !== 1) ? page - 1 : null
    const nextPage = (page < lastPage) ? page + 1 : null
    
    return res.json({
        first: firstPage,
        prev: prevPage,
        next: nextPage,
        last: lastPage,
        cards: currentPage
    })
})

app.put('/suppliers/:id', (req, res) => {
    const { id } = req.params;

    const updateCard = req.body;

    const index = suppliers.findIndex(supplier => supplier.id === id);

    if (index !== -1) {
        suppliers[index] = { ...suppliers[index], ...updateCard };
        res.json(suppliers[index]);
    } else {
        res.status(404).json({ message: 'No card' });
  }
})

app.delete('/suppliers/:id', (req, res) => {
    const { id } = req.params;
    console.log(`удаляю элемент ${id}`);
    const elemIndex = suppliers.findIndex(item => item.id === id)

    if( elemIndex !== -1 ) {
        suppliers.splice(elemIndex, 1)
        res.json({message: 'card is deleted'})
    } else {
      console.error(`Card: ${id} is not found`);
        res.status(404).json({ message: 'did not find' })
    }
})

app.post('/suppliers', (req, res) => {
   
    const newCard = req.body
    suppliers.push(newCard)

    return res.status(201).json(newCard);
})

