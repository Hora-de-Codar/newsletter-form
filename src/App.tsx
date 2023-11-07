import { Form } from "./components/Form";

function App() {
  return (
    <div className="bg-stone-50 min-h-screen w-full flex flex-col items-center pt-5">
      <h1 className="font-bold text-[2rem]">Formulário com TypeScript</h1>
      <div className="w-96 mt-4 bg-stone-200 px-4 py-5 rounded-lg">
        <Form />
      </div>
    </div>
  );
}

export default App;
