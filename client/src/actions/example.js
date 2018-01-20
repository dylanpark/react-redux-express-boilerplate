import actions from 'constants/actions';

export function example(payload) {
  return {
    type: actions.example,
    data: payload.data
  }
};
