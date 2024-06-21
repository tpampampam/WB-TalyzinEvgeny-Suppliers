type MenuItem = {
    name:string
    link: string
} 

export interface Change {
    value: number
    label: string
}
export interface Option extends Change{
    type: string
}
export type Warehouses = {
    [key: number]: string
}

export type Cities = 'Москва'|'Псков'|'Ярославль'|'Нижний Новгород'|'Абакан'|'Кострома'
export type CityWarehouses = {
    [key in Cities]: Change[];
}



export const BASE_URL: string = 'http://localhost:8000'

export const MENU: MenuItem[] = [
    {
        name: "Поставки",
        link: ''
    },
    {
        name: "Товары",
        link: 'goods'
    },
    {
        name: "Цены и скидки",
        link: 'prices'
    },
    {
        name: "Аналитика",
        link: 'analitics'
    },
    {
        name: "Реклама",
        link: 'adv'
    }
]

export const OPTIONS: Option[] = [
    { value: 1, label: 'По номеру', type: 'number'},
    { value: 2, label: 'По городу', type: 'city'},
    { value: 3, label: 'По типу поставки', type: 'type'},
    { value: 4, label: 'По статусу', type: 'status'},
]

export const CHANGE: Change[] = [
    { value: 1, label: 'Редактировать' },
    { value: 2, label: 'Отменить поставку' },
]

export const DATA: Record<string, Change[]> = {
    city: [
      { value: 1, label: "Москва" },
      { value: 2, label: "Псков" },
      { value: 3, label: "Абакан" },
      { value: 4, label: "Нижний Новгород" },
      { value: 5, label: "Кострома" },
      { value: 6, label: "Ярославль" },
    ],
    type: [
      { value: 1, label: "Короб" },
      { value: 2, label: "Монопаллета" }
    ],
    warehouse: [
      { value: 1, label: "Склад" },
      { value: 2, label: "СЦ Абакан" },
      { value: 3, label: "Черная грязь" },
      { value: 4, label: "Внуково" },
      { value: 5, label: "Белая Дача" },
      { value: 6, label: "Электросталь" },
      { value: 7, label: "Вёшки" },
    ],
    status: [
      { value: 1, label: "В пути" },
      { value: 2, label: "Задерживается" },
    ],
};

export const WAREHOUSES: Warehouses = {
    1: "д.Черная грязь, ул.Промышленная, с.2",
    2: "Яничкин проезд, 3",
    3: "Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт",
    4: "Поселение Марушкинское, квартал №8",
    5: "Невская ул.13",
    6:  "ул. Индустриальная, д.9/1",
    7: "ул.Игарская, д.21Г",
    8: "ул. ЛенинаБ д.16",
    9: "г.Кострома, ул.Центральная д.7",
    10:"Ногинский р-н, Московская обл., г. Электросталь ввыывормилриодт"
}

export const CITY_WAREHOUSES: CityWarehouses = {
    "Москва" : [
        {value: 1, label: 'Черная грязь'},
        {value: 2, label: "Белая Дача"},
        {value: 3, label: "Электросталь"},
        {value: 4, label: "Внуково"},
        {value: 5, label: "Вёшки"}
    ],
    "Псков" : [
        {value: 6, label: 'Склад'}
    ],
    "Абакан" : [
        {value: 7, label: 'СЦ Абакан'}
    ],
    "Нижний Новгород" : [
        {value: 8, label: 'Склад'}
    ],
    "Кострома" : [
        {value: 9, label: 'Склад'}
    ],
    "Ярославль" : [
        {value: 10, label: 'Склад'}
    ]
}


