import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-green-400 to-green-600">
      {children}
    </div>
  );
}
