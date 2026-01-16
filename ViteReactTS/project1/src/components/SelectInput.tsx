import React, { useState } from "react";

interface User {
  nm: string;
  gen: string;
  city: string;
  load: boolean;
}

const SelectInput = () => {
  const [info, setInfo] = useState<User>({
    nm: "",
    gen: "",
    city: "",
    load: false,
  });

  const valupd = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const disp = () => {
    setInfo({ ...info, load: !info.load });
  };

  return (
    <>
      Enter Name:
      <input
        type="text"
        name="nm"
        value={info.nm}
        onChange={valupd}
      />
      <br />

      Select Gender:
      <label>
        <input
          type="radio"
          name="gen"
          value="male"
          checked={info.gen === "male"}
          onChange={valupd}
        />
        M
      </label>

      <label>
        <input
          type="radio"
          name="gen"
          value="female"
          checked={info.gen === "female"}
          onChange={valupd}
        />
        F
      </label>
      <br />

      Select City:
      <select name="city" value={info.city} onChange={valupd}>
        <option value="">--Select--</option>
        <option value="kol">KOLKATA</option>
        <option value="sdah">SEALDAH</option>
        <option value="goa">GOA</option>
      </select>
      <br />

      <input
        type="button"
        value={info.load ? "HIDE" : "SHOW"}
        onClick={disp}
      />

      {info.load && (
        <ul>
          <li>Name: {info.nm}</li>
          <li>Gender: {info.gen}</li>
          <li>City: {info.city}</li>
        </ul>
      )}
    </>
  );
};

export default SelectInput;
