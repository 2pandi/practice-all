import { authService, createUserWithEmailAndPasswordFbase, signInWithEmailAndPasswordFbase } from "fbase";
import React, { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const onChange = (e) => {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        let data;
        if (newAccount) {
          data = await createUserWithEmailAndPasswordFbase(
            authService,
            email,
            password
          );
        } else {
          data = await signInWithEmailAndPasswordFbase(
            authService,
            email,
            password
          );
        }
        console.log(data);
      }
      catch (error) {
        setError(error.message);
      }
    };

    const toggleAccount = () => setNewAccount((prev) => !prev)

    /**
     * const [form, setForm] = useState({email: "", password: ""});
     * const onChange = ({target: {name, value}}) => setForm({...form, [name]: value});
     */

    return (
      <span>
        <form onSubmit={onSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={onChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={onChange}
          />
          <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
          {error}
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
        <div>
          <button>Countinue with Google</button>
          <button>Countinue with Github</button>
        </div>
      </span>
    );
}
export default Auth;