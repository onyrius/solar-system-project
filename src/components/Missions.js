import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="missions-container">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ uuidv4() } // uuidv4 - biblioteca de id;
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />

            ))
          }
        </section>
      </div>
    );
  }
}

export default Missions;
