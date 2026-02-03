export default function Button({ children, textOnly, rounded, className, ...props }) {
  let cssClasses = textOnly ? 'text-button' : 'button';

  if (className) cssClasses+=` ${className}`;
  if(rounded) cssClasses=undefined;

  return (
    <button className={cssClasses} {...props}>{children}</button>
  );
}
