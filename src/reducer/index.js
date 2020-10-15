const initialState = {
    offers: [],
    offersError: ''
}
const productDisplayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OFFERS_RECEIVED':
            return {
                ...state,
                offers: action.payload
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default productDisplayReducer