import { create } from "zustand";
import axios from "axios";

const useTestStore = create((set, get) => ({
  questions: [],
  currentQuestionIndex: 0,
  questionStatuses: [],
  testSubmitted: false,

  // Fetch Questions
  fetchQuestions: async (examCode, token) => {
    if (!examCode || !token) return;

    const EXAM_URL = `${import.meta.env.VITE_BACKEND_URL}/${examCode}`;

    try {
      const response = await axios.get(EXAM_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchedQuestions = response.data;

      set({
        questions: fetchedQuestions,
        questionStatuses: fetchedQuestions.map((_, index) => ({
          id: index,
          answered: false,
          selectedOption: null,
          markedForReview: false,
        })),
        currentQuestionIndex: 0,
        testSubmitted: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },

  // Select Option
  selectOption: (selectedOption) => {
    const { currentQuestionIndex, questionStatuses } = get();

    const updatedStatuses = [...questionStatuses];
    updatedStatuses[currentQuestionIndex] = {
      ...updatedStatuses[currentQuestionIndex],
      answered: true,
      selectedOption,
    };

    set({ questionStatuses: updatedStatuses });
  },

  // Mark for Review
  toggleMarkForReview: () => {
    const { currentQuestionIndex, questionStatuses } = get();

    if (!questionStatuses[currentQuestionIndex]) return;

    const updatedStatuses = [...questionStatuses];
    updatedStatuses[currentQuestionIndex] = {
      ...updatedStatuses[currentQuestionIndex],
      markedForReview: !updatedStatuses[currentQuestionIndex].markedForReview,
    };

    set({ questionStatuses: updatedStatuses });
  },

  // Navigation
  navigateQuestion: (direction) => {
    set((state) => {
      if (direction === "next" && state.currentQuestionIndex < state.questions.length - 1) {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
      if (direction === "prev" && state.currentQuestionIndex > 0) {
        return { currentQuestionIndex: state.currentQuestionIndex - 1 };
      }
      return state;
    });
  },

  // Reset Test
  resetTest: () => {
    const { questions } = get();

    set({
      testSubmitted: false,
      currentQuestionIndex: 0,
      questionStatuses: questions.map((_, index) => ({
        id: index,
        answered: false,
        selectedOption: null,
        markedForReview: false,
      })),
    });
  },
}));

export default useTestStore;
