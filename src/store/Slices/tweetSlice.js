import axiosInstance from "../../helpers/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    tweets: []
};

export const createTweet = createAsyncThunk("createTweet", async(content) => {
    try {
        const response = await axiosInstance.get("/tweets", content);
        toast.success("Tweet created successfully");
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

export const getUserTweets = createAsyncThunk("getUserTweets", async(userId) => {
    try {
        const response = await axiosInstance.get(`/tweets/user/${userId}`);
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

export const updateTweet = createAsyncThunk("updateTweet", async({tweetId, content}) => {
    try {
        const response = await axiosInstance.put(`/tweets/${tweetId}`, {content});
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

export const deleteTweet = createAsyncThunk("deleteTweet", async(tweetId) => {
    try {
        const response = await axiosInstance.delete(`/tweets/${tweetId}`);
        toast.success("Tweet deleted successfully");
        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

const tweetSlice = createSlice({
    name: "tweets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(createTweet.pending, (state) => {
            state.loading = true;
        })
       .addCase(createTweet.fulfilled, (state, action) => {
            state.loading = false;
            state.tweets.unshift(action.payload);
        })
       .addCase(getUserTweets.pending, (state) => {
            state.loading = true;
        })
       .addCase(getUserTweets.fulfilled, (state, action) => {
            state.loading = false;
            state.tweets = action.payload;
        })
        .addCase(deleteTweet.pending, (state) => {
            state.loading = true;
        })
        .addCase(deleteTweet.fulfilled, (state, action) => {
            state.loading = false;
            state.tweets = state.tweets.filter(tweet => tweet._id !== action.payload);
        })
    }
})

export default tweetSlice.reducer;