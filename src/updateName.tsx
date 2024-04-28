import { useState, useTransition } from "react";

// Using pending state from Actions
export const UpdateName = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const updateName = (name: string) => {
    console.log("Updating name to: " + name);
    const hasError = true;
    return hasError;
  };
  const handleSubmit = async () => {
    startTransition(() => {
      const error = updateName(name);
      if (error) {
        setError("Failed to update name");
        return;
      }
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};
