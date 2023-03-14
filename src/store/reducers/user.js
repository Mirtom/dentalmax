import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';
import {Navigation} from 'react-native-navigation';
import {homeRoot} from '../../..';

export const login = createAsyncThunk('user/login', async params => {
  return new Promise(async (resolve, reject) => {
    console.log(`${Config.BASE_URL}users/signin`);
    await axios
      .post(`${Config.BASE_URL}users/signin`, params)
      .then(({data}) => {
        resolve(data);
      })
      .catch(err => {
        console.warn('ERR LOGIN', err);
        reject(err);
      });
  });
});

const initialState = {
  data: {},
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: {
    [login.pending]: (state, {payload}) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.error = false;
      state.data = payload;
      Navigation.setRoot(homeRoot);
    },
    [login.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = true;
    },
  },
});

const {actions, reducer} = userSlice;

//Selectors
export const selectUserData = state => state.user.data;
export const selectUserLoading = state => state.user.loading;
export const selectUserError = state => state.user.error;

export const {createPost, updatePost, deletePost, logout} = actions;
export default reducer;
