import React, { Dispatch, SetStateAction } from 'react';
import { CategoryListProps, CategoryProps } from '../constants/types';
import CategoriesButton from './CategoriesButton';

function CategoryListContainer({
  CategoryList,
  selectedCategory,
  changeCategory,
}: {
  CategoryList: CategoryListProps[];
  selectedCategory: number;
  changeCategory: any;
}) {
  return (
    <div className="w-full flex flex-row justify-center pb-[29px] px-[30px]">
      {CategoryList.map((category, index) => {
        return (
          <CategoriesButton
            key={index}
            title={category.categoryName}
            isSelected={selectedCategory === category.categoryId}
            changeCategory={() => changeCategory(category.categoryId)}
          />
        );
      })}
    </div>
  );
}

export default CategoryListContainer;
