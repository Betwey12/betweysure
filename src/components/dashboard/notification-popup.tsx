import { useTranslations } from "next-intl";
import Image from "next/image";
import Modal from "../shared/modal";

interface NotificationPopupProps {
  handleClose: () => void;
  handleNotificationSubscription: () => void;
}

export default function NotificationPopup({
  handleClose,
  handleNotificationSubscription,
}: NotificationPopupProps) {
  const t = useTranslations("NOTIFICATION_POPUP");
  return (
    <Modal className="absolute top-6">
      <div className="flex flex-col items-end p-4 gap-6 lg:p-10">
        <div className="flex flex-col gap-2 items-center justif-between">
          <Image
            width={120}
            height={120}
            src="/logo.png"
            alt="logo"
            className="w-[120px] lg:w-[160px]"
          />
          <p className="max-w-[500px] text-center font-semibold">
            {t("SUBSCRIBE_DESCRIPTION")}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleClose}
            className="font-semibold text-cyan hover:text-cyan/80"
          >
            {t("LATER")}
          </button>
          <button
            onClick={handleNotificationSubscription}
            className="bg-cyan text-white px-6 py-2 rounded font-semibold hover:bg-cyan/80"
          >
            {t("ALLOW")}
          </button>
        </div>
      </div>
    </Modal>
  );
}
