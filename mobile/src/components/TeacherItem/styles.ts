import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #FFF;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 16px;
  border: 1px solid #E6E6F0;
`;

export const Profile = styled.View`
  padding: 24px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  background: #EEE;
  border-radius: 32px;
`;

export const ProfileInfo = styled.View`
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #32264D;
  font-size: 20px;
  font-family: 'Archivo_700Bold';
`;

export const Subject = styled.Text`
  color: #6A6180;
  margin-top: 4px;
  font-size: 12px;
  font-family: 'Poppins_400Regular';
`;

export const Bio = styled.Text`
  margin: 0 24px;
  color: #6A6180;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Poppins_400Regular';
`;

export const Footer = styled.View`
  padding: 24px;
  margin-top: 24px;
  align-items: center;
`;

export const Price = styled.Text`
  color: #6A6180;
  font-size: 14px;
  font-family: 'Poppins_400Regular';
`;

export const PriceValue = styled.Text`
  color: #8257E5;
  font-size: 16px;
  font-family: 'Archivo_700Bold';
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const FavoriteButton = styled(RectButton)`
  width: 56px;
  height: 56px;
  margin-right: 8px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background: ${props => props.favorited ? "#E33D3D" : "#8257E5"};
`;

export const ContactButton = styled(RectButton)`
  flex: 1;
  height: 56px;
  margin-right: 8px;
  border-radius: 8px;
  align-items: center;
  flex-direction: row;
  background: #04d361;
  justify-content: center;
`;

export const ContactButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-left: 16px;
  font-family: 'Archivo_700Bold';
`;

export const UnFavoriteIcon = styled.Image``;

export const WhatsAppIcon = styled.Image``;

export const HeartOutlineIcon = styled.Image``;
