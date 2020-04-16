import styled from 'styled-components';
import Select from 'react-select';

export const Container = styled.fieldset`
  width: 100%;
  border: 0;

  strong {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    line-height: 19px;
    color: #444444;
  }
`;

export const SelectContainer = styled(Select)`
  width: 100%;
  margin: 10px 0 16px;
`;
