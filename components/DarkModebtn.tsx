"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const DarkModebtn = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="flex justify-center">
      {currentTheme === "dark" ? (
        <BsFillSunFill
          className="px-1 h-6 w-6 cursor-pointer text-yellow-300"
          onClick={() => setTheme("Light")}
        />
      ) : (
        <BsFillMoonFill
          className="px-1 h-6 w-6 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
};

export default DarkModebtn;
