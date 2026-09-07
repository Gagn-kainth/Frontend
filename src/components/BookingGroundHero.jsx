const STEPS = [
    {
      label: "Select Ground",
      heading: "Book Your",
      highlight: "Ground",
      description:
        "Choose a ground, select your preferred date and time, and confirm your booking.",
    },
    {
      label: "Your Details",
      heading: "Complete Your",
      highlight: "Booking",
      description:
        "Enter your details to proceed with the reservation.",
    },
    {
      label: "Payment",
      heading: "Confirm Your",
      highlight: "Payment",
      description:
        "Review your order and complete the payment to lock in your slot.",
    },
  ];
  
  
  function BookingGroundHero() {
    return (
        <div className="booking-ground-hero">
            <h1 className="booking-ground-hero-heading">
                {STEPS[0].heading} <span className="highlight">{STEPS[0].highlight}</span>
            </h1>
            <p className="booking-ground-hero-description">{STEPS[0].description}</p>
        </div>
    )
  }
  
  export default BookingGroundHero