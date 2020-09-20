import React from 'react'
import Base from '../core/TextBody'

interface TextBodyProps {
  /**
   * value
   */
  value: string
  /**
   * Class name
   */
  className?: string
  /**
   * Color
   */
  color?: string
}

const TextBody: React.FC<TextBodyProps> = ({
  className = 'custom-1',
  color = 'red',
  value = 'Overrided',
}: TextBodyProps) => {
  return <Base {...{ color, className, value }} />
}

export default TextBody
