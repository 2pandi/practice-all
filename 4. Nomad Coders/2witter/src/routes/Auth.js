import {
  authService,
  createUserWithEmailAndPasswordFbase,
  signInWithEmailAndPasswordFbase,
  googleProvider,
  githubProvider,
  signInWithPopupFbase,
} from "fbase";
import React, { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  /**
   * const [form, setForm] = useState({email: "", password: ""});
   * const onChange = ({target: {name, value}}) => setForm({...form, [name]: value});
   */

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
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  const onSocialClick = async (e) => {
    const {
      target: { name },
    } = e;
    let provider;
    if (name === "google") {
      provider = new googleProvider();
    } else if (name === "github") {
      provider = new githubProvider();
    }
    await signInWithPopupFbase(authService, provider);
  };

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
      <span onClick={toggleAccount}>
        {newAccount ? "Sign in" : "Create Account"}
      </span>
      <div>
        <button onClick={onSocialClick} name="google">
          Countinue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Countinue with Github
        </button>
      </div>
    </span>
  );
};
export default Auth;
