import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { ProfileDropdown } from "../../components/profile-dropdown/profile-dropdown.container";
import { setIsProfileMenuOpen } from "../../store/user/user.action";
import { selectCurrentUser, selectIsProfileMenuOpen } from "../../store/user/user.selector";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinks,
  ProfileNavLink,
} from "./navigation.styles";

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isProfileMenuOpen = useSelector(selectIsProfileMenuOpen);

  const toggleIsProfileMenuOpen = () => dispatch(setIsProfileMenuOpen(!isProfileMenuOpen));

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">RECEITAS</NavLink>
          <NavLink to="/ingredients">INGREDIENTES</NavLink>
          <NavLink to="/tags">ETIQUETAS</NavLink>
          {!!currentUser ? (
            <ProfileNavLink as="span" onClick={toggleIsProfileMenuOpen}>
              {currentUser.displayName.toLocaleUpperCase()}
            </ProfileNavLink>
          ) : (
            <NavLink to="/auth">ENTRAR</NavLink>
          )}
          {isProfileMenuOpen && <ProfileDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
