export const increment = () => {
	return {
		type : 'INCREMENT'
	}
}

export const addStar = (name, id) => {
	return {
		type : 'ADD_STAR',
		name,
		id
	}
}

export const getStars = () => {
	return (dispatch) => {
		dispatch({
			type : 'GET_STARS_REQUEST'
		})
		setTimeout(()=> {
			dispatch({
				type : 'GET_STARS_SUCCESS',
				payload : [
					{ id : 0, name : '1djgh' },
					{ id : 1, name : '2ddfhsh' },
					{ id : 2, name : '3dfgdgdgh' },
					{ id : 3, name : '4r4gedgh' }
				],
			})
		}, 1000);
	}
}