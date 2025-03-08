// Manejo de la lógica de la aplicación

// Inicializar el estado
export const initialState = {
    cartItems: []
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {

            // Verificar si el item ya está en el carrito
            const {id} = action.payload;
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id === id ? {
                        ...existingItem,
                        quantity: existingItem.quantity + 1
                    }: item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }
            
        }
        case 'REMOVE_ITEM': {
            const {id: removeItemID} = action.payload;

            const existingItemRemove = state.cartItems.find((item) => item.id === removeItemID);

            if(existingItemRemove.quantity === 1) {
                return {
                    ...state,
                    // El filter me mostrará todos los items que no sean el que quiero filtrar
                    cartItems: state.cartItems.filter((item) => item.id !== removeItemID)
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item) => item.id == removeItemID ?
                {
                    ...existingItemRemove,
                    quantity: existingItemRemove.quantity -1

                } : item)
                }
            }

        }
        default:
            return state;

    }
}