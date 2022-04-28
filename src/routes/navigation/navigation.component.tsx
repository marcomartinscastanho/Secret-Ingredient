import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./navigation.styles";

export const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const signOutUser = () => dispatch(signOutStart());

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
            <>
              <NavLink to="/profile">{currentUser.displayName.toLocaleUpperCase()}</NavLink>
              <NavLink as="span" onClick={signOutUser}>
                SAIR
              </NavLink>
            </>
          ) : (
            <NavLink to="/auth">ENTRAR</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
