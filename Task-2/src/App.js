import React, { useEffect, useState } from "react";

const App = () => {
  const [state, setState] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    console.log(data.data);
    if (data.data) {
      setState(data.data);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "black",
          color: "#fff",
          padding: "0 2%",
          outline: "none",
        }}
      >
        <div>
          <h2>Navbar</h2>
        </div>
        <div>
          <button
            style={{ border: "none", background: "#fff" }}
            onClick={getUsers}
          >
            GET USERS
          </button>
        </div>
      </div>
      {state?.length === 0 && <p>No Users Found !!</p>}
      {state?.map((item) => (
        <div
          style={{
            border: "2px solid #c4c4c4",
            padding: "5% 8",
            width: "30%",
            margin: "2%",
            textAlign: "center",
          }}
        >
          <img src={item.avatar} />
          <h1>
            {item.first_name} {item.last_name}
          </h1>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
