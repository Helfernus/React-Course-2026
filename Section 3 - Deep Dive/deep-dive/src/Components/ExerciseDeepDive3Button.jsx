export default function Button({ mode = "filled", Icon, children, ...props }) {
  const buttonClass = `button ${mode}-button ${Icon?'icon-button':''}`;

  return <button className={buttonClass} {...props}>
    {Icon && <span className="button-icon"><Icon /></span>}
    <span>{children}</span>
  </button>
}
