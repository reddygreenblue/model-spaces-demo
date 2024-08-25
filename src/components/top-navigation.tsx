import { ModeToggle } from "~/components/theme-toggle";

export function TopNav() {
  return (
    <nav className="absolute inset-x-0 top-0 z-[100] flex h-14 w-full items-center justify-end p-4 font-semibold transition-all">
      <ModeToggle />
    </nav>
  );
}
