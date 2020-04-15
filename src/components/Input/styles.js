import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  width: ${(props) => props.width};
  flex-direction: column;
  margin-bottom: 10px;

  strong {
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    line-height: 19px;
    color: #444444;
    margin-bottom: 7px;
  }
`;

export const UnformInput = styled(Input)`
  /* width: 100%; */
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: #333;
  font-size: 16px;
  margin: 0 0 10px;

  &::placeholder {
    color: #999999;
  }
`;
