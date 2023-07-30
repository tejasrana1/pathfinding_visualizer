import { createSlice } from "@reduxjs/toolkit";


const initialState = {}

export const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        gridComponent: (state, action) => {
            state.gridComponent = action.payload
        },
        restrictedBlocks: (state, action) => {
            state.restrictedBlocks = action.payload
        },
        visitedBlocks: (state, action) => {
            state.visitedBlocks = action.payload
        },
        locatorBlocks: (state, action) => {
            state.locatorBlocks = action.payload
        },
        startElement: (state, action) => {
            state.startElement = action.payload
        },
        endElement: (state, action) => {
            state.endElement = action.payload
        }
    }
})

export const { gridComponent, restrictedBlocks, locatorBlocks, startElement, endElement } = dataSlice.actions;
export const selectGridComponent = (state) => state.data.gridComponent;
export const selectRestrictedBlocks = (state) => state.data.restrictedBlocks;
export const selectLocatorBlocks = (state) => state.data.locatorBlocks;
export const selectStartElement = (state) => state.data.startElement;
export const selectEndElement = (state) => state.data.endElement;
export default dataSlice.reducer;