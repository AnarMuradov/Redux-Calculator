import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from '../Redux/Calculator/CalculatorSlice'


export default configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
  })