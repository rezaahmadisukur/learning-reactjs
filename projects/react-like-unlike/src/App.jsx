import { useLikeUnlike } from "./hooks/useLikeUnlike";
import "./App.css";

function App() {
    const { like, unlike, handleIncrementLike, handleIncrementUnlike } =
        useLikeUnlike();

    return (
        <>
            <header className="App-header">
                <h1>Like and Unlike</h1>
                <p>
                    Ini adalah contoh sederhana dari pengguanaan{" "}
                    <i>custom hooks</i> untuk mengelola fungsi dari
                    <i> state like </i> dan <i> state unlike</i> pada React JS.
                    <div>
                        Create by <a href="#">Reza Ahmadi Sukur </a>
                        with React JS
                    </div>
                </p>
            </header>
            <div className="btn-group">
                <button onClick={handleIncrementLike} className="btn">
                    {like === 1 ? (
                        <i
                            className="fa-solid fa-thumbs-up"
                            style={{ color: "blue" }}
                        ></i>
                    ) : (
                        <i className="fa-solid fa-thumbs-up"></i>
                    )}
                    <span>{like}</span>
                </button>
                <button onClick={handleIncrementUnlike} className="btn">
                    {unlike === 1 ? (
                        <i
                            className="fa-solid fa-thumbs-up"
                            style={{ color: "red", rotate: "180deg" }}
                        ></i>
                    ) : (
                        <i
                            className="fa-solid fa-thumbs-up"
                            style={{ rotate: "180deg" }}
                        ></i>
                    )}
                    <span>{unlike}</span>
                </button>
            </div>
        </>
    );
}

export default App;
