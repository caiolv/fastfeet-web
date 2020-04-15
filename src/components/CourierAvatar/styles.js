import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => lighten(0.7, props.color)};
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.color};
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
