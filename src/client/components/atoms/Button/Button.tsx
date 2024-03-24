'use client'

import React, { ReactNode } from 'react'
import './Button.css'

const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget

  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2

  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
  circle.classList.add('ripple')

  const existingRipple = button.getElementsByClassName('ripple')[0]
  if (existingRipple) {
    existingRipple.remove()
  }

  button.appendChild(circle)
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event)
    props.onClick?.(event)
  }

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  )
}
