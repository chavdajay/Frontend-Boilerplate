import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = process.env.REACT_APP_API_BASE_URL;

export const fetchDemos = createAsyncThunk("get", async () => {
  const response = await axios.get(`${API}/fetch`);
  return response.data;
});

export const addDemo = createAsyncThunk("create", async (name) => {
  const response = await axios.post(`${API}/create`, { name });
  return response.data;
});

export const deleteDemo = createAsyncThunk("delete", async (id) => {
  await axios.delete(`${API}/delete/${id}`);
  return id;
});


const demoSlice = createSlice({
  name: "demos",
  initialState: { demos: [], loading: false },
  extraReducers: (builder) => {
    builder
    .addCase(fetchDemos.fulfilled, (state, action) => {
        state.demos = Array.isArray(action.payload) ? action.payload : [];
      })
      
      .addCase(addDemo.fulfilled, (state, action) => {
        state.demos.push(action.payload);
      })
      .addCase(deleteDemo.fulfilled, (state, action) => {
        state.demos = state.demos.filter((demo) => demo._id !== action.payload);
      });
  },
});

export default demoSlice.reducer;
