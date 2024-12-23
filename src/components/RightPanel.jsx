import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import { RightPanelContainer } from '../styles/StyledComponents';
import FormField from './FormField';

const RightPanel = ({ fields, onSaveField }) => {
  return (
    <Droppable droppableId="rightPanel">
      {(provided) => (
        <RightPanelContainer
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {fields.map((field, index) => (
            <FormField
              key={field.id}
              id={field.id}
              onSave={onSaveField}
            />
          ))}
          {provided.placeholder}
        </RightPanelContainer>
      )}
    </Droppable>
  );
};

export default RightPanel; 