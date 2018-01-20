import actions from 'constants/actions';

const initialState = {};

export default (state=initialState, action) => {
  switch (action.type) {
    case actions.example: {
      return {
        ...state,
        data: action.data
      }
    }
    default: {
      return state;
    }
  }
}
