import { joinClasses } from '../utils/ClassUtils';
import Button, { ButtonProps } from './button';

type ButtonSize = 'lg' | 'md' | 'sm' | 'xl';
export interface IconButtonProps extends ButtonProps {
  size?: ButtonSize;
}

const sizes = {
  sm: 'min-h-8 min-w-8',
  md: 'min-h-12 min-w-12',
  lg: 'min-h-14 min-w-14',
  xl: 'min-h-16 min-w-16',
};

const IconButton = ({ children, size = 'md', className, ...props }: IconButtonProps) => {
  return (
    <Button {...props} className={joinClasses('flex items-center justify-center px-2 py-2', sizes[size], className)}>
      {children}
    </Button>
  );
};

export default IconButton;
