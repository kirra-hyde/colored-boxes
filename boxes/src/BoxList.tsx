import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

export interface IBox {
  id: string;
  width: string | number;
  height: string | number;
  backgroundColor: string
}

function BoxList() {
  const [boxes, setBoxes] = useState<IBox[]>([]);

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: IBox) {
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }: IBox) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;