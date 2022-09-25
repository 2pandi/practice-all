import React, { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e) => {
      const { name, value } = e.target;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
    const onSubmit = (e) => {
      e.preventDefault();
    };

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
          <input type="submit" value="Log in"/>
        </form>
        <div>
          <button>Countinue with Google</button>
          <button>Countinue with Github</button>
        </div>
      </span>
    );
}
export default Auth;