import { ADD_PRODUCTS, CARD_QUANTITY_DECREASER } from "./actionTypes";
import { initialState } from "./initialState";

// export const initialState = [
//     {
//         id: 9163,
//         name: 'Spring and summershoes',
//         category: 'Mens shoes',
//         imageUrl: 'https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=740&t=st=1677438634~exp=1677439234~hmac=890094980305ded8afa869758c1fa244ca2e68e0700fded3349c51eaf16e2186',
//         price: '900',
//         quantity: '5'
//       },
//     {
//         id: 9164,
//         name: 'Spring and summershoes',
//         category: 'Mens shoes',
//         imageUrl: 'https://i.dummyjson.com/data/products/59/thumbnail.jpg',
//         price: '1400',
//         quantity: '13'
//       },
// ]

const formReducers =(state=initialState, action)=>{
    switch (action.type) {
        case ADD_PRODUCTS:
            return [
                ...state,
                {
                    id:Math.floor(Math.random() * (10000 - 1) + 1),
                    ...action.payload
                }
                
            ];
        case CARD_QUANTITY_DECREASER:
            return state.map((product) =>{
                if(product.id !== action.payload.id){
                    return product;
                } else{
                     return {
                        ...product,
                        quantity: action.payload.quantity - 1,
                    }
                }
            })
        
    
        default:
            return state;
    }
}
export default formReducers;