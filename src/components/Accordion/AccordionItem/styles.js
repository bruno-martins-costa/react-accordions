import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.075);
  background-color: ${props => (props.isOpen ? '#f1f1f1' : '#fff')};
  transition: background-color 100ms ease-in-out, filter 100ms ease-in-out;

  & > svg {
    transform: ${props => (props.isOpen ? '' : 'rotate(180deg)')};
  }

  &:hover {
    filter: brightness(0.99);

    & > span {
      color: #5f4cc2;
    }
  }
`;

export const Expandable = styled.div`
  background-color: #f8f8fa;
  border-left: 3px solid #5f4cc2;
  border-right: 1px solid rgba(0, 0, 0, 0.075);
  height: ${props => props.height};
  transition: ${props => (props.isAnimated ? 'height 200ms ease-in-out' : '')};
  overflow: hidden;
`;

export const HeaderText = styled.span`
  display: flex;
  transition: color 100ms ease-in-out;
  color: ${props => (props.isOpen ? '#5f4cc2' : '#000')};
`;

export const Arrow = styled(IoIosArrowUp)`
  width: 18px;
  height: 18px;
  color: #5f4cc2;
`;

export const Paragraph = styled.p`
  padding: 16px 24px 32px 24px;
`;
