import React from 'react';

export default function MyAnothertExample() {
  const [data, setData] = React.useState({
    name: '',
    email: '',
  });

  return (
    <div>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
}
