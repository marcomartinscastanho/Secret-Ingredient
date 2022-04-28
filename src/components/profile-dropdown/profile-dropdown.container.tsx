import { useDispatch } from "react-redux";
import { setIsProfileMenuOpen, signOutStart } from "../../store/user/user.action";
import { ProfileDropdownContainer, ProfileMenuItem } from "./profile-dropdown.styles";

export const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const handleSignOutClick = () => {
    dispatch(setIsProfileMenuOpen(false));
    dispatch(signOutStart());
  };
  const handleProfileClick = () => dispatch(setIsProfileMenuOpen(false));

  return (
    <ProfileDropdownContainer>
      <ProfileMenuItem to="/profile" onClick={handleProfileClick}>
        PERFIL
      </ProfileMenuItem>
      <ProfileMenuItem as="span" onClick={handleSignOutClick}>
        SAIR
      </ProfileMenuItem>
    </ProfileDropdownContainer>
  );
};
