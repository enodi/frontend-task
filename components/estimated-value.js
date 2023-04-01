import React from "react";
import { add } from "date-fns";
import PropTypes from "prop-types";

import {
  AccountList, AccountListItem, InfoText
} from "../modules/property-details/style";
import PropertySection from './property-section';
import { formatAmount, formatDate } from '../utils/helper';

const EstimatedValue = ({label, recentValuationAmount, lastUpdate, updateAfterDays}) => {
  const accountLastUpdate = new Date(lastUpdate);

  const nextUpdate = (newDate) => formatDate(newDate, "do MMM yyyy");

  return (
    <PropertySection
      label={label}
      headline={formatAmount(recentValuationAmount)}
      children={
        <AccountList>
          <AccountListItem>
            <InfoText>
              {`Last updated ${formatDate(accountLastUpdate, "do MMM yyyy")}`}
            </InfoText>
          </AccountListItem>
          <AccountListItem>
            <InfoText>
              {`Next update ${nextUpdate(add(accountLastUpdate, { days: updateAfterDays }))}`}
            </InfoText>
          </AccountListItem>
        </AccountList>
      }
    />
  )
}

EstimatedValue.propTypes = {
  label: PropTypes.string.isRequired,
  recentValuationAmount: PropTypes.number.isRequired,
  lastUpdate: PropTypes.string.isRequired,
  updateAfterDays: PropTypes.number.isRequired,
}

export default EstimatedValue;