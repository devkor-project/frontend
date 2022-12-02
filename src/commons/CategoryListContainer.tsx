import React, { Dispatch, SetStateAction } from 'react';
import { Provider } from 'react-redux';
import { CategoryListProps, CategoryProps } from '../constants/types';
import CategoriesButton from './CategoriesButton';
import ProvidersButton from './ProvidersButton';

function CategoryListContainer({
  CategoryList,
  selectedCategory,
  changeCategory,
  ProviderList,
  selectedProvider,
  changeSelectedProvider,
}: {
  CategoryList: CategoryListProps[];
  selectedCategory: number;
  changeCategory: any;
  ProviderList: string[];
  selectedProvider: string;
  changeSelectedProvider: any;
}) {
  console.log(ProviderList);
  // console.log(CategoryList[0]?.categoryId);

  return (
    <div className="w-full">
      <div className="w-full flex flex-row justify-center mb-[13px]">
        {ProviderList.map((provider, index) => {
          return (
            <ProvidersButton
              key={index}
              title={provider}
              changeSelectedProvider={() => {
                changeSelectedProvider(provider);
                console.log(provider);
              }}
              isSelected={selectedProvider === provider}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-row justify-center pb-[29px] overflow-x-scroll">
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
