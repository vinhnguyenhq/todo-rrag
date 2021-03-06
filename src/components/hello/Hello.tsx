import * as React from 'react';

export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;
}

const Hello: React.SFC<HelloProps> = (props) => {
  const {name, enthusiasmLevel = 1} = props;

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
};

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
