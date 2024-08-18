import React from 'react';

import { EventsHeader } from '~/components';
import { Initiatives } from '~/sections';

const EventsPage = () => {
  return (
    <div className='mt-28'>
      <EventsHeader />
      <Initiatives />
    </div>
  );
};

export default EventsPage;
