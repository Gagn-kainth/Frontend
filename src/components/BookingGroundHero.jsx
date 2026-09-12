import "../style/BookingGroundHero.css";

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
    description: "Enter your details to proceed with the reservation.",
  },
  {
    label: "Payment",
    heading: "Confirm Your",
    highlight: "Payment",
    description:
      "Review your order and complete the payment to lock in your slot.",
  },
];

function BookingGroundHero({ currentStep = 0 }) {
  const step = STEPS[currentStep];

  return (
    <div className="booking-ground-hero">
      <div className="bc-stepper">
        {STEPS.map((s, i) => (
          <div className="bc-stepper-item" key={s.label}>
            <div
              className={`bc-stepper-circle ${
                i < currentStep ? "done" : i === currentStep ? "active" : ""
              }`}
            >
              {i < currentStep ? "✓" : i + 1}
            </div>
            <span
              className={`bc-stepper-label ${
                i === currentStep ? "active" : ""
              }`}
            >
              {s.label}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`bc-stepper-line ${
                  i < currentStep ? "done" : ""
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <h1 className="booking-ground-hero-heading">
        {step.heading} <span className="highlight">{step.highlight}</span>
      </h1>
      <p className="booking-ground-hero-description">{step.description}</p>
    </div>
  );
}

export default BookingGroundHero;