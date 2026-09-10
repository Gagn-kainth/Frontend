import "../style/BookingSummary.css";

const GST_RATE = 0.18;

function BookingSummary({ ground, date, selectedSlots, onContinue }) {
  const hours = selectedSlots.length;
  const basePrice = ground ? ground.pricePerHour * hours : 0;
  const gst = Math.round(basePrice * GST_RATE);
  const total = basePrice + gst;

  return (
    <div className="bc-summary">
      <div className="bc-summary-title">BOOKING SUMMARY</div>

      <SummaryRow label="CLUB" value="Boundary Club" />
      <SummaryRow
        label="DATE"
        value={
          date
            ? date.toLocaleDateString("en-US", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })
            : "Select a date"
        }
      />

      {ground ? (
        <SummaryRow label="GROUND" value={ground.name} sub={ground.location} />
      ) : (
        <SummaryRow label="GROUND" value="Not selected yet" muted />
      )}

      {hours > 0 ? (
        <div className="bc-summary-slots">
          <div className="bc-summary-label">TIME SLOTS</div>

          <div className="bc-summary-slot-chips">
            {selectedSlots.map((s) => (
              <span key={s} className="bc-badge slot">
                {s}
              </span>
            ))}
          </div>

          <div className="bc-summary-hours">
            {hours} hour{hours > 1 ? "s" : ""} total
          </div>
        </div>
      ) : (
        <SummaryRow label="TIME SLOTS" value="None selected" muted />
      )}

      <div className="bc-price-section">
        <PriceRow label="Base Price" value={basePrice} />

        <PriceRow label={`GST (${GST_RATE * 100}%)`} value={gst} />

        <div className="bc-total-row">
          <span>Total</span>

          <span className="bc-total-value">
            ₹{total.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      <button
        className="bc-continue-btn"
        disabled={!ground || hours === 0}
        onClick={onContinue}
      >
        Continue to Details →
      </button>
    </div>
  );
}

export function SummaryRow({ label, value, sub, muted }) {
  return (
    <div className="bc-summary-row">
      <div className="bc-summary-label">{label}</div>

      <div className={`bc-summary-value${muted ? " muted" : ""}`}>{value}</div>

      {sub && <div className="bc-summary-sub">{sub}</div>}
    </div>
  );
}

export function PriceRow({ label, value }) {
  return (
    <div className="bc-price-row">
      <span className="bc-price-row-label">{label}</span>

      <span className="bc-price-row-value">
        ₹{value.toLocaleString("en-IN")}
      </span>
    </div>
  );
}

export default BookingSummary;
