'use client'

import { useState } from "react";

const EmailInput = () => {

    const [email, setEmail] = useState('');

    const handleSubscriber = () => {
        
        if (email.includes('@') === false){
            return;
        }
        
        try {
            
        }

        catch (err){
            console.log('Failed to add subscriber: ', err.message);
        }
    }

    return (
        <div className="sign-up">
            <input value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} placeholder="Email address..." />
            <button onClick={handleSubscriber} className="button-card">Sign Up</button>
        </div>
    )
}

export default EmailInput;