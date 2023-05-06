import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice';


const store = configureStore({
  reducer: {
    user: userSlice,
  },
})

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;

