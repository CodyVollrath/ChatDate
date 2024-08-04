import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../models/Interfaces';
import {persistReducer, persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        }
    },
});

export const {login, logout, setUser} = userSlice.actions;
export const userReducer = userSlice.reducer;

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, userReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
});

const persistor = persistStore(store);
export {store, persistor};