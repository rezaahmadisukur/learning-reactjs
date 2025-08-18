import "./App.css";
import Button from "./components/Button";

function App() {
    return (
        <div className="flex justify-center items-center h-screen bg-blue-500 gap-4">
            <Button variant="bg-red-700">Login</Button>
            <Button>Logout</Button>
            <Button variant="bg-slate-700"></Button>
        </div>
    );
}

export default App;
