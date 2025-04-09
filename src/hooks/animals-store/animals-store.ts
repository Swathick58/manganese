import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useAnimalsStore = create(
  combine(
    {
      animals: 0,
    },
    (set) => {
      return {
        addAnimals: () => {
          set((state) => {
            return {
              animals: state.animals + 1,
            };
          });
        },
     };
}
)
);