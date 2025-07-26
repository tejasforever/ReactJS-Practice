
// Card component: displays a single product's details in a styled card format.
// Receives a 'data' prop (product object) from parent (e.g., EmployeeList).
// Uses Bootstrap or custom classes for styling.
export default function Card(props) {
  const { data } = props; // Destructure product data from props
  return (
    <div className="card-container">
      {/* Main card container */}
      <div className="card">
        {/* Product image */}
        <img src={data.image} alt={data.title} className="card-image" />
        {/* Product title */}
        <h3 className="card-title">{data.title}</h3>
        {/* Product description */}
        <p className="card-description">{data.description}</p>
        {/* Product price */}
        <div className="card-price">Price: ${data.price}</div>
        {/* Product category */}
        <div className="card-category">Category: {data.category}</div>
      </div>
    </div>
  );
}
