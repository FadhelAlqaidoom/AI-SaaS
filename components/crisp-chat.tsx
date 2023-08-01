"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("05ba7925-065f-4252-ba78-200fc79e2ebd")
  }, [])

  return null;
}
