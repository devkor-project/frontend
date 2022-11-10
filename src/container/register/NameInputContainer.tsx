import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import TextInput from '../../components/Input/TextInput';
import NotoText from '../../components/Text/NotoTextBordered';
import { palette } from '../../constants/palette';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

function NameInputContainer({ setName }: { setName: Dispatch<SetStateAction<string>> }) {
  return (
    <ContainerStyled>
      <TitleStyled>
        <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
          이름
        </NotoText>
      </TitleStyled>
      <InnerContainerStyled>
        <TextInput
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          setFunc={setName}
          fontSize={getPixelToPixel(16)}
          fontWeight={'Bold'}
        />
      </InnerContainerStyled>
    </ContainerStyled>
  );
}

const TitleStyled = styled.div`
  display: flex;
  justify-content: left;
  padding-left: ${getWidthPixel(49)};
  padding-bottom: ${getHeightPixel(5)};
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const InnerContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export default NameInputContainer;
