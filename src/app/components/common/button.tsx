import React, { forwardRef } from 'react';
import { joinClasses, printIf } from '../utils/ClassUtils';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'solid' | 'ghost' | 'accent';
type ColorScheme = 'primary' | 'gray' | 'blue' | 'pink' | 'yellow';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  rounded?: boolean;
  variant?: ButtonVariant;
  colorScheme?: ColorScheme;
  isDisabled?: boolean;
  asSpan?: boolean;
}

const BASIC_STYLE =
  'min-h-10 py-2 px-4 text-lg font-bold cursor-pointer grow-0 transition ease-in-out flex items-center gap-3 ';

//Variants
const GHOST_VARIANT = 'bg-transparent hover:bg-gray-200 dark:hover:bg-base-200 text-content-100';
const SOLID_VARIANT = 'text-white bg-primary-600  hover:bg-primary-500';
const ACCENT_VARIANT = 'text-white bg-gray-800  hover:bg-gray-700 dark:bg-gray-200 dark:hover:bg-gray-100 dark:text-black';
const DISABLED = 'opacity-50 hover:bg-gray-800 cursor-not-allowed';

const variants = {
  ghost: GHOST_VARIANT,
  solid: SOLID_VARIANT,
  accent: ACCENT_VARIANT,
};

const getVariant = (variant: ButtonVariant, colorScheme: ColorScheme) => {
  const variantRules = variants[variant];
  return variantRules;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, rounded, variant = 'solid', asSpan, isDisabled, colorScheme = 'primary', className, ...props }: ButtonProps, ref) => {
    const getClasses = () => {
      return joinClasses(
        BASIC_STYLE,
        getVariant(variant, colorScheme),
        printIf('rounded-full', rounded, 'rounded-3xl'),
        printIf(DISABLED, isDisabled),
        className
      );
    };

    if (asSpan) {
      return (
        <span className={getClasses()} ref={ref} disabled={isDisabled} {...props}>
          {children}
        </span>
      );
    }
    return (
      <button className={getClasses()} ref={ref} disabled={isDisabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
