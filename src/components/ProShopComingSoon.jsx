import ComingSoonLayout from "../pagelayouts/ComingSoonLayout";
import proShopBg from "../img/comingsoon1.jpg";

function ProShopComingSoon() {
  return (
    <ComingSoonLayout
      backgroundImage={proShopBg}
      title={
        <>
          Everything You Need
          <br />
          For The Game
        </>
      }
    />
  );
}

export default ProShopComingSoon;