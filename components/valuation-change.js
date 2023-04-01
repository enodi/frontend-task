import React from "react";
import PropTypes from "prop-types";

import {
  AccountList, AccountListItem, InfoText, AccountListFlex, InfoTag
} from "../modules/property-details/style";
import PropertySection from './property-section';
import { formatAmount, formatDate } from '../utils/helper';

const ValuationChange = ({
  label,
  originalPurchasePrice,
  recentValuationAmount,
  originalPurchasePriceDate
}) => {
  const accountOriginalPurchasePriceDate = new Date(originalPurchasePriceDate);
  const currentYear = new Date().getFullYear();
  const numberOfYearsSincePurchase = currentYear - accountOriginalPurchasePriceDate.getFullYear();

  const sincePurchase = recentValuationAmount - originalPurchasePrice;
  const sincePurchasePercentage = sincePurchase && sincePurchase / originalPurchasePrice * 100;
  const annualAppreciation = sincePurchasePercentage && sincePurchasePercentage / numberOfYearsSincePurchase;

  return (
    <PropertySection
      label={label}
      children={
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Purchased for ${formatAmount(originalPurchasePrice)} `} 
              {`in ${formatDate(accountOriginalPurchasePriceDate, "MMMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListFlex>
            <InfoText>Since purchase</InfoText>
            <InfoTag>
              {formatAmount(sincePurchase)}
              {` (${sincePurchasePercentage}%)`}
            </InfoTag>
          </AccountListFlex>
          <AccountListFlex>
            <InfoText>Annual appreciation</InfoText>
            <InfoTag>{`${annualAppreciation}%`}</InfoTag>
          </AccountListFlex>
        </AccountList>
      }
    />
  )
}

ValuationChange.propTypes = {
  label: PropTypes.string.isRequired,
  originalPurchasePrice: PropTypes.number.isRequired,
  originalPurchasePriceDate: PropTypes.string.isRequired,
  recentValuationAmount: PropTypes.number.isRequired,
}

export default ValuationChange;