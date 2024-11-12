const styles = {
  backgroundColor: "white",
  border: "1px solid green",
  padding: "0 0.5rem",
  width: 150,
  textAlign: "center",
};

export function NameContainer({ name, isDragging }) {
  return (
    <div style={{ ...styles, cursor: isDragging ? "grabbing" : "grab" }}>
      <p>{name}</p>
    </div>
  );
}
