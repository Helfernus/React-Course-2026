import { useEffect } from 'react';
import { Form, useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

export default function NewsletterSignup() {
  // Trigger without transitioning and route changes
  const Fetcher = useFetcher();
  const { data, state } = Fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <Fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </Fetcher.Form>
  );
}
