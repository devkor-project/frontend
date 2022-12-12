import React from 'react';
import ProvidersButton from './ProvidersButton';
import { ReactComponent as LeftScrollIcon } from '../assets/icon/leftScroll.svg';
import { ReactComponent as RightScrollIcon } from '../assets/icon/rightScroll.svg';
import styled from 'styled-components';

function ProviderListContainer({
  ProviderList,
  selectedProvider,
  changeSelectedProvider,
}: {
  ProviderList: string[];
  selectedProvider: string;
  changeSelectedProvider: any;
}) {
  return (
    <div className="w-full pt-[5px]">
      <div className="w-full flex flex-row px-[10px] items-center pb-[11px]">
        <LeftScrollButton>
          <LeftScrollIcon />
        </LeftScrollButton>
        <div className="w-full flex flex-row overflow-x-scroll">
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
        <RightScrollBUtton>
          <RightScrollIcon />
        </RightScrollBUtton>
      </div>
    </div>
  );
}

export default ProviderListContainer;
const LeftScrollButton = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-color: #ffffff;
`;
const RightScrollBUtton = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 8px;
  background-color: #ffffff;
`;
