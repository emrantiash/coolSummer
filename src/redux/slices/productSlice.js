// import cookieCutter from 'cookie-cutter';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path'
import { post,get } from '../../utils/query/Query';
// const CryptoJS = require("crypto-js");

export const getProductAccess = createAsyncThunk('product-access', async () => {
  try {
    const response = await get(Endpoint.productAccess)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

})

export const getProductLine = createAsyncThunk('product-line', async (data) => {
  try {
    const response = await get(Endpoint.getSuiteProduct, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

})

export const productPurchase = createAsyncThunk('product-purchase', async (data) => {
  try {
    const response = await post(Endpoint.productPurchase, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }

})




const initialStateValues = {
  isLogin:  false,
  data: [],
  product : {}
}

export const productSlice = createSlice({
  name: 'login',
  initialState: initialStateValues,
  reducers: {
    thisProduct: (state, action) => {
      state.product = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductLine.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getProductLine.fulfilled, (state, action) => {
      state.isLoading = false,
      state.data = action.payload.data
    });

    builder.addCase(getProductLine.rejected, (state, action) => {
      state.isLoading = false
    });

  

  }
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

 export const { thisProduct } = productSlice.actions

export default productSlice.reducer