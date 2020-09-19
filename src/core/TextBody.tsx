import React from 'react'

interface TextBodyProps {
  /**
   * value
   */
  value: string;
  /**
   * Class name
   */
  className?: string;
  /**
   * Color
   */
  color?: string;
}

const TextBody:React.FC<TextBodyProps>=({
  className='',
  color='blue',
  value='Hello',
}: TextBodyProps)=>{
  const style = {
    color,
  }
  return (
    <p style={style} className={className}>
      {value}
    </p>
  );
};


export default TextBody
