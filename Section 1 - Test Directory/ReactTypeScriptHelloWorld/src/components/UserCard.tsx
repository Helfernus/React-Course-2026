export default function UserCard(props: { title: string }) {
  return (
    <article>
      <p>{props.title}</p>
    </article>
  );
}