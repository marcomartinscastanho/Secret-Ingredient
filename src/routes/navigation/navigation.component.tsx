import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { ProfileDropdown } from "../../components/profile-dropdown/profile-dropdown.container";
import { RecipesDropdown } from "../../components/recipes-dropdown/recipes-dropdown.container";
import { setIsRecipesMenuOpen } from "../../store/recipes/recipe.action";
import { selectIsRecipesMenuOpen } from "../../store/recipes/recipe.selector";
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
  const isRecipesMenuOpen = useSelector(selectIsRecipesMenuOpen);

  const closeDropdownMenus = () => {
    if (isRecipesMenuOpen) dispatch(setIsRecipesMenuOpen(false));
    if (isProfileMenuOpen) dispatch(setIsProfileMenuOpen(false));
  };

  const toggleIsProfileMenuOpen = () => {
    if (isRecipesMenuOpen) dispatch(setIsRecipesMenuOpen(false));
    dispatch(setIsProfileMenuOpen(!isProfileMenuOpen));
  };
  const toggleIsRecipesMenuOpen = () => {
    if (isProfileMenuOpen) dispatch(setIsProfileMenuOpen(false));
    dispatch(setIsRecipesMenuOpen(!isRecipesMenuOpen));
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink as="span" onClick={toggleIsRecipesMenuOpen}>
            RECEITAS
          </NavLink>
          <NavLink to="/recipes/i" onClick={closeDropdownMenus}>
            INGREDIENTES
          </NavLink>
          <NavLink to="/recipes/t" onClick={closeDropdownMenus}>
            ETIQUETAS
          </NavLink>
          {!!currentUser ? (
            <ProfileNavLink as="span" onClick={toggleIsProfileMenuOpen}>
              {currentUser.displayName.toLocaleUpperCase()}
            </ProfileNavLink>
          ) : (
            <NavLink to="/auth" onClick={closeDropdownMenus}>
              ENTRAR
            </NavLink>
          )}
          {isRecipesMenuOpen && <RecipesDropdown />}
          {isProfileMenuOpen && <ProfileDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
