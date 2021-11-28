import React, { FC } from "react";
import styles from "./styles.module.css";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";

interface DarkModeToggleProps {
  className?: string;
  chidlren?: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: FC<DarkModeToggleProps> = ({
  isDarkMode,
  toggleDarkMode,
  className,
}) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault();
      toggleDarkMode();
    },
    [toggleDarkMode]
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <div className={className}>
      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title="Toggle dark mode"
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default DarkModeToggle;
