const listReducer = (state: { list: any[] } = {list: []}, action: any) => {
    switch (action.type) {
        case 'list/add':
            console.log(action)
            return {...state, list: [...state.list, action.value]}
        case 'list/remove':
            return {state, list: [...state.list.filter((_, index) => index !== action.value)]}
        default:
            return state
    }
}
export default listReducer;
