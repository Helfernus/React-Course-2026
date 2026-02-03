import Input from './Input.jsx';
import { useInput } from '../hooks/useInput.js';
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js';

export default function Login() {
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleValueChange: handleEmailChange,
    hasError: emailHasError,
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleValueChange: handlePasswordChange,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 8));

  // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email);
  // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 8);

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log('Values: ', emailValue, passwordValue);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          value={emailValue}
          error={emailHasError && 'Please enter a valid email address!'} />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          value={passwordValue}
          error={passwordHasError && 'Password length must be 8 or greater!'} />
      </div>

      <p className="form-actions">
        <button type='reset' className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>Login</button>
      </p>
    </form>
  );
}
