import styled from 'styled-components';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';

export const PageStyled = styled.div`
  flex-direction: column;
  width: 100%;
  height: ${getHeightPixel(700)};
  overflow-y: scroll;
  align-items: center;
  background-color: white;
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(80)};
  display: flex;
`;
