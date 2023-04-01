/* eslint-disable max-statements */
import React from "react";

import { Button } from "../../components/button";
import { Inset } from "./style";
import PropertyDetailsInfo from '../../components/property-details-info';
import EstimatedValue from '../../components/estimated-value';
import ValuationChange from '../../components/valuation-change';
import Mortgage from '../../components/mortgage';
import { account } from '../../utils/dummy';

const Detail = () => {
  const {
    name: accountName,
    bankName,
    postcode,
    lastUpdate,
    originalPurchasePriceDate,
    recentValuation: { amount: recentValuationAmount },
    originalPurchasePrice,
    updateAfterDays,
    associatedMortgages
  } = account;

  let mortgage;

  if (associatedMortgages.length) {
    mortgage = associatedMortgages[0];
  }

  return (
    <Inset>
      <EstimatedValue
        label="Estimated Value"
        recentValuationAmount={recentValuationAmount}
        lastUpdate={lastUpdate}
        updateAfterDays={updateAfterDays}
      />
      <PropertyDetailsInfo
        label="Property details"
        accountName={accountName}
        bankName={bankName}
        postcode={postcode}
      />
      <ValuationChange
        label="Valuation Change"
        originalPurchasePrice={originalPurchasePrice}
        originalPurchasePriceDate={originalPurchasePriceDate}
        recentValuationAmount={recentValuationAmount}
      />
      {mortgage && (
        <Mortgage
          label="Mortgage"
          currentBalance={associatedMortgages[0].currentBalance}
          associatedMortgageName={associatedMortgages[0].name}
        />
      )}
      <Button
        // This is a dummy action
        onClick={() => alert("You have navigated to the edit account page")}
      >
        Edit account
      </Button>
    </Inset>
  );
};

export default Detail;
