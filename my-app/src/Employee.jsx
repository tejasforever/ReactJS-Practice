import React from 'react'

export default function Employee() {
    const [employeeData, setEmployeeData] = React.useState([
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
    ]);
    const handleFirstName = (e) => {
        setEmployeeData({
            ...employeeData,
            firstName: e.target.value

        });
    }
    const handleLastName = (e) => {
        setEmployeeData({
            ...employeeData,
            lastName: e.target.value
        });
    }
    const handleEmail = (e) => {
        setEmployeeData({
            ...employeeData,
            email: e.target.value
        });
    }
    const handlePhone = (e) => {
        setEmployeeData({
            ...employeeData,
            phone: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(employeeData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={employeeData.firstName}
                    onChange={handleFirstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={employeeData.lastName}
                    onChange={handleLastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={employeeData.email}
                    onChange={handleEmail}
                />
                <input
                    type="tel"
                    placeholder="Phone"
                    value={employeeData.phone}
                    onChange={handlePhone}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
