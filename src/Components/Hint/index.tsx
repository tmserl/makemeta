import './Hint.css';

function Hint({
  hint,
  isHintClicked,
}: {
  hint: string;
  isHintClicked: boolean;
}) {
  return (
    <div className={isHintClicked ? 'hint' : ''}>
      <p>{hint}</p>
    </div>
  );
}

export default Hint;
