import React, { useState } from "react";
import Input from "../utilities/Input";
import axios from "axios";

const Header = () => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(null);
  const [result, setResult] = useState("");

  const textHandler = (name, value) => {
    setText(value);
    setResult("");
  };

  const baseURL = "http://localhost:8585/api";

  const handleEncrypt = async () => {
    setAlert(null);
    const response = await axios.post(
      baseURL + "/encript",
      {
        text: text,
      },
      {
        "Content-Type": "application/json",
      }
    );
    console.log(response);
    setResult(response.data);
  };

  const handleDecrypt = async () => {
    setAlert(null);
    const response = await axios.post(
      baseURL + "/decrypt",
      {
        text: text,
      },
      {
        "Content-Type": "application/json",
      }
    );
    console.log(response.data);
    if (response.data.code === "500") {
      setResult(response.data.message);
      setAlert(`Error[500]: ${response.data.error}`);
    } else {
      setResult(response.data);
    }
  };

  return (
    <div className="bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Encriptar Palabra</h2>
      <hr />

      <div className="flex space-x-4 mb-5">
        <div className="flex-grow">
          <Input
            fieldName="Palabra"
            name="text"
            value={text}
            onValue={textHandler}
            onClass="w-full"
          />
        </div>
        <div className="flex-grow">
          <label
            htmlFor="result"
            className="block text-sm font-medium text-gray-700"
          >
            Resultado
          </label>
          <input
            type="text"
            value={result}
            readOnly={true}
            className="mt-1 p-2 border rounded w-full bg-gray-200"
          />
        </div>
      </div>
      {alert && <p className="font-bold bg-red-300">{alert}</p>}
      <hr />

      <div className="flex mt-4 items-center justify-around w-96">
        <button
          className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded w-44"
          onClick={handleEncrypt}
        >
          Encriptar
        </button>
        <button
          className="bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded w-44"
          onClick={handleDecrypt}
        >
          Desencriptar
        </button>
      </div>
    </div>
  );
};

export default Header;
