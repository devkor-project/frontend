import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import Blank from '../../components/Blank';
import DropDownInput from '../../components/Input/DropDownInput';
import NotoText from '../../components/Text/NotoText';
import { GRADE__LIST, MAJOR__LIST, STUDENT__ID__LIST } from '../../constants';
import { palette } from '../../constants/palette';
import { REGISTER__PAGE__TEXT } from '../../constants/text';
import { getHeightPixel, getPixelToPixel, getWidthPixel } from '../../utils/responsive';

function MajorInputContainer({
  setMajor,
  setGrade,
  setStudentID,
  major,
  grade,
  studentID,
}: {
  setMajor: Dispatch<SetStateAction<number>>;
  setGrade: Dispatch<SetStateAction<number>>;
  setStudentID: Dispatch<SetStateAction<number>>;
  major: number;
  grade: number;
  studentID: number;
}) {
  return (
    <ContainerStyled>
      <TitleStyled>
        <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
          {REGISTER__PAGE__TEXT.title.major[0]}
        </NotoText>
      </TitleStyled>
      <InnerContainerStyled>
        <DropDownInput
          list={MAJOR__LIST}
          selected={major}
          width={getWidthPixel(357)}
          height={getHeightPixel(47)}
          setFunc={setMajor}
          fontSize={getPixelToPixel(16)}
          fontWeight={'Bold'}
          dividerWidth={getWidthPixel(307)}
        />
      </InnerContainerStyled>
      <Blank height={getHeightPixel(20)} />
      <DetailContainerStyled>
        <DetailInnerContainerStyled>
          <SubTitleStyled>
            <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
              {REGISTER__PAGE__TEXT.title.year[0]}
            </NotoText>
          </SubTitleStyled>
          <InnerContainerStyled>
            <DropDownInput
              list={STUDENT__ID__LIST}
              selected={studentID}
              width={getWidthPixel(174)}
              height={getHeightPixel(47)}
              setFunc={setStudentID}
              fontSize={getPixelToPixel(16)}
              fontWeight={'Bold'}
            />
          </InnerContainerStyled>
        </DetailInnerContainerStyled>
        <Blank width={getWidthPixel(9)} />
        <DetailInnerContainerStyled>
          <SubTitleStyled>
            <NotoText fontSize={getPixelToPixel(15)} fontWeight={'Medium'} fontColor={palette.gray_02}>
              {REGISTER__PAGE__TEXT.title.grade[0]}
            </NotoText>
          </SubTitleStyled>
          <InnerContainerStyled>
            <DropDownInput
              list={GRADE__LIST}
              selected={grade}
              width={getWidthPixel(174)}
              height={getHeightPixel(47)}
              setFunc={setGrade}
              fontSize={getPixelToPixel(16)}
              fontWeight={'Bold'}
            />
          </InnerContainerStyled>
        </DetailInnerContainerStyled>
      </DetailContainerStyled>
    </ContainerStyled>
  );
}

const TitleStyled = styled.div`
  padding-left: ${getWidthPixel(49)};
  padding-bottom: ${getHeightPixel(5)};
  display: flex;
  justify-content: left;
`;

const SubTitleStyled = styled.div`
  padding-bottom: ${getHeightPixel(5)};
  padding-left: ${getWidthPixel(24)};
  display: flex;
  justify-content: left;
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

const DetailContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DetailInnerContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MajorInputContainer;
