import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import { addDoc, collection, onSnapshot, query, orderBy } from "firebase/firestore";

export const Home = ({userObj}) => {
    const [twoweet, setTwoweet] = useState('');
    const [twoweets, setTwoweets] = useState([]);

    useEffect(() => {
        const q = query(collection(dbService, "twoweets"), orderBy("createdAt","desc"));
        onSnapshot(q, (snapshot) => {
            const twoweetArr = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTwoweets(twoweetArr);
        });
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(dbService, "twoweets"), {
            userEmail: userObj.email,
            twoweet,
            createdAt: new Date().toLocaleString()
        });
        setTwoweet('');
    };

    const onChange = (e) => {
        setTwoweet(e.target.value); 
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={twoweet}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="2witter" />
            </form>
            <section>
                {twoweets.map(twoweet => <div key={twoweet.id}>
                    <h4>{twoweet.userEmail}</h4>
                    <div>{twoweet.createdAt}</div>
                    <div>{twoweet.twoweet}</div>
                </div>)}
            </section>
        </>
    );
}
export default Home;