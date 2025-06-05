"use client";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import CloseTimes from "../ui/close";
import XdaysMultiple from "./xdays-multiple";
import usePopUp from "@/hooks/usePopUp";
import Modal from "../shared/modal";

export default function PopUp() {
  const { setPopUp } = usePopUp();
  const popUpRef = useRef(null);
  useOnClickOutside(popUpRef, () => setPopUp("bottom"));

  return (
    <Modal>
      <XdaysMultiple partnerLink="https://aff.partners.io/visit/?bta=45585&nci=7673" />

      <CloseTimes onClick={() => setPopUp(() => "bottom")} />
    </Modal>
  );
}
