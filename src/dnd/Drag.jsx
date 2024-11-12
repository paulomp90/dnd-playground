import { useDraggable } from "@dnd-kit/core";
import { NameContainer } from "../components/NameContainer";

export function Drag({ item }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: item.id,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <NameContainer name={item.name} isDragging={isDragging} />
    </div>
  );
}
