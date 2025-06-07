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

    try {
      const response = await axios.get(`http://localhost:8080/${examCode}`, {
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
        currentQuestionIndex: 0,  // Ensure it starts from the first question
        testSubmitted: false,      // Reset submission status when new questions load
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

    if (!questionStatuses[currentQuestionIndex]) return; // Prevents errors if questions aren't loaded

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

  // Reset Test Properly
  resetTest: () => {
    const { questions } = get(); // Keep fetched questions

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
