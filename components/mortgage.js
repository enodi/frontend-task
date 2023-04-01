import React from "react";
import PropTypes from "prop-types";

import {
  AccountList, AccountListItem, InfoText
} from "../modules/property-details/style";
import PropertySection from './property-section';
import RowContainer from './row-container';
import { formatAmount } from '../utils/helper';

const Mortgage = ({label, currentBalance, associatedMortgageName}) => {
  return (
    <PropertySection
      label={label}
      children={
        <RowContainer
          onClick={() => alert("You have navigated to the mortgage page")}
        >
          <AccountList>
            <AccountListItem>
              <InfoText>
                {formatAmount(Math.abs(currentBalance))}
              </InfoText>
            </AccountListItem>
            <AccountListItem>
              <InfoText>
                {associatedMortgageName}
              </InfoText>
            </AccountListItem>
          </AccountList>
        </RowContainer>
      }
    />
  )
}

Mortgage.propTypes = {
  label: PropTypes.string.isRequired,
  currentBalance: PropTypes.number.isRequired,
  associatedMortgageName: PropTypes.string.isRequired,
}

export default Mortgage;