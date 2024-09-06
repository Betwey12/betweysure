import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";
import { useEffect, useState } from "react";

export default function ToggleTheme() {
  const { setTheme, theme } = useTheme();
  const [isDark, setIsDark] = useState<boolean>();

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

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
          defaultChecked={isDark}
          id="toggle"
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        <div className="w-7 h-7 flex items-center justify-center rounded-full shadow inset-y-0 left-0 border-2 border-cyan peer-checked:translate-x-[32px] transition-all ease-in-out duration-500">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </div>
      </label>
    </div>
  );
}
