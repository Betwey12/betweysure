import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const useGoogleWithCaptcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(
    async (action: string) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha(action);
      return token;
    },
    [executeRecaptcha],
  );

  return { handleReCaptchaVerify };
};

export default useGoogleWithCaptcha;
