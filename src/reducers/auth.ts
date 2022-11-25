export const SetToken = 'AUTH/SET_TOKEN';
// export const GetToken = "TOKEN/GET"

export const setToken = (token: string, time: any) => ({
  type: SetToken,
  payload: { accessToken: token, expiredTime: time },
});
// export const getToken = () => ({
//     type: GetToken,
// });

const initialState = {
  payload: { accessToken: null, expiredTime: null },
};

export const tokenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SetToken:
      console.log('set token');

      return {
        ...state,
        payload: action.payload,
      };
    default:
      return state;
  }
};
