import React from 'react';
import styled from 'styled-components';
import { REGISTER__SUBSCRIBE__PAGE__TEXT } from '../constants/text';
import HeaderContainer from '../container/header/HeaderContainer';
import SearchContainer from '../container/main/SearchContainer';
import CategoryButtonContainer from '../container/register/CategoryButtonContainer';
import { ReactComponent as Search_Icon } from '../assets/icon/search.svg';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import TextButton from '../components/Button/TextButton';

export default function RegisterSubscribePage() {
  return (
    <PageStyled>
      <HeaderContainer title={REGISTER__SUBSCRIBE__PAGE__TEXT.header.title[0]} />
      <SearchContainer
        width={getWidthPixel(357)}
        height={getHeightPixel(47)}
        fontSize={getHeightPixel(14)}
        placeHolder={REGISTER__SUBSCRIBE__PAGE__TEXT.search.placeHolder[0]}
        icon={<SearchIconStyled />}
        searchFunc={() => {
          return 0;
        }}
        setFunc={() => {
          return 0;
        }}
      />
      <CategoryButtonContainer />
      {/* <ButtonContainer>
        <TextButton
          text={REGISTER__PAGE__TEXT.header.title[0]}
          backgroundColor={palette.crimson}
          fontColor={palette.white}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          borderColor={palette.crimson}
          onClick={() => return 0}
          }
        />
      </ButtonContainer> */}
    </PageStyled>
  );
}

const PageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: white;
  align-items: center;
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  margin-top: ${getHeightPixel(30)};
`;

const SearchIconStyled = styled(Search_Icon)`
  width: ${getWidthPixel(21)};
  height: ${getHeightPixel(21)};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
