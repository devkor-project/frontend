import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { REGISTER__PAGE__TEXT } from '../../constants/text';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import { ReactComponent as Info_Icon } from '../../assets/icon/info.svg';
import IconTextInput from '../../components/Input/IconTextInput';
import { RegisterWarningProps } from '../../constants/types';

function EmailInputContainer({ email, setEmail }: { email: string; setEmail: Dispatch<SetStateAction<string>> }) {
  return (
    <CenterStyled>
      <ContainerStyled>
        <TitleStyled>
          <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
            {REGISTER__PAGE__TEXT.title.email[0]}
          </NotoText>
        </TitleStyled>
        <InnerContainerStyled>
          <IconTextInput
            width={getWidthPixel(357)}
            height={getHeightPixel(47)}
            setFunc={setEmail}
            fontSize={getPixelToPixel(13)}
            icon={<IconStyled />}
            type="email"
            text={email}
            disabled={true}
            defaultValue={email}
          />
        </InnerContainerStyled>
      </ContainerStyled>
    </CenterStyled>
  );
}

const CenterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getWidthPixel(357)};
  justify-content: center;
`;

const InnerContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const TitleStyled = styled.div`
  padding-left: ${getWidthPixel(25)};
  padding-bottom: ${getHeightPixel(5)};
  display: flex;
  justify-content: left;
`;

const IconStyled = styled(Info_Icon)`
  width: ${getWidthPixel(14)};
  height: ${getHeightPixel(14)};
`;

export default EmailInputContainer;
