import React from 'react';
import { Form } from 'react-bootstrap';
const FormInput = ({
  control,
  label,
  type,
  name,
  placeholder,
  text,
  handler,
}) => {
  const { Group, Label, Control, Text } = Form;

  return (
    <>
      <Group controlId={control}>
        <Label>{label}</Label>
        <Control
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={handler}
        />

        <Text className="text-info">{text}</Text>
      </Group>
    </>
  );
};

export default FormInput;
