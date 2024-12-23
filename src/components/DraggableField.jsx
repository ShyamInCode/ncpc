import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { FieldContainer } from '../styles/StyledComponents';

const DraggableField = ({ id, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <FieldContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          Add Field
        </FieldContainer>
      )}
    </Draggable>
  );
};

export default DraggableField; 