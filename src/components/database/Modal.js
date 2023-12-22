import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../utilities/Input";
import config from "../../config/config.json";

const Modal = ({ isModal, onCloseModal, onProcess, sql }) => {
  const navigate = useNavigate();

  const [dataDB, setDataDB] = useState({
    host: "",
    port: "",
    dbName: "",
    user: "",
    password: "",
    sql: "",
  });

  useEffect(() => {
    setDataDB({
      host: config.database.host,
      port: config.database.port,
      dbName: config.database.dbName,
      user: config.database.user,
      password: config.database.password,
      sql: sql,
    });
  }, [sql]);

  const setInputHandler = (name, value) => {
    setDataDB((currentValue) => ({
      ...currentValue,
      [name]: value,
    }));
  };

  const sendDataDB = async () => {
    onProcess(dataDB);
    onCloseModal();
    navigate("/database");
  };

  const sqlHandler = (value) => {
    setDataDB((currentValue) => ({
      ...currentValue,
      sql: value.target.value,
    }));
  };


  return (
    <div className="container mx-auto p-4">
      {isModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Base de Datos</h2>
            <hr />
            <div className="grid grid-cols-1 gap-4 mt-4">
              <div className="flex space-x-4">
                <Input
                  fieldName="Servidor"
                  name="host"
                  value={dataDB.host}
                  onValue={setInputHandler}
                />
                <Input
                  fieldName="Puerto"
                  name="port"
                  value={dataDB.port}
                  onValue={setInputHandler}
                />
                <Input
                  fieldName="Nombre Base de Datos"
                  name="dbName"
                  value={dataDB.dbName}
                  onValue={setInputHandler}
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <Input
                  fieldName="Usuario"
                  name="user"
                  value={dataDB.user}
                  onValue={setInputHandler}
                />
                <div className="flex-grow">
                  <Input
                    fieldName="Contraseña"
                    name="password"
                    value={dataDB.password}
                    onValue={setInputHandler}
                    onClass="w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="result"
                  className="block text-sm font-medium text-gray-700"
                >
                  Query
                </label>
                <textarea
                  value={dataDB.sql}
                  onChange={sqlHandler}
                  className="mt-2 block w-full"
                  rows="4"
                  cols="95"
                >
                  data
                </textarea>
              </div>
            </div>
            <hr />
            <div className="flex mt-4 items-center justify-around">
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-800 text-white py-2 px-4 rounded w-44"
                  onClick={onCloseModal}
                >
                  Cerrar
                </button>
              </div>
              <div>
                <button
                  onClick={sendDataDB}
                  className="bg-green-500 hover:bg-green-800 text-white py-2 px-4 rounded w-44"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
