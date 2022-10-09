import React from 'react';
import styled, { css } from 'styled-components';

function Blank({ ...rest }: { width?: string; height?: string }) {
  return <BlankStyled {...rest} />;
}

const BlankStyled = styled.div<{ width?: string; height?: string }>`
  ${({ width = '0px', height = '0px' }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export default Blank;
