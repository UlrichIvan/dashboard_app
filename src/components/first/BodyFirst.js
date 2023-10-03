import BodyFirstFooter from "./BodyFirstFooter";
import BodyFirstContent from "./BodyFirstContent";
import { useSelector } from "react-redux";

function BodyFirst() {
  const url = useSelector(state => state.url)

  return (
    <>
      <div className="first-body text-capitalize">
        {/*body title*/}
        <div className="first-body-title gap-in-left py-2 font-sm font-weight-600">
          {url?.replace(/\//, "") || ""}
        </div>
        {/*body content*/}
        <BodyFirstContent />

        {/* footer content */}
        <BodyFirstFooter />
      </div>
    </>
  );
}

export default BodyFirst;
