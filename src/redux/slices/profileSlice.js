import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Endpoint from '../../utils/path/Path'
import { post,get } from '../../utils/query/Query';

export const getCompanyCount = createAsyncThunk('company-count', async () => {
  try {
    const response = await get(Endpoint.companyCount)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})

export const createCompany = createAsyncThunk('company', async (data) => {
  try {
    const response = await post(Endpoint.createCompany, data)
    return response.data
  }
  catch (error) {
    return error.response.data
  }
})



const initialStateValues = {
  isLogin:  false,
  data: [],
  profile : {}
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState: initialStateValues,
  reducers: {
    thisProfile: (state, action) => {
      state.profile = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCompanyCount.pending, (state, action) => {
      state.isLoading = true
    });

    builder.addCase(getCompanyCount.fulfilled, (state, action) => {
      state.isLoading = false,
      state.data = action.payload.data.company

    });

    builder.addCase(getCompanyCount.rejected, (state, action) => {
      state.isLoading = false
    });

  

  }
})

// Action creators are generated for each case reducer function
// export const { setlogin } = loginSlice.actions

 export const { thisProfile } = profileSlice.actions

export default profileSlice.reducer