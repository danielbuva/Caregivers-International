import React, { useState, useEffect, useRef } from "react";
import "./GetStarted.css";

const GetStarted = () => {
  const [value, setValue] = useState<String>();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);
  return (
    <>
      <div className="consult-container">
        <div className="consult-premise">
          <p className="start">Start Now</p>
          <p className="start-text1">
            Is there a challenge your needs help solving?
          </p>
          <p className="start-text2">We'd love to discuss it.</p>
        </div>
        <form className="form">
          <div className="client">
            <input
              type="name"
              autoComplete="given-name"
              placeholder="First Name*"
              className="given-name"
            />
            <input
              className="family-name"
              type="name"
              autoComplete="family-name"
              placeholder="Last Name*"
            />
          </div>
          <div className="contact">
            <input
              className="email"
              type="email"
              autoComplete="email"
              placeholder="Email*"
            />
            <input
              type="tel"
              autoComplete="tel-national"
              placeholder="Phone*"
              className="phone"
            />
          </div>
          <textarea
            ref={textareaRef}
            onChange={textAreaChange}
            placeholder="Let us know all your needs"
          />
          <div className="confirm">
            <button className="send">Send</button>
            <div className="confirm-policy">
              <input
                type="checkbox"
                id="privacy-policy"
                className="privacy-policy"
              />
              <div className="accept">
                <p>I accept your &nbsp;</p>
                <p className="pp">Privacy Policy</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetStarted;
