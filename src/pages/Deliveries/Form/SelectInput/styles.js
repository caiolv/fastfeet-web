import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const Container = styled.div`
  width: 100%;

  strong {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    line-height: 19px;
    color: #444444;
  }
`;

export const Select = styled(AsyncSelect)`
  width: 100%;
  margin: 10px 0 16px;
`;
