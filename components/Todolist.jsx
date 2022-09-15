import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todolist(props) {
  const [isMouseOver, setMouseOver] = useState(false);

  const Show = () => {
    setMouseOver(true);
  };

  const Hide = () => {
    setMouseOver(false);
  };

  return (
    <div onMouseOver={Show} onMouseOut={Hide}>
      <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
        <span
          className="me-auto"
          style={
            props.completed
              ? { textDecoration: "line-through" }
              : { textDecoration: "" }
          }
        >
          {props.title}
        </span>
        {isMouseOver && (
          <>
            <button className="btn btn-success" onClick={() => props.onMark()}>
              <IconCheck />
            </button>
            <button className="btn btn-secondary" onClick={() => props.up()}>
              <IconArrowUp />
            </button>
            <button className="btn btn-secondary" onClick={() => props.down()}>
              <IconArrowDown />
            </button>
            <button className="btn btn-danger" onClick={() => props.onDelete()}>
              <IconTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
