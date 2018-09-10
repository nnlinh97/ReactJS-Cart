
let initialState = [
    {
        id: 1,
        name: "Iphone 7 Plus",
        image: "data:image/jpeg;base64,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",
        description: "Apple",
        price: 500,
        inventory: 12,
        rating: 4
    },
    {
        id: 2,
        name: "Samsung galaxy S9",
        image: "data:image/jpeg;base64,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",
        description: "Samsung",
        price: 550,
        inventory: 15,
        rating: 3
    },
    {
        id: 1,
        name: "Sony Z3",
        image: "data:image/jpeg;base64,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",
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