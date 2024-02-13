// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchVideo = createAsyncThunk(
//   "fetchVideo",
//   async (value, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         `https://gist.github.com/jsturgis/3b19447b304616f18657`
//       );
//       console.log("🚀 ~ response:", response);
//       return response.data;
//     } catch (error) {
//       if (!error.response) {
//         throw error;
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );
