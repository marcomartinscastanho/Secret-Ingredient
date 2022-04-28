import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.action";
import { ProfileDropdownContainer, ProfileItem } from "./profile-dropdown.styles";

export const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const signOutUser = () => dispatch(signOutStart());

  return (
    <ProfileDropdownContainer>
      <ProfileItem to="/profile">PERFIL</ProfileItem>
      <ProfileItem as="span" onClick={signOutUser}>
        SAIR
      </ProfileItem>
    </ProfileDropdownContainer>
  );
};
