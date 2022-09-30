import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen=(state)=>state.mail.sendMessageIsOpen;
export default mailSlice.reducer;