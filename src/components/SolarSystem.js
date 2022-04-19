import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <section className="container-planet">
          {Planets.map(({ name, image }) => (<PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
          />))}
        </section>
      </>);
  }
}

export default SolarSystem;
