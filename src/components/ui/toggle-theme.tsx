import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer border-2 border-cyan rounded-full w-16"
      >
        <input
          type="checkbox"
          hidden
          className="peer"
          checked={isDark}
          id="toggle"
          onChange={() => setTheme(isDark ? "light" : "dark")}
        />
        <div className="w-7 h-7 flex items-center justify-center rounded-full shadow inset-y-0 left-0 border-2 border-cyan peer-checked:translate-x-[32px] transition-all ease-in-out duration-500">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </div>
      </label>
    </div>
  );
}
