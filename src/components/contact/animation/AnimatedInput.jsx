import "./animation.css";

const AnimatedInput = ({
  label = "Name",
  type = "text",
  required = true,
  isTextarea = false,
}) => {
  return (
    <div className="wave-group">
      {isTextarea ? (
        <textarea
          required={required}
          className="input textarea"
          name={label.toLowerCase()}
          rows={4}
        ></textarea>
      ) : (
        <input
          required={required}
          type={type}
          className="input"
          name={label.toLowerCase()}
        />
      )}
      <span className="bar"></span>
      <label className="label">
        {[...label].map((char, index) => (
          <span key={index} className="label-char" style={{ "--index": index }}>
            {char}
          </span>
        ))}
      </label>
    </div>
  );
};

export default AnimatedInput;
