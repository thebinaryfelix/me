"use client";

import Clipboard from "clipboard";
import { ReactNode, useEffect, useState } from "react";
import { CONTACT_EMAIL } from "@/client/constants";
import { Button } from "../Button";
import { sendGAEvent } from "@next/third-parties/google";

const SUCCESS_FEEDBACK_TIMEOUT = 2000;

export const CopyEmailButton = ({
  children,
  successFeedback,
}: {
  children: ReactNode;
  successFeedback: string;
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const clipboard = new Clipboard(".copy-email-button");
    clipboard.on("success", () => {
      setShowSuccess(true);
      sendGAEvent({
        event: "copyEmailButton",
        page: "home",
        action: "clipboard",
        value: "success",
      });
    });
    return () => clipboard.destroy();
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timeout = setTimeout(() => {
        setShowSuccess(false);
      }, SUCCESS_FEEDBACK_TIMEOUT);
      return () => clearTimeout(timeout);
    }
  }, [showSuccess]);

  return (
    <div className="w-full">
      <Button
        data-clipboard-text={CONTACT_EMAIL}
        onClick={() =>
          sendGAEvent({
            event: "copyEmailButton",
            page: "home",
            action: "onClick",
            value: "clicked",
          })
        }
        className="copy-email-button w-full h-[40px] rounded-xl bg-button-light dark:bg-button-dark mt-4 text-sm text-text-light dark:text-text-dark"
      >
        {children}
      </Button>

      <div className="relative">
        <span
          className={`w-24 flex justify-center text-emerald-600 dark:text-emerald-400 text-xs absolute top-1 right-0 ${
            showSuccess ? "" : "hidden"
          }`}
        >
          {successFeedback}
        </span>
      </div>
    </div>
  );
};
