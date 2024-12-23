import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { AppContainer } from './styles/StyledComponents';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

function App() {
  const [fields, setFields] = useState([]);
  const [fieldCounter, setFieldCounter] = useState(1);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    if (
      result.source.droppableId === 'leftPanel' &&
      result.destination.droppableId === 'rightPanel'
    ) {
      const newField = {
        id: `field-${fieldCounter}`,
      };
      setFields([...fields, newField]);
      setFieldCounter(fieldCounter + 1);
    }
  };

  const handleSaveField = (fieldId, fieldData) => {
    setFields(
      fields.map((field) =>
        field.id === fieldId ? { ...field, ...fieldData } : field
      )
    );
  };

  const handleSaveForm = () => {
    const formConfig = {
      fields: fields.map(({ id, name, enabled }) => ({
        id,
        name,
        enabled,
      })),
    };
  
    // Update this URL to your deployed form-renderer.js location
    const rendererUrl = 'https://shyamincode.github.io/form-renderer/';
  
    const script = `
      <script>
        window.formConfig = ${JSON.stringify(formConfig)};
      </script>
      <script src="${rendererUrl}"></script>
    `;
  
    console.log('Generated Script Tags:', script);
    alert('Form configuration has been generated! Check the console.');
  }; 

  

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <AppContainer>
        <LeftPanel onSaveForm={handleSaveForm} />
        <RightPanel fields={fields} onSaveField={handleSaveField} />
      </AppContainer>
    </DragDropContext>
  );
}


export default App; 
