import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div>
        <p data-testid="planet-card">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />

      </div>
    );
  }
}
/** Source sobre protoTypes:
 * https://github.com/tryber/sd-018-b-project-solar-system/pull/62/files
 */
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCard;
