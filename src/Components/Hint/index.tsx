import './Hint.css';

function Hint({ hint, toggle }: { hint: string; toggle: boolean }) {
  return (
    <div className={toggle ? 'hint' : ''}>
      <p>{hint}</p>
    </div>
  );
}

export default Hint;
