import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Fqa({ faq, index, toggleFAQ }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="question">
        <div className="questionOnly">
          <h4>{faq.question}</h4>
          <div className="button" onClick={() => setShow(!show)}>
            <FontAwesomeIcon
              icon={show ? faMinus : faPlus}
              style={{
                color: "#ffd700",
                fontSize: "22px",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
        {show && <p>{faq.answer}</p>}
      </div>
    </div>
  );
}
