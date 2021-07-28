import { useRef } from 'react';
import {
  Container,
  Header,
  HeaderText,
  Arrow,
  Expandable,
  Paragraph,
} from './styles';

export function AccordionItem({
  id,
  header,
  text,
  isOpen,
  handleSetIsOpen,
  isAnimated,
}) {
  const expandableRef = useRef(null);
  const contentHeight = expandableRef.current?.scrollHeight;

  return (
    <Container>
      <Header isOpen={isOpen} onClick={() => handleSetIsOpen(id)}>
        <HeaderText isOpen={isOpen}>{header}</HeaderText>
        <Arrow />
      </Header>
      <Expandable
        ref={expandableRef}
        height={isOpen ? `${contentHeight}px` : '0px'}
        isOpen={isOpen}
        isAnimated={isAnimated}
      >
        <Paragraph>{text}</Paragraph>
      </Expandable>
    </Container>
  );
}
