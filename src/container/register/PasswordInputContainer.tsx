import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import Blank from '../../components/Blank';
import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { REGISTER__PAGE__TEXT } from '../../constants/text';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import { ReactComponent as Info_Icon } from '../../assets/icon/info.svg';
import IconTextInput from '../../components/Input/IconTextInput';
import WarningTextContainer from './WarningTextContainer';

function PasswordInputContainer({
  password,
  repeatPassword,
  setPassword,
  setRepeatPassword,
  warningCode,
  secondWarningCode,
}: {
  password: string;
  repeatPassword: string;
  setPassword: Dispatch<SetStateAction<string>>;
  setRepeatPassword: Dispatch<SetStateAction<string>>;
  warningCode: string;
  secondWarningCode: string;
}) {
  return (
    <CenterStyled>
      <ContainerStyled>
        <TitleStyled>
          <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
            {REGISTER__PAGE__TEXT.title.password[0]}
          </NotoText>
        </TitleStyled>
        <IconTextInput
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          setFunc={setPassword}
          fontSize={getPixelToPixel(13)}
          placeHolder={REGISTER__PAGE__TEXT.placeholder.password[0]}
          icon={<IconStyled />}
          type={'password'}
          text={password}
          defaultValue={password}
        />
        {warningCode && warningCode !== 'accept' ? (
          <WarningTextContainer text={REGISTER__PAGE__TEXT.warning[warningCode][0]} />
        ) : null}
        <Blank height={getHeightPixel(10)} />
        <IconTextInput
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          setFunc={setRepeatPassword}
          fontSize={getPixelToPixel(13)}
          placeHolder={REGISTER__PAGE__TEXT.placeholder.repeatPassword[0]}
          icon={<IconStyled />}
          type={'password'}
          text={repeatPassword}
        />
        {secondWarningCode && secondWarningCode !== 'accept' ? (
          <WarningTextContainer text={REGISTER__PAGE__TEXT.warning[secondWarningCode][0]} />
        ) : null}
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

const TitleStyled = styled.div`
  display: flex;
  justify-content: left;
  padding-left: ${getWidthPixel(25)};
  padding-bottom: ${getHeightPixel(5)};
  width: 100%;
`;

const IconStyled = styled(Info_Icon)`
  width: ${getWidthPixel(14)};
  height: ${getHeightPixel(14)};
`;

export default PasswordInputContainer;
