import React from "react";
import PropTypes from "prop-types";

import {
  AccountSection, AccountLabel, AccountHeadline
} from "../modules/property-details/style";

const PropertySection = ({label, headline, children}) => {
  return (
    <AccountSection>
      <AccountLabel>{label}</AccountLabel>
      {headline && (
        <AccountHeadline>
          {headline}
        </AccountHeadline>
      )}
      {children}
    </AccountSection>
  )
}

PropertySection.propTypes = {
  label: PropTypes.string.isRequired,
  headline: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default PropertySection;