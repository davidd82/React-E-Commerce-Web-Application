import "./TotalCount.css";

export default function TotalCount({ totalcount }) {
  return (
    <div id="totalcount">
      Products in Cart: {totalcount}
    </div>
  );
}