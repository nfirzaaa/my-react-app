import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
    {
    label: <Link to="/landing-page">Landing Page</Link>,
    key: "1",
  },
  {
    label: <Link to="/createProduct">Product</Link>,
    key: "2",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "3",
  },
];