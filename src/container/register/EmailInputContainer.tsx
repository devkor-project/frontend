import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import Blank from '../../components/Blank';
import TextButton from '../../components/Button/TextButton';
import TextInput from '../../components/Input/TextInput';
import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { REGISTER__PAGE__TEXT } from '../../constants/text';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { postMailAPI, postMailReqAPI } from '../../utils/api';

import { ReactComponent as Info_Icon } from '../../assets/icon/info.svg';
import IconTextInput from '../../components/Input/IconTextInput';
import WarningTextContainer from './WarningTextContainer';

function EmailInputContainer({
  email,
  code,
  setEmail,
  setCode,
  warningCode,
  secondWarningCode,
}: {
  email: string;
  code: string;
  setEmail: Dispatch<SetStateAction<string>>;
  setCode: Dispatch<SetStateAction<string>>;
  warningCode: string;
  secondWarningCode: string;
}) {
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
            width={getWidthPixel(238)}
            height={getHeightPixel(47)}
            setFunc={setEmail}
            fontSize={getPixelToPixel(13)}
            placeHolder={REGISTER__PAGE__TEXT.placeholder.email[0]}
            icon={<IconStyled />}
            type="email"
          />
          <Blank width={getWidthPixel(8)} />
          <TextButton
            text={REGISTER__PAGE__TEXT.button.email[0]}
            backgroundColor={palette.white}
            borderColor={palette.crimson}
            fontColor={palette.crimson}
            width={getWidthPixel(111)}
            height={getHeightPixel(47)}
            fontSize={getPixelToPixel(14)}
            onClick={() => {
              postMailReqAPI({ email });
            }}
          />
        </InnerContainerStyled>
        {warningCode ? <WarningTextContainer text={REGISTER__PAGE__TEXT.warning[warningCode][0]} /> : null}
        <Blank height={getHeightPixel(10)} />
        <InnerContainerStyled>
          <TextInput
            width={getWidthPixel(238)}
            height={getHeightPixel(47)}
            setFunc={setCode}
            fontSize={getPixelToPixel(13)}
            type="email"
          />
          <Blank width={getWidthPixel(8)} />
          <TextButton
            text={REGISTER__PAGE__TEXT.button.submitCode[0]}
            backgroundColor={palette.white}
            borderColor={palette.crimson}
            fontColor={palette.crimson}
            width={getWidthPixel(111)}
            height={getHeightPixel(47)}
            fontSize={getPixelToPixel(14)}
            onClick={() => {
              postMailAPI({ email, code });
            }}
          />
        </InnerContainerStyled>
        {secondWarningCode ? <WarningTextContainer text={REGISTER__PAGE__TEXT.warning[secondWarningCode][0]} /> : null}
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
