const initialState = {
	stars : [],
	loading : false,
	number : 1
}

const page = (state = initialState, action) => {
	switch(action.type) {

		case 'INCREMENT':
			return {
				...state,
				number : ++state.number
			}
		case 'GET_STARS_REQUEST':
			return {
				...state,
				loading : true
			}
		case 'GET_STARS_SUCCESS':
			return {
				...state,
				stars : action.payload,
				loading : false
			}
		case 'ADD_STAR':
			return {
				...state,
				stars : [
					...state.stars, 
					star(null, {...action, type : 'CREATE_STAR'})
				]
			}
		default:
			return state;
	}
}

const star = (state = {}, action) => {
	switch(action.type) {
		case 'CREATE_STAR':
			return {
				id : action.id,
				name : action.name,
				films : []
			}
		default:
			return state;
	}
}

export default { page }