import { use, useActionState } from 'react';

import Submit from './Submit.jsx';
import { OpinionsContext } from '../store/opinions-context.jsx';

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function opinionAction(previousFormState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');

    const errors = [];

    if (!userName.trim()) {
      errors.push('Please enter your Username!');
    }
    if (title.trim().length < 5) {
      errors.push('Please enter a Title at least 5 characters long!');
    }
    if (body.trim().length < 8 || body.trim().length > 150) {
      errors.push('Please enter your Opinion in between 8 to 150 characters!');
    }

    if (errors.length > 0) {
      return {
        errors,
        values: {
          userName,
          title,
          body,
        }
      };
    }

    await addOpinion({ userName, title, body });
    // console.log(userName, title, body);

    return { errors: null }; //On valid submit we can clear the form with this
  }

  const [formState, formAction, pending] = useActionState(opinionAction, { errors: null });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.values?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.values?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.values?.body}></textarea>
        </p>

        <ul className='errors'>
          {formState.errors?.map(error => (
            <li key={error}>{error}</li>
          ))}
        </ul>

        <Submit />
      </form>
    </div>
  );
}
