import styled from "styled-components";
import ProfileCircle from "assets/common/icon/profileCircle.svg"
import DropdownIcon from "assets/common/icon/dropdown.svg"

const Container = styled.div`
  height: 100%;
  display:flex;
  justify-content: space-between;
  margin: 0px 10px;
`

const Block = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin: 0px 0px 0px 15px;
  cursor: pointer;
`

const ProfileSym = styled.div`
  width: 35px;
  height: 35px;
  background: url(${ProfileCircle}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content:center;
  align-items:center;
`

const ProfileName = styled.p`
  font-size: 14px;
  margin:0px;
`

const DropdownImage = styled.img`
  width: 8px;
  height:8px;
  margin-left: 7px;
  margin-top: 2px;
`

const Profile = () => {
  return (
    <>
      <Container>
        <Block>
          <ProfileSym>
            CJ
          </ProfileSym>
        </Block>
        <Block>
          <ProfileName>
            Chanawee
          </ProfileName>
          <DropdownImage src={DropdownIcon} />
        </Block>
      </Container>
    </>
  )
}

export default Profile