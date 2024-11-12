import { useState } from "react";
import "./App.css";
import { Drag } from "./dnd/Drag";
import { Drop } from "./dnd/Drop";
import { DndContext, pointerWithin } from "@dnd-kit/core";
import { useEffect } from "react";
import { getPeople } from "./api/query";

function App() {
  const [items, setItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    getPeople().then((data) => setItems(data));
  }, []);

  return (
    <DndContext collisionDetection={pointerWithin} onDragEnd={handleDragEnd}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          minHeight: "500px",
        }}
      >
        <div
          style={{
            // padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {items.length > 0 &&
            items.map((item) => <Drag key={item.id} item={item} />)}
        </div>
        <Drop id="A">
          {savedItems.length > 0 ? (
            savedItems.map((item) => <Drag key={item.id} item={item} />)
          ) : (
            <p>Dropzone</p>
          )}
        </Drop>
      </div>
    </DndContext>
  );

  function handleDragEnd(event) {
    const elemFromItems = items.find((elem) => elem.id === event.active.id);

    if (elemFromItems && event.over) {
      setSavedItems([...savedItems, elemFromItems]);

      const arrWithoutElem = items.filter(
        (elem) => elem.id !== event.active.id
      );

      setItems(arrWithoutElem ? arrWithoutElem : []);
    }

    const elemFromSavedItems = savedItems.find(
      (elem) => elem.id === event.active.id
    );

    if (elemFromSavedItems && !event.over) {
      if (elemFromSavedItems) {
        setItems([...items, elemFromSavedItems]);

        const arrWithoutElem = savedItems.filter(
          (elem) => elem.id !== event.active.id
        );

        setSavedItems(arrWithoutElem ? arrWithoutElem : []);
      }
    }
  }
}

export default App;
