import React from 'react'; 
import NextLink from 'next/link';
import LinkMUI from '@material-ui/core/Link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(LinkMUI)``;

const Link = React.forwardRef(({ href, children, ...props }, ref) => (
  <NextLink href={href} passHref forwardedRef={ref}>
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </NextLink>
))

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Link;
