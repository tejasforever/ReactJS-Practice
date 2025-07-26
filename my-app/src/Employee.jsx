
// Employee: Employee form for entering and managing a single employee's data.
// Shows two approaches for handling form state and input changes in React.
// 1. Dynamic handler (recommended): One function for all fields using the input's name attribute.
// 2. Single-field handlers (reference): Separate handler for each field (commented for reference).
import React from 'react';

export default function Employee() {
    // State for a single employee's data (object, not array)
    const [employeeData, setEmployeeData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });


    // --------------------------------------------------------------------
    // Reference: Manual (single-field) handlers for each form field
    // Uncomment and use these if you want to handle each field separately.
    // This approach is useful for learning or for forms with custom logic per field.
    // Not recommended for large forms due to repetition.
    //
    // const handleFirstName = (e) => {
    //     setEmployeeData({ ...employeeData, firstName: e.target.value });
    // };
    // const handleLastName = (e) => {
    //     setEmployeeData({ ...employeeData, lastName: e.target.value });
    // };
    // const handleEmail = (e) => {
    //     setEmployeeData({ ...employeeData, email: e.target.value });
    // };
    // const handlePhone = (e) => {
    //     setEmployeeData({ ...employeeData, phone: e.target.value });
    // };

    // --- Recommended: Dynamic handler for all fields ---
    // This handler updates the correct property in employeeData
    // based on the `name` attribute of the input field.
    const handleValues = (e) => {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log employee data to console
        console.log(employeeData);
    };

    // Render the employee form
    return (
        <div>
            {/*
                ✅ Controlled form: Each input's value is linked to React state (employeeData).
                ✅ Updates are handled through the shared handleValues function.
                📝 name attributes MUST match the keys in employeeData for the dynamic handler to work.
                ---
                Reference: To use single-field handlers, uncomment the relevant handler and onChange below.
            */}
            <form onSubmit={handleSubmit}>
                {/* <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleFirstName}
                /> */}
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={employeeData.firstName}
                    onChange={handleValues}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={employeeData.lastName}
                    onChange={handleValues}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={employeeData.email}
                    onChange={handleValues}
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    name="phone"
                    value={employeeData.phone}
                    onChange={handleValues}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
