import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { LeftPanelContainer, Button } from '../styles/StyledComponents';
import DraggableField from './DraggableField';

const LeftPanel = ({ onSaveForm }) => {
  return (
    <LeftPanelContainer>
      <Droppable droppableId="leftPanel">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <DraggableField id="field-template" index={0} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Button onClick={onSaveForm}>Save Form</Button>
    </LeftPanelContainer>
  );
};

export default LeftPanel; 