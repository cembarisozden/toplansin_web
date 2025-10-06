// örnek sade versiyon
import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<string[]>([]);
  const toast = (msg: string) => setToasts([...toasts, msg]);
  return { toasts, toast };
}
