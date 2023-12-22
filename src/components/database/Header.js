import { useState } from "react";
import { FadeLoader } from "react-spinners";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";

import Modal from "./Modal";

const Header = () => {
  const [sql, setSql] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const openModalHandler = () => {
    setIsModal(true);
  };

  const closeModalHandler = () => {
    setIsModal(false);
  };

  const sqlHandler = (value) => {
    setSql(value.target.value);
  };

  const baseURL = "http://localhost:8585/api";

  const submitHandler = async () => {
    setLoading(true);
    setData("");
    const response = await axios.post(
      baseURL + "/query",
      {
        sql: sql,
      },
      {
        "Content-Type": "application/json",
      }
    );
    setData(JSON.stringify(response.data, null, 2));
    setLoading(false);
  };

  const processQueryWithParams = async (dataDB) => {
    setSql(dataDB.sql);
    setLoading(true);
    setData("");
    const response = await axios.post(baseURL + "/queryParams", dataDB, {
      "Content-Type": "application/json",
    });
    setData(JSON.stringify(response.data, null, 2));
    setLoading(false);
    setIsModal(false);
  };

  return (
    <div>
      <div className="pt-28 mb-20 ml-2">
        <LoadingOverlay
          active={loading}
          spinner={<FadeLoader color="#fff" size={120} />}
          text="Cargando..."
        >
          <div>
            <div>
              <label className="block">
                <span className="text-gray-700 ml-4">Query</span>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <textarea
                      value={sql}
                      onChange={sqlHandler}
                      className="m-4 block"
                      rows="4"
                      cols="95"
                    >
                      data
                    </textarea>
                  </div>
                  <div>
                    <div className="grid grid-rows-2">
                      <button
                        onClick={submitHandler}
                        className="bg-blue-300 hover:bg-blue-500 mt-6 w-20 h-8 rounded"
                      >
                        Enviar
                      </button>
                      <button
                        className="bg-green-300 hover:bg-green-500 mt-1 w-20 h-14 justify-end rounded"
                        onClick={openModalHandler}
                      >
                        Enviar + DB
                      </button>
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <label className="block">
              <span className="text-gray-700 ml-4">
                Resultado de la consulta
              </span>
              <textarea
                defaultValue={data}
                readOnly={true}
                className="m-4 block"
                rows="20"
                cols="108"
              ></textarea>
            </label>
          </div>
          {isModal && (
            <Modal
              isModal={isModal}
              onCloseModal={closeModalHandler}
              onProcess={processQueryWithParams}
              sql={sql}
            />
          )}
        </LoadingOverlay>
      </div>
    </div>
  );
};

export default Header;
