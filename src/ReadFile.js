import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import fileTxt from './numberfile.txt';
const ReadFile = () => {
  const [text, setText] = useState([]);

  if (text.length > 0) {
    let newText = text.replace(/(\r\n|\n|\r)/gm, '');
    let splitText = newText.split('');

    const reducer = (accumulator, currentValue) =>
      Number(accumulator) + Number(currentValue);
    console.log(splitText.reduce(reducer));
  }

  useEffect(() => {
    Axios(fileTxt).then((res) => setText(res.data));
  }, []);

  return <>hello it is from readfile</>;
};

export default ReadFile;
