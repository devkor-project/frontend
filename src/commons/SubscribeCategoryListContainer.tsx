import React from 'react';
import { CategoryDataProps, CategoryListProps } from '../constants/types';
import CategoriesButton from './CategoriesButton';
import { ReactComponent as SubscribeAdd } from '../assets/icon/subscribe_add.svg';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';
import { palette } from '../constants/palette';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function SubscribeCategoryListContainer({
  CategoryList,
  selectedCategory,
  changeCategory,
}: {
  CategoryList: CategoryDataProps[];
  selectedCategory: number;
  changeCategory: any;
}) {
  // console.log(CategoryList[0]?.categoryId);
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="w-full flex flex-row pb-[29px] overflow-x-scroll px-[10px]">
        <SubscribeAddButton onClick={() => navigate('/subscribe')}>
          <SubscribeAdd />
        </SubscribeAddButton>
        {CategoryList.map((category, index) => {
          return (
            <CategoriesButton
              key={index}
              title={category.provider + ' ' + category.categoryName}
              isSelected={selectedCategory === category.categoryId}
              changeCategory={() => changeCategory(category.categoryId)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SubscribeCategoryListContainer;

const SubscribeAddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${getWidthPixel(40)};
  height: ${getHeightPixel(40)};
  border-radius: ${getWidthPixel(30)};
  border: 1px solid ${palette.gray_03};
`;
