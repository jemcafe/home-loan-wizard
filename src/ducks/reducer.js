const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
};

// Action types
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";
const UPDATE_CITY = "UPDATE_CITY";

// initialState is the default state
function reducer ( state = initialState, action ) {
    switch ( action.type ) {
        case UPDATE_LOAN_TYPE:
            return { ...state, loanType: action.payload };  // return Object.assign( {}, state, {loanType: action.payload} );
        case UPDATE_PROPERTY_TYPE:
            return { ...state, propertyType: action.payload };
        case UPDATE_CITY:
            return { ...state, city: action.payload };
        default: 
            return state;
    }
}

// Action creators
export function updateLoanType ( loanType ) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

export function updatePropertyType ( property ) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

export function updateCity ( city ) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export default reducer;