import "./Bears.css";
import { useAnimalsStore } from "../../../../hooks/animals-store/animals-store";

const Bears = (): React.ReactNode => {
  const { animals, addAnimals } = useAnimalsStore();

  return (
    <div className="bears-root">
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

export default Bears;