import ComingSoonLayout from "../pagelayouts/ComingSoonLayout";
import membershipBg from "../img/comingsoon2.jpg";

function MembershipComingSoon() {
  return (
    <ComingSoonLayout
      backgroundImage={membershipBg}
      title={
        <>
          Join The Club
          <br />
          Be Part Of The Game
        </>
      }
    />
  );
}

export default MembershipComingSoon;