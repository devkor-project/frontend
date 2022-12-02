import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextButton from '../../components/Button/TextButton';
import NotoText from '../../components/Text/NotoText';
import { ROUTER__URI } from '../../constants';
import { palette } from '../../constants/palette';
import { MY__PAGE__TEXT } from '../../constants/text';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function UserNameContainer({ name }: { name: string }) {
  const navigate = useNavigate();
  return (
    <ContainerStyled>
      <NotoText fontSize={getWidthPixel(25)} fontWeight={'bold'}>
        {name}
      </NotoText>
      <ButtonStyled>
        <TextButton
          text={MY__PAGE__TEXT.button.edit[0]}
          backgroundColor={palette.white}
          fontColor={'#444444'}
          width={getWidthPixel(48)}
          height={getWidthPixel(28)}
          borderColor={palette.gray_02}
          fontSize={getWidthPixel(12)}
          onClick={() => {
            navigate(ROUTER__URI.modifyUserInfoPage);
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
