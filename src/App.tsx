import { useTransition } from "react";
import "./index.css";

const App = () => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name");
    setTimeout(() => {
      startTransition(() => {
        console.log("Name updated to: ", name);
      });
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto">
      <form>
        <div className="space-y-12">
          <div className=" pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
