import React from 'react';
import ProvidersButton from './ProvidersButton';

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
    </div>
  );
}

export default ProviderListContainer;
