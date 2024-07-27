"use client";

import { useState } from "react";

export enum StatusText {
  UPLOADING = "Uploading file ...",
  UPLOADED = "",
}

const useUpload = () => {
  const [progress, setProgress] = useState();
  const [fieldId, setFileId] = useState();
  const [status, setStatus] = useState();
};
export default useUpload;
