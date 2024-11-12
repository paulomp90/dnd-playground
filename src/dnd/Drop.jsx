import { useDroppable } from "@dnd-kit/core";

const styles = {
  border: "1px solid blue",
  width: "175px",
  padding: "0.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.5rem",
};

export function Drop(props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ ...styles, color: isOver ? "green" : undefined }}
    >
      {props.children}
    </div>
  );
}
