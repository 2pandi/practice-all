import React, { useState } from "react";

export const Home = () => {
    const [twoweet, setTwoweet] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
    };
    const onChange = (e) => {
        setTwoweet(e.target.value);
    };
    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={twoweet} type="text" placeholder="What's on your mind?" maxLength={120} />
            <input type="submit" value="2witter" />
        </form>
    );
}
export default Home;