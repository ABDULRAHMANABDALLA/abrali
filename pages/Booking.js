import axios from 'axios';
import './Booking.css'
import React, { useEffect, useState } from 'react';

function Booking() {
    const [customer, setCustomers] = useState([]);
    const [postData, setPostCustomersData] = useState({
        Customername: '',

        customeremail: '',
        tour: '',
        phoneNumber: '',
        date: '',

    });



    // Fetch all students on component mount
    useEffect(() => {
        fetchCustomer();
    }, []);

    // Function to fetch all students
    const fetchCustomer = () => {
        axios.get('http://localhost:8080/api/v1/customer/get-customer')
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error('Error when listing customers:', error);
            });
    }


    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPostCustomersData({ ...postData, [name]: value });
    }

    // Function to handle adding a new student
    const handleAdd = () => {
        axios.post('http://localhost:8080/api/v1/customer/create-customer', postData)
            .then(response => {
                fetchCustomer(); // Refresh student list after adding
                setPostCustomersData({
                    Customername: '',

                    customeremail: '',
                    tour: '',
                    phoneNumber: '',
                    date: '',

                });
            })
            .catch(error => {
                console.error('Error when posting customers:', error);
            });
    }




    // Function to handle deleting a student
    const handleDelete = (customerId) => {
        axios.delete(`http://localhost:8080/api/v1/customer/delete-customer${customerId}`)
            .then(response => {
                fetchCustomer(); // Refresh student list after deleting
            })
            .catch(error => {
                console.error('Error when deleting customer:', error);
            });
    }

    // Function to handle updating a student
    const handleUpdate = (customerId, updatedData) => {
        axios.put(`http://localhost:8080/api/v1/customer/update/${customerId}`, updatedData)
            .then(response => {
                fetchCustomer(); // Refresh student list after updating
            })
            .catch(error => {
                console.error('Error when updating customer:', error);
            });
    }



    return (
        <div className="booking-form-container">
            <form className="booking-form">
                <h2>Book Your Tour Now</h2>
                <div className="form-group">
                    <label htmlFor="name"> Name</label>


                    <input
                        value={postData.name}
                        onChange={handleInputChange}

                        type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        value={postData.email}
                        onChange={handleInputChange}
                        type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input value={postData.phonenumber}
                        onChange={handleInputChange}
                        type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                    <label htmlFor="tour">Select Tour</label>
                    <select id="tour" name="tour" required>
                        <option value="city">The house of wonder</option>
                        <option value="nungwi">Nungwi</option>
                        <option value="cultural">Jozani forest</option>
                        <option value="ngorongoro">Ngorongoro crater</option>
                        <option value="waterfall">Waterfall</option>
                        <option value="rock-island">Rock island</option>
                        <option value="kilimanjaro">Kilimanjaro mountain</option>
                        <option value="coralreef">Coral reef</option>
                    </select>


                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input value={postData.date}
                        onChange={handleInputChange}
                        type="date" id="date" name="date" required />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="participants">Number of Participants</label>
                    <input type="number" id="participants" name="participants" min="1" required />
                </div> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Booking;
