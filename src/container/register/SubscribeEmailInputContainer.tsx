import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

import NotoText from '../../components/Text/NotoText';
import { palette } from '../../constants/palette';
import { REGISTER__PAGE__TEXT } from '../../constants/text';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import { ReactComponent as Info_Icon } from '../../assets/icon/info.svg';
import IconTextInput from '../../components/Input/IconTextInput';
import { RegisterWarningProps } from '../../constants/types';
import WarningTextContainer from './WarningTextContainer';

export default function SubscribeEmailInputContainer({
  subscribeEmail,
  setSubscribeEmail,
  warningCode,
  disabled = false,
}: {
  subscribeEmail: string;
  setSubscribeEmail: Dispatch<SetStateAction<string>>;
  warningCode: RegisterWarningProps;
  disabled?: boolean;
}) {
  return (
    <CenterStyled>
      <ContainerStyled>
        <InnerContainerStyled>
          <TitleStyled>
            <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
              {REGISTER__PAGE__TEXT.title.subscribeEmail[0]}
            </NotoText>
          </TitleStyled>
          <IconTextInput
            width={getWidthPixel(357)}
            height={getHeightPixel(47)}
            setFunc={setSubscribeEmail}
            fontSize={getPixelToPixel(13)}
            placeHolder={REGISTER__PAGE__TEXT.placeholder.subscribeEmail[0]}
            icon={<IconStyled />}
            type={'email'}
            text={subscribeEmail}
            defaultValue={subscribeEmail}
            disabled={disabled}
          />
        </InnerContainerStyled>
        {warningCode.receiveEmailWarningCode && warningCode.receiveEmailWarningCode !== 'accept' ? (
          <WarningTextContainer text={REGISTER__PAGE__TEXT.warning[warningCode.receiveEmailWarningCode][0]} />
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

const InnerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: ${getWidthPixel(357)};
  justify-content: center;
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
