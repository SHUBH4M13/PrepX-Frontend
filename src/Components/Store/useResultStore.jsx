import { create } from "zustand";

const useResultStore = create((set, get) => ({
  totalquestions: 0,
  correct_ans: 0,
  wrong_ans: 0,
  score: 0,

  // Update answer count based on decision (0 for wrong, 1 for correct)
  updateCorrectAns: (decision) => {
    set((state) => {
      if (decision === 0) {
        return { wrong_ans: state.wrong_ans + 1 };
      }
      if (decision === 1) {
        return { correct_ans: state.correct_ans + 1 };
      }
      return state;
    });
  },

  // Update total score (4 points per correct answer)
  calculateScore: () => {
    set((state) => ({
      score: state.correct_ans * 4 - state.wrong_ans * 1.33
    }));
  },

  // Set the total number of questions
  setTotalQuestions: (total) => {
    set({ totalquestions: total });
  },

  // Reset all scores and counts
  resetScore: () => {
    set({
      totalquestions: 0,
      correct_ans: 0,
      wrong_ans: 0,
      score: 0,
    });
  }
}));

export default useResultStore;