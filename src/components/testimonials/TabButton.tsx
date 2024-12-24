import { motion } from "framer-motion";
interface Props {
  active: boolean;
  selectTab: () => void;
  children: string;
}
const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }: Props) => {
  const buttonClasses = active ? "#fff" : "#ADB7BE";

  return (
    <button onClick={selectTab}>
      <p
        style={{
          color: `${buttonClasses}`,
          marginRight: "0.75rem", // Equivalent to mr-3 (12px)
          fontWeight: "600", // Equivalent to font-semibold
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          const target = e.target as HTMLElement; // Type assertion
          target.style.color = "white"; // Hover effect
        }}
        onMouseLeave={(e) => {
          const target = e.target as HTMLElement; // Type assertion
          target.style.color = ""; // Reset hover effect
        }}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        style={{
          height: "0.25rem", // Equivalent to h-1 (4px)
          backgroundColor: "#3b82f6", // Replace with your primary-500 color
          marginTop: "0.5rem", // Equivalent to mt-2 (8px)
          marginRight: "0.75rem", // Equivalent to mr-3 (12px)
        }}
      ></motion.div>
    </button>
  );
};

export default TabButton;
