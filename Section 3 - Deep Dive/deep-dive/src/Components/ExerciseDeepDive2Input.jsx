export default function ExerciseDeepDive2Input({ richText, children, ...props }) {
  const inputType = richText ? <textarea {...props}>{children}</textarea> : <input {...props}>{children}</input>

  return inputType;
  // return a <textarea> if a richText prop is true
  // return an <input> otherwise
  // forward / set the received props on the returned elements
}
