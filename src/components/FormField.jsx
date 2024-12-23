import React, { useState } from 'react';
import Switch from 'react-switch';
import { FieldContainer, Input, Button } from '../styles/StyledComponents';

const FormField = ({ id, onSave }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [fieldName, setFieldName] = useState('');
  const [enabled, setEnabled] = useState(false);

  const handleSave = () => {
    if (fieldName.trim()) {
      onSave(id, { name: fieldName, enabled });
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <FieldContainer>
        <Input
          type="text"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          placeholder="Enter field name"
        />
        <Button onClick={handleSave}>Save</Button>
      </FieldContainer>
    );
  }

  return (
    <FieldContainer>
      <span>{fieldName}</span>
      <Switch
        checked={enabled}
        onChange={(checked) => setEnabled(checked)}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        height={24}
        width={48}
      />
    </FieldContainer>
  );
};

export default FormField; 