import { createSlice } from "@reduxjs/toolkit";
import { TestState } from "./types";
import { createSection, deleteSection, getAllTests, getQuestionsOfSection, getSectionsOfTest, getTestDetails, updateSection } from "./actions";

const initialState: TestState = {
    tests: [],
    test: {},
    sections: [],
    questions: []
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getTestDetails.fulfilled, (s, a) => {
            s.test = a.payload
        })
        builder.addCase(getAllTests.fulfilled, (s, a) => {
            s.tests = a.payload
        })
        builder.addCase(createSection.fulfilled, (s, a) => {
            s.sections = [...s.sections, a.payload]
        })
        builder.addCase(updateSection.fulfilled, (s, a) => {
            s.sections = s.sections.filter(t=>t._id === a.payload._id ? a.payload : t)
        })
        builder.addCase(deleteSection.fulfilled, (s, a) => {
            s.sections = s.sections.filter(t=>t._id !== a.payload._id)
        })
        builder.addCase(getSectionsOfTest.fulfilled, (s, a) => {
            s.sections = a.payload
        })
        builder.addCase(getQuestionsOfSection.fulfilled, (s, a) => {
            s.questions = a.payload
        })
    },
})

export default testSlice.reducer;