function SalmonContent(props) {
  const { text, viewportPosition, type } = props;

  const textStyle = {
    fontFamily: "Inter",
    fontWeight: "normal",
    fontSize: "1.25em",
    position: "fixed",
    top: "35%",
    left: "2%",
    zIndex: "50",
  };

  const boxStyle = {
    background: "rgba(43, 85, 85, 50%)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    borderRadius: "10px",
    padding: "20px",
    color: "white",
    left: "1%",
    width: "20%",
    ...textStyle,
  };

  return (
    <div style={type === "text" ? textStyle : boxStyle}>
      {type === "h2" ? <h2>{text}</h2> : <>{text}</>}
    </div>
  );
}

export default SalmonContent;
