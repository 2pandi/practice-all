import React, { useEffect, useState } from "react";
import { dbService, authService } from "fbase";
import { addDoc, getDocs, collection } from "firebase/firestore";

export const Home = () => {
    const [twoweet, setTwoweet] = useState('');
    const [twoweets, setTwoweets] = useState([]);
    
    const get2weets = async () => {
        const db2weets = await getDocs(collection(dbService, "twoweets"));
        db2weets.forEach(doc => {
            const twoweetObject = {
                ...doc.data(),
                id: doc.id,
            };
            setTwoweets(prev => [twoweetObject, ...prev]);
        })
    };

    useEffect(() => {
        get2weets();
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        const userEmail = authService.currentUser.email;
        await addDoc(collection(dbService, "twoweets"), {
            userEmail,
            twoweet,
            createdAt: new Date().toLocaleString()
        });
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