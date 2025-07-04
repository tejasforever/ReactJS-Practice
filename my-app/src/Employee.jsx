import React from 'react';

export default function Employee() {
    // ❌ Initial state is set as an array containing a single object.
    //    Since we are only dealing with one employee, there's no need to use an array.
    // ✅ Best practice: Use an object directly to store a single record's data.
    const [employeeData, setEmployeeData] = React.useState([
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
    ]);
    // 📝 Currently using an array of objects, but we are only dealing with one employee object.
    // 👉 Instead of: const [employeeData, setEmployeeData] = useState([{...}])
    // ✅ Use:        const [employeeData, setEmployeeData] = useState({...})

    // --------------------------------------------------------------------
    // 🔽 These are individual handler functions for each input field.
    // 🔍 Purpose: They update the corresponding field in the state one by one.
    // 🛑 These work but are repetitive and harder to maintain as the form grows.
    // ✅ It's better to use a shared handler (see `handleValues`) for scalability.
    
    // const handleFirstName = (e) => {
    //     setEmployeeData({
    //         ...employeeData,
    //         firstName: e.target.value
    //     });
    // }

    // const handleLastName = (e) => {
    //     setEmployeeData({
    //         ...employeeData,
    //         lastName: e.target.value
    //     });
    // }

    // const handleEmail = (e) => {
    //     setEmployeeData({
    //         ...employeeData,
    //         email: e.target.value
    //     });
    // }

    // const handlePhone = (e) => {
    //     setEmployeeData({
    //         ...employeeData,
    //         phone: e.target.value
    //     });
    // }

    // --------------------------------------------------------------------
    // ✅ handleValues - Single reusable input handler
    // This dynamic handler updates the correct property in employeeData
    // based on the `name` attribute of the input field.
    const handleValues = (e) => {
        setEmployeeData({
            ...employeeData,
            [e.target.name]: e.target.value,
        });
    };

    // --------------------------------------------------------------------
    // ✅ handleSubmit - Called when the form is submitted
    // Prevents the default page reload and logs the employee data to the console
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employeeData); // for debugging or further processing
    };

    return (
        <div>
            {/* 
                ✅ Controlled form: Each input's value is linked to React state (employeeData).
                ✅ Updates are handled through the shared handleValues function.
                📝 name attributes MUST match the keys in employeeData for the dynamic handler to work.
            */}
            <form onSubmit={handleSubmit}>
                {/* <input
                    type="text"
                    placeholder="First Name"
                    value={employeeData.firstName}
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
