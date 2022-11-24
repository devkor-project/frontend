import React from 'react';
import styled from 'styled-components';
import TextButton from '../../components/Button/TextButton';
import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function UserNameContainer({ name }: { name: string }) {
  return (
    <ContainerStyled>
      <NotoText fontSize={getWidthPixel(25)} fontWeight={'bold'}>
        {name}
      </NotoText>
      <ButtonStyled>
        <TextButton
          text={'편집'}
          backgroundColor={palette.white}
          fontColor={'#444444'}
          width={getWidthPixel(48)}
          height={getWidthPixel(28)}
          borderColor={palette.gray_02}
          fontSize={getWidthPixel(12)}
          onClick={() => {
            return 0;
          }}
        />
      </ButtonStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${getHeightPixel(30)};
  padding-left: ${getWidthPixel(24)};
  justify-content: space-between;
`;

const ButtonStyled = styled.div`
  margin-right: ${getWidthPixel(24)};
`;
