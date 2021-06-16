import {
  UserInformationContainer,
  UserDescription,
  UserName,
  AvatarStyled,
  RatingStyled,
} from './styles';

interface UserInformationProps {
  image: string;
  name: string;
  description?: string;
  rating: number;
}

export function UserInformation({
  image,
  name,
  description,
  rating,
}: UserInformationProps) {
  return (
    <UserInformationContainer>
      <AvatarStyled src={image}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
}
