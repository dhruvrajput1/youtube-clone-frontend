import axiosInstance from "../../helpers/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    loading: false,
    subscribed: null,
    mySubscriptions: [],
    channelSubscribers: []
};

export const toggleSubscription = createAsyncThunk("toggleSubscription", async(channelId) => {
    try {
        const response = await axiosInstance.post(`/subscriptions/c/${channelId}`);
        return response.data.message;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

export const getUserChannelSubscribers = createAsyncThunk("getUserChannelSubscribers", async(subscriberId) => {
    try {
        const response = await axiosInstance.get(`/subscriptions/u/${subscriberId}`);
        return response.data.message;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

export const getSubscribedChannels = createAsyncThunk("getSubscribedChannels", async(channelId) => {
    try {
        const response = await axiosInstance.get(`/subscriptions/c/${channelId}`);
        return response.data.message;
    } catch (error) {
        toast.error(error?.response?.data?.error);
        throw error;
    }
})

const subscriptionSlice = createSlice({
    name: "subscription",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(toggleSubscription.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(toggleSubscription.fulfilled, (state, action) => {
            state.loading = false;
            state.subscribed = action.payload;
        });
        builder.addCase(getUserChannelSubscribers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserChannelSubscribers.fulfilled, (state, action) => {
            state.loading = false;
            state.channelSubscribers = action.payload;
        });
        builder.addCase(getSubscribedChannels.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getSubscribedChannels.fulfilled, (state, action) => {
            state.loading = false;
            state.mySubscriptions = action.payload.filter(
                (subscription) => subscription?.subscribedChannel?.latestVideo // check in this line if any error
            );
        });
    }
})

export default subscriptionSlice.reducer;