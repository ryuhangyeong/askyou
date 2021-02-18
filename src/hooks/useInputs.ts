import * as React from 'react';

const { useReducer } = React;

export interface StateTypes {
  [key: string]: string;
}

export interface ActionTypes {
  name: string;
  value: string;
}

const reducer = (state: StateTypes, action: ActionTypes) => ({
  ...state,
  [action.name]: action.value,
});

export default (initialState: StateTypes) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    dispatch(e.target);
  return [state, onChange];
};
