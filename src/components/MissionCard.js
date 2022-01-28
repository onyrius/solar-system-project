import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>);
  }
}

const { string } = PropTypes;
MissionCard.propTypes = {
  name: string.isRequired,
  year: string.isRequired,
  country: string.isRequired,
  destination: string.isRequired,
};

export default MissionCard;

/** Source: github da Carol Sò
 * https://github.com/tryber/sd-018-b-project-solar-system/pull/62/files
 */
