import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionResponseInterface, TestState } from "./types";
import { createQuestion, createSection, deleteQuestion, deleteSection, deleteTest, getAllTests, getQuestionsOfSection, getQuestionsOfTest, getSectionsOfTest, getTestDetails, getTestRegistrationDetails, loadTest, updateQuestion, updateSection, updateTestResponse } from "./actions";

const initialState: TestState = {
    tests: [],
    test: {},
    sections: [],
    questions: [],
    counts: {
        sections: 0,
        questions: 0
    },
    loadTest: {
        sections: []
    },
    storedResponse: {
        response: [],
        attempts: {}
    },
    failedResponses: []
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setQuestionResponse: (s, a: PayloadAction<QuestionResponseInterface>) => {
            s.storedResponse.response = s.storedResponse.response.map(s => s.questionId === a.payload.questionId ? a.payload : s)
            s.storedResponse.attempts[a.payload.questionId] = 1
        },
        setFailedResponse: (s, a: PayloadAction<QuestionResponseInterface[]>) => {
            s.failedResponses = a.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(getTestDetails.fulfilled, (s, a) => {
            s.test = a.payload
        })
        builder.addCase(getTestRegistrationDetails.fulfilled, (s, a) => {
            s.test = a.payload.test
            s.counts.sections = a.payload.sections
            s.counts.questions = a.payload.questions
        })
        builder.addCase(deleteTest.fulfilled, (s, a) => {
            s.tests = s.tests.filter(t=>t._id !== a.payload._id)
        })
        builder.addCase(loadTest.fulfilled, (s, a) => {
            s.loadTest = a.payload.response
            s.storedResponse = a.payload.storedResponse
        })
        builder.addCase(updateTestResponse.fulfilled, (s, a) => {
            if(a.payload)
                s.failedResponses = []
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
        builder.addCase(getQuestionsOfTest.fulfilled, (s, a) => {
            s.questions = a.payload
        })
        builder.addCase(createQuestion.fulfilled, (s, a) => {
            s.questions = [...s.questions, a.payload]
        })
        builder.addCase(updateQuestion.fulfilled, (s, a) => {
            s.questions = s.questions.filter(question => {
                if (question._id === a.payload._id) {
                    return a.payload;
                }
                return question;
            });
        })
        builder.addCase(deleteQuestion.fulfilled, (s, a) => {
            s.questions = s.questions.filter(t=>t._id !== a.payload._id)
        })
    },
})

export const { setQuestionResponse, setFailedResponse } = testSlice.actions

export default testSlice.reducer;