import { useState } from "react";
import { useHook } from "../context/AuthContext";

function UserModal() {
  const { show, setShow, updateUser } = useHook();
  const [inputValue, setInputValue] = useState({
    name: "",
    lname: "",
    tel: 998,
    date: "",
    gender: "",
    url:""
  });
  const handleSubmit = () => {
    setShow(false);
    updateUser(inputValue);
  };
  return (
    <>
      {show && (
        <div className="modall-backdrop">
          <div className="modall">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="card-name">Настройка профиль</h3>
              <button className="btn btn-danger" onClick={() => setShow(false)}>
                X
              </button>
            </div>
            <form className="form-control mt-2 mb-2" onSubmit={handleSubmit}>
              <input
                type="url"
                placeholder="Rasm url..."
                className="form-control mb-2 mt-2"
                value={inputValue.url}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, url: e.target.value }))
                }
                required
              />
              <input
                type="text"
                placeholder="Name..."
                className="form-control mb-2 mt-2"
                value={inputValue.name}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, name: e.target.value }))
                }
                required
              />
              <input
                type="text"
                placeholder="Last Name..."
                className="form-control mb-2"
                value={inputValue.lname}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, lname: e.target.value }))
                }
                required
              />
              <input
                type="number"
                placeholder="Telefon Number..."
                className="form-control mb-2"
                value={inputValue.tel}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, tel: e.target.value }))
                }
                required
              />
              <input
                type="date"
                placeholder="Date..."
                className="form-control mb-2"
                value={inputValue.date}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, date: e.target.value }))
                }
                required
              />
            
              <input
                type="text"
                placeholder="Gender..."
                className="form-control mb-2"
                value={inputValue.where}
                onChange={(e) =>
                  setInputValue((prev) => ({ ...prev, gender: e.target.value }))
                }
              />
              <button
                type="button"
                className="btn btn-info"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
            <button
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserModal;
