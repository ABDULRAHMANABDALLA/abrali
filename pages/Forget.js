import React from 'react';
import './Forget.css';

function Forget() {
    return (
        <div className="container">
            <h1>Forgot Password</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" required />
                </div>
                <button type="submit">Reset Password</button>
            </form>
            {/* <div className="link">
                <Login to='../Booking'>Login Again</Login>
            </div> */}
        </div>
    );
}
export default Forget;

