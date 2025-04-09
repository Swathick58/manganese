import { create } from "zustand";
import "./Bears.css";
import { combine } from "zustand/middleware";

const useAnimateStore = create(
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

const BearCounter = (): React.ReactNode => {
  const { animals, addAnimals } = useAnimateStore();

  return (
    <div className="bear-counter-root">
      <p>{animals} bears in the zoo!</p>
      <button
        onClick={() => {
          addAnimals();
        }}
      >
        Add bears
      </button>
    </div>
  );
};

export default BearCounter;