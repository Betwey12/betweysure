export default function PaymentSelect
        <div className="grid gap-4 lg:grid-cols-4">
          {paymentGateways.map((gateway, index) => (
            <div
              key={index}
              className={cn(
                "flex relative border border-cyan justify-between flex-col capitalize items-center gap-4 p-4 px-2 rounded cursor-pointer",
                {
                  "bg-blue-three": theme === "dark",
                }
              )}
            >
              {gateway.name === "bank transfer" && (
                <span className="flex items-center gap-1 justify-center text-[9px]   w-full ">
                  <FaInfo className="text-yellow-500 border rounded-full border-yellow-500" />
                  Complete bank transfer using paystack or flutter
                </span>
              )}
              {gateway.name === "paystack" && (
                <span className="flex items-center gap-1 justify-center text-[9px]   w-full ">
                  <FaInfo className="text-yellow-500 border rounded-full border-yellow-500" />
                  Currently only supports NGN
                </span>
              )}

              <Image
                width={40}
                height={40}
                src={gateway.logo}
                alt={gateway.name}
                className="w-10 h-10"
              />

              <Button
                onClick={() => {
                  setClickedIndex(index);
                  handlePayment(gateway.name);
                }}
                className="text-white text-sm bg-yellow-sunset hover:bg-white hover:border hover:border-yellow-sunset hover:text-yellow-sunset text-center px-4 py-2 rounded disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isPending || gateway.name === "bank transfer"}
                title={
                  gateway.name === "bank transfer"
                    ? "Complete bank transfer using paystack or flutter"
                    : ""
                }
              >
                <span className="flex items-center gap-2">
                  Pay with {gateway.name}
                </span>
                {isPending && clickedIndex === index && (
                  <FaSpinner className="animate-spin" />
                )}
              </Button>
            </div>
          ))}
        </div>

