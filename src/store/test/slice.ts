import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionResponseInterface, TestState } from "./types";
import { createQuestion, createSection, deleteQuestion, deleteSection, deleteTest, getAllTestRegistrations, getAllTests, getQuestionsOfSection, getQuestionsOfTest, getSectionsOfTest, getTestDetails, getTestRegistrationDetails, loadTest, updateFailedTestResponse, updateQuestion, updateSection } from "./actions";

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
    failedResponses: [],
    testRegistrations: []
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setQuestionResponse: (s, a: PayloadAction<QuestionResponseInterface>) => {
            s.storedResponse.response = s.storedResponse.response.map(s => s.questionId === a.payload.questionId ? a.payload : s)
            if(s.storedResponse.attempts[a.payload.questionId] === 2)
                s.storedResponse.attempts[a.payload.questionId] = 3
            else s.storedResponse.attempts[a.payload.questionId] = 1
        },
        setFailedResponse: (s, a: PayloadAction<QuestionResponseInterface[]>) => {
            s.failedResponses = a.payload
        },
        setMarked: (s, a: PayloadAction<string>) => {
            if(s.storedResponse.attempts[a.payload] === 1)
                s.storedResponse.attempts[a.payload] = 3
            else s.storedResponse.attempts[a.payload] = 2
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
        builder.addCase(updateFailedTestResponse.fulfilled, (s, a) => {
            s.failedResponses = []
        })
        builder.addCase(getAllTests.fulfilled, (s, a) => {
            s.tests = a.payload
        })
        builder.addCase(getAllTestRegistrations.fulfilled, (s, a) => {
            s.testRegistrations = a.payload
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

export const { setQuestionResponse, setFailedResponse, setMarked } = testSlice.actions

export default testSlice.reducer;