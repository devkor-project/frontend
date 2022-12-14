import React from 'react';
import { CategoryListProps } from '../constants/types';
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
  // console.log(CategoryList[0]?.categoryId);

  return (
    <div className="w-full">
      <div className="w-full flex flex-row pb-[15px] overflow-x-scroll px-[10px]">
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
    </div>
  );
}

export default CategoryListContainer;
