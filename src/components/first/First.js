import BodyFirst from "./BodyFirst";
import HeaderFirst from "./HeaderFirst";

function First() {
  return (
    <>
      <div className="first mb-3">
        {/*header*/}
        <HeaderFirst />
        {/*body*/}
        <BodyFirst />
      </div>
    </>
  );
}

export default First;
