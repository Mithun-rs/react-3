import { useLocation } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const location = useLocation();
  const username = location.state?.username || "Guest";

  return (
    <div className="welcome-container">
      <h1>Welcome, {username}!</h1>
      <p>You have successfully logged in.</p>
    </div>
  );
};

export default Welcome;
