import React, { Dispatch, SetStateAction } from 'react';
import { CategoryProps } from '../constants/types';
import CategoriesButton from './CategoriesButton';

function CategoryListContainer({
  CategoryList,
  selectedCategory,
  changeCategory,
}: {
  CategoryList: CategoryProps[];
  selectedCategory: number;
  changeCategory: any;
}) {
  return (
    <div className="flex flex-row justify-center">
      {CategoryList.map((category, index) => {
        return (
          <CategoriesButton
            key={index}
            title={category.title}
            isSelected={selectedCategory === index}
            changeCategory={() => changeCategory(category.id)}
          />
        );
      })}
    </div>
  );
}

export default CategoryListContainer;
