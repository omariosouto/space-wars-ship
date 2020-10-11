import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  text-decoration: none;
`;


export default function Link({ href, children }) {
  return (
    <NextLink href={href} passHref>
      <StyledLink>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}