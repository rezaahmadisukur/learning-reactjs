import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-5">
            <h1 className="text-8xl font-bold">Oops !</h1>
            <p className="text-xl font-light italic">
                Sorry, an unexpected error has occurred.
            </p>
            <p className="text-2xl font-semibold">
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;
