import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (

      <div data-testid="planet-card" className="planet-card">
        <p data-testid="planet-name" className="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>

    );
  }
}
/** Source: github Carol Sò
 * https://github.com/tryber/sd-018-b-project-solar-system/pull/62/files
 */
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
