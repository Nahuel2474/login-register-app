import payment from "/payment/payment.png";

export const Payment = () => {
  return (
    <div className="h-32 my-5 grid justify-items-center">
      <h4 className="font-bold mb-5">All methods payment</h4>
      <img className="h-24" src={payment} />
    </div>
  );
};
