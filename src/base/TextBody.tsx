import React from 'react'

// export interface TextBodyProps {
//   children: React.ReactNode;
//   /**
//    * Class name
//    */
//   className?: string;
//   /**
//    * Color
//    */
//   color?: string;
// }

export type TextBodyProps = {
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

export const TextBody:React.FC<TextBodyProps>=({
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
