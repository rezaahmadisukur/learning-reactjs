import { Link } from "react-router-dom";
import UserList from "./components/UserList";
const App = () => {
  return (
    <div className="container">
      <Link to="/create" className="button is-warning is-small">
        Add Data
      </Link>
      <UserList />
    </div>
  );
};

export default App;
