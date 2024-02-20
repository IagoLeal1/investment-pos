// eslint-disable-next-line react/prop-types
export function Json({ children }) {
  return (
    <code>
      <pre>{JSON.stringify(children, null, 2)}</pre>
    </code>
  );
}