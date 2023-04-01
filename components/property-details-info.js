import React from "react";
import PropTypes from "prop-types";

import {
  AccountList, AccountListItem, InfoText
} from "../modules/property-details/style";
import RowContainer from './row-container';
import PropertySection from './property-section';

const PropertyDetailsInfo = ({label, accountName, bankName, postcode}) => {
  return (
    <PropertySection
      label={label}
      children={
        <RowContainer>
          <AccountList>
            <AccountListItem><InfoText>{accountName}</InfoText></AccountListItem>
            <AccountListItem><InfoText>{bankName}</InfoText></AccountListItem>
            <AccountListItem><InfoText>{postcode}</InfoText></AccountListItem>
          </AccountList>
        </RowContainer>
      }
    />
  )
}

PropertyDetailsInfo.propTypes = {
  label: PropTypes.string.isRequired,
  accountName: PropTypes.string.isRequired,
  bankName: PropTypes.string.isRequired,
  postcode: PropTypes.string.isRequired,
}

export default PropertyDetailsInfo;