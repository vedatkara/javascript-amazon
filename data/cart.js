export const cart = [ {
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
}, {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}];

export function addToCard(productId) {
    let cardItemMatched;

    cart.forEach((cardItem) => {
        if(productId === cardItem.id) {
            cardItemMatched = cardItem;
        }
    
    });

    if(cardItemMatched) {
        cardItemMatched.quantity += 1;
    }

    else {
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}