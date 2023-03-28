import { configureStore } from '@reduxjs/toolkit'
import UpdateData from './UpdateData'

export default configureStore({
  reducer: {
    user: UpdateData
  }
})