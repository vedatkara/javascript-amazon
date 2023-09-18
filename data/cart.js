export const cart = [];

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