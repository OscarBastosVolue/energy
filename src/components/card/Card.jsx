import "./Card.css";

import { PiSolarPanelLight, PiWind } from "react-icons/pi";

import PropTypes from "prop-types";

const icons = {
  solar: <PiSolarPanelLight size={24} color="coral" />,
  wind: <PiWind size={24} color="deepskyblue" />,
};

export function Card({ source, quantity, time, isPlaceholder = false }) {
  return (
    <li className="card">
      {isPlaceholder ? (
        <div className="card-placeholder">
          <span>n/a</span>
        </div>
      ) : (
        <>
          <div className="card-value">
            {icons[source]}
            <p>{`${quantity} MW`}</p>
          </div>
        </>
      )}
      <div className="card-time">{time}</div>
    </li>
  );
}

Card.propTypes = {
  source: PropTypes.oneOf(["solar", "wind", "n/a"]).isRequired,
  quantity: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  isPlaceholder: PropTypes.bool,
};
