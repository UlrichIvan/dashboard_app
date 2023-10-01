import BodyFirstFooter from "./BodyFirstFooter";
import BodyFirstContent from "./BodyFirstContent";

function BodyFirst() {
  return (
    <>
      <div className="first-body text-capitalize">
        {/*body title*/}
        <div className="first-body-title gap-in-left py-2 font-sm font-weight-600">
          all channel interaction summary report
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
