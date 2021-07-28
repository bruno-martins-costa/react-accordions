import { useState, useCallback } from 'react';
import { AccordionItem } from './AccordionItem';
import { Container, AccordionContainer } from './styles';

export function Accordion({ items, isAnimated, isMultiple }) {
  const [currentOpen, setCurrentOpen] = useState([]);

  const handleSetIsOpen = useCallback(
    id => {
      const exists = currentOpen.includes(id);
      if (exists) {
        return setCurrentOpen(prevState =>
          prevState.filter(item => item !== id)
        );
      }
      setCurrentOpen(prevState => (isMultiple ? [...prevState, id] : [id]));
    },
    [currentOpen, isMultiple]
  );

  return (
    <Container>
      <AccordionContainer>
        {items.map(item => (
          <AccordionItem
            {...item}
            isOpen={currentOpen.includes(item.id)}
            key={item.id}
            handleSetIsOpen={handleSetIsOpen}
            isAnimated={isAnimated}
          />
        ))}
      </AccordionContainer>
    </Container>
  );
}
