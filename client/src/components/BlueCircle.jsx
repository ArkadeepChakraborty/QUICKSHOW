const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto", size = "300px", color = "#6c5dd3" }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        backgroundColor: color,
        borderRadius: "9999px",
        filter: "blur(100px)",
        opacity: 0.4,
        zIndex: 0
      }}
    />
  );
};

export default BlurCircle;
