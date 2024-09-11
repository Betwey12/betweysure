export default function BankTransfer() {
  return (
    <div className="flex flex-col gap-2 py-6">
      {bankDetails.map((bank, index) => (
        <div key={index}>
          <p className="text-gray-one">
            <span className="font-bold text-white">Bank:</span> {bank.bank}
          </p>
          <p className="text-gray-one">
            <span className="font-bold text-white">Account Number:</span>{" "}
            {bank.accountNumber}
          </p>
          <p className="text-gray-one">
            <span className="font-bold text-white">Account Name:</span>{" "}
            {bank.accountName}
          </p>
        </div>
      ))}
    </div>
  );
}

const bankDetails = [
  {
    bank: "GTBank",
    accountNumber: "0123456789",
    accountName: "John Doe",
  },
];
