
let initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        description: "Apple",
        image: "img/iphone7plus.jpg",
        price: 500,
        inventory: 12,
        rating: 4
    },
    {
        id: 2,
        name: "Samsung galaxy S9",
        image: "img/galaxys9.jpg",
        description: "Samsung",
        price: 550,
        inventory: 15,
        rating: 3
    },
    {
        id: 3,
        name: "Sony XA1",
        image: "img/sonyXA1.jpg",
        description: "Sony",
        price: 350,
        inventory: 19,
        rating: 5
    }
];

const product = (state = initialState, action) => {
    switch (action.type) {

        default: return [...state];
    }
}

export default product;