import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
    const userInfo = localStorage.getItem('MTUB');
    return userInfo ? JSON.parse(userInfo) : { token: null }; // ✅ Должен быть объект
  };
  
export const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
