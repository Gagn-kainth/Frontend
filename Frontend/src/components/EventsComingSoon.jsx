import ComingSoonLayout from "../pagelayouts/ComingSoonLayout";
import eventsBg from "../img/comingsoon.jpg";

function EventsComingSoon() {
  return (
    <ComingSoonLayout
      backgroundImage={eventsBg}
      title={
        <>
          Experience More
          <br />
          Beyond The Game
        </>
      }
    />
  );
}

export default EventsComingSoon;