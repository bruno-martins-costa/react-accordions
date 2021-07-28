import { useState } from 'react';
import { Accordion } from './components/Accordion';
import { mock } from './mock';

export function App() {
  const [state] = useState(mock);

  return (
    <>
      <section>
        <h2>{`Exclusive Open`}</h2>
        <h3>{`Opens only one accordion at a time and close any other`}</h3>
        <Accordion {...state} isAnimated />
      </section>

      <section>
        <h2>{`Multiple Open`}</h2>
        <h3>{`Allow more then one accordion open at the same time`}</h3>
        <Accordion {...state} isAnimated isMultiple />
      </section>

      <section>
        <h2>{`Without Animation`}</h2>
        <h3>{`Opens and closes accordions without any animations`}</h3>
        <Accordion {...state} />
      </section>
    </>
  );
}
