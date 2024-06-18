import React from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Heading } from "../components/Heading";
const Welcome = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading />
          <form className="welcome__form">
            <Input />
            <label className="input-wrapper" htmlFor="username">
              Ваш номер
              <input
                required
                type="tel"
                name="phone"
                id="phone"
                placeholder="+998 9- --- -- -- "
                pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              />
              <span id="error-message">Введите номер в правильном формате</span>
            </label>
            <Button />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
