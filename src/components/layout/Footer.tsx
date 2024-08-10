import { footer } from "@/constants";

export default function Footer() {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <pre className="text-center">
            @ 2024 Your Company, Inc. All rights reserved
          </pre>
          <ul className="flex items-center justify-center gap-2.5">
            {footer.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
