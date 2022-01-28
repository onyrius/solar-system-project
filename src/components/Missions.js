import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ uuidv4() }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))
        }
      </div>
    );
  }
}

export default Missions;
