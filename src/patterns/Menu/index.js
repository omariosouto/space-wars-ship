import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Text from '../../components/foundation/Text';

const Menu = () => (
  <AppBar position="relative">
    <Toolbar>
      <Text variant="h6" color="inherit" noWrap>
        X-Wing Team Builder
      </Text>
    </Toolbar>
  </AppBar>
);

export default Menu;