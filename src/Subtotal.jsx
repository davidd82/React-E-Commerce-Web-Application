import "./Subtotal.css";

export default function Subtotal({ subtotal }) {
  return (
    <div id="subtotal">
      Cart Subtotal: ${subtotal}
    </div>
  );
}