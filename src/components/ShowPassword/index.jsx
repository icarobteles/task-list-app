import { useCallback } from "react";

//REACT ICONS
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { Button } from "./style";

const ShowPassword = ({ inputDetail, setInputDetails, error }) => {
  const { name, type } = inputDetail;

  const getOpositeInputType = useCallback(
    () => (type === "password" ? "text" : "password"),
    [type]
  );

  const changeTypePassword = () => {
    setInputDetails((prevState) => {
      const newState = prevState.map((elem) => {
        if (elem.name === name) {
          elem.type = getOpositeInputType();
        }
        return elem;
      });
      return newState;
    });
  };

  return (
    <Button error={error} type="button" onClick={changeTypePassword}>
      {type === "password" && <VscEye size="1rem" className="ico" />}
      {type === "text" && <VscEyeClosed size="1rem" className="ico" />}
    </Button>
  );
};

export default ShowPassword;
