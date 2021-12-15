/*---login/registration-------*/

function RegistrationLogin() {
  async function loginUser() {
    console.log("loginUser started");
    await fetch("http://localhost:3001/loginAttempt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("UserName", "No One");
        console.log(localStorage.getItem("UserName"));
        if (res.isMatch === "false") {
          alert("Please Try Again");
          return;
        } else if (res.isMatch === "true") {
          const userName = document.getElementById("username").value;
          localStorage.setItem("UserName", userName);
        }
      })
      .then((res) => {
        let user_name = localStorage.getItem("UserName");
        console.log(user_name);
        if (user_name === "No One" || user_name === null) {
          console.log("If statement is true: " + user_name);
          return;
        } else {
          document.location.replace("http://localhost:3000/tasks");
        }
      });
  }
  /*----Login Validation-----*/

  function validateLogin(e) {
    e.preventDefault();
    console.log("Validating");
    if (document.getElementById("username").value === "") {
      alert("Enter Username!");
      document.getElementById("username").focus();
      return false;
    }
    if (document.getElementById("password").value === "") {
      alert("Enter Password!");
      document.getElementById("password").focus();
      return false;
    } else {
      loginUser();
    }
  }

  /*---To Register a New User-----*/

  function registerUser() {
    fetch(
      "http://localhost:3001/users", // this is place holder TODO
      {
        method: "POST",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: document.getElementById("EnterFirstName").value,
          lastName: document.getElementById("EnterLastName").value,
          userName: document.getElementById("EnterUserName").value,
          email: document.getElementById("EnterEmail").value,
          password: document.getElementById("EnterPassword").value,
        }),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const userName = document.getElementById("EnterUserName").value;
        localStorage.setItem("UserName", userName); //stored local
      })
      .then((res) => {
        let user_name = localStorage.getItem("UserName");
        console.log("Username is: " + user_name);
        if (user_name === "No One" || user_name === null) {
          return;
        } else {
          alert("User was added");
          document.location.replace("http://localhost:3000/home"); //redirect TODO
        }
      });
  }

  /*----- Registration Validation-----*/

  function validateRegistration(e) {
    e.preventDefault();
    if (document.getElementById("EnterFirstName").value === "") {
      alert("Enter First Name");
      document.getElementById("EnterFirstName").focus();
      return false;
    }
    if (document.getElementById("EnterLastName").value === "") {
      alert("Enter Last Name");
      document.getElementById("EnterLastName").focus();
      return false;
    }
    if (document.getElementById("EnterUserName").value === "") {
      alert("Enter User Name");
      document.getElementById("EnterUserName").focus();
      return false;
    }
    if (document.getElementById("EnterEmail").value === "") {
      alert("Enter Valid Email Address");
      document.getElementById("EnterEmail").focus();
      return false;
    }

    if (document.getElementById("EnterPassword").value === "") {
      alert("EnterPassword!");
      document.getElementById("EnterPassword").focus();
      return false;
    } else {
      registerUser();
    }
  }
  return (
    <div className="row">
      <div className="col-s-0 col-md-1 col-lg-4"></div>
      <div className="col">
        <div className="container border border-primary border-2 mt-5 ">
          <ul className="nav nav-tabs p-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="register-tab"
                data-bs-toggle="tab"
                data-bs-target="#register"
                type="button"
                role="tab"
                aria-controls="register"
                aria-selected="false"
              >
                Register
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <form
                className="pb-3 pt-3 was-validated"
                onSubmit={(e) => {
                  validateLogin(e);
                }}
              >
                <div className="mb-3 text-start form-group">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    id="username"
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>{" "}
            </div>

            <div
              className="tab-pane fade"
              id="register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
              <form
                className="pb-3 pt-3"
                onSubmit={(e) => {
                  validateRegistration(e);
                }}
              >
                <div className="mb-3 text-start">
                  <label htmlFor="EnterFirstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="EnterFirstName"
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="EnterLastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="EnterLastName"
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="EnterUserName" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="EnterUserName"
                    required
                  />
                </div>{" "}
                <div className="mb-3 text-start">
                  <label htmlFor="EnterEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="EnterEmail"
                    required
                  />
                </div>
                <div className="mb-3 text-start">
                  <label htmlFor="EnterPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="EnterPassword"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-s-0 col-md-1 col-lg-4"></div>
    </div>
  );
}

export default RegistrationLogin;
