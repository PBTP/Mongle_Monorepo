import { cn } from '@mgmg/ui/lib/utils';
import React, {
  Children,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Button } from './button';
import ContentField, { type ContentFieldVariantType, type ContentFieldSizeType } from './content-field';

interface LabelFormContextProps {
  inputValue: Record<string, unknown>;
  updateInputValue: (name: string, value: unknown) => void;
}

const LabelFormContext = createContext<LabelFormContextProps>({
  inputValue: {},
  updateInputValue: () => {},
});

interface LabelFormProps {
  children: ReactNode;
  className?: string;
}
const LabelForm = ({ children, className }: LabelFormProps) => {
  const [inputValue, setInputValue] = useState<Record<string, unknown>>({});

  const updateInputValue = useCallback((name: string, value: unknown) => {
    setInputValue((prev) => ({ ...prev, [name]: value }));
  }, []);

  const providerValue = {
    inputValue,
    updateInputValue,
  };

  return (
    <LabelFormContext.Provider value={providerValue}>
      <div className={className}>{children}</div>
    </LabelFormContext.Provider>
  );
};

interface TitleProps {
  children?: ReactNode;
  title: string;
  className?: string;
}

const getChildren = (children: ReactNode, type: unknown) => {
  const childArray = Children.toArray(children);
  const filterChildArray = childArray.filter(
    (child): child is React.ReactElement => React.isValidElement(child) && child.type === type
  );
  return filterChildArray.length > 0 ? filterChildArray : false;
};

const Title = ({ children, title, className }: TitleProps) => {
  const subLabel = getChildren(children, SubLabelType);
  const label = getChildren(children, LabelType);
  return (
    <div className="w-full grid items-center">
      <div className="flex items-center">
        <div className={cn(`text-gray-700 text-sm font-medium leading-5`, className)}>{title}</div>
        {label && <>{label}</>}
      </div>
      {subLabel && <div className="justify-self-end">{subLabel}</div>}
    </div>
  );
};

interface SubLabelProps {
  children?: ReactNode;
  className?: string;
}

const SubLabel = ({ children, className }: SubLabelProps) => {
  return <div className={className}>{children}</div>;
};

interface LabelProps {
  require?: boolean;
  children?: ReactNode;
  className?: string;
}

const Label = ({ require, children, className }: LabelProps) => {
  return require ? (
    <div className="flex ml-2 items-center">
      <span>{children}</span>
      <span className="text-primary text-xs leading-4">*</span>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

interface ContentProps<T> {
  children: ReactNode;
  variant?: ContentFieldVariantType;
  size?: ContentFieldSizeType;
  className?: string;
  name: string;
  data?: T;
}
const Content = <T,>({ children, variant = 'default', size = 'md', className, name, data }: ContentProps<T>) => {
  const { updateInputValue } = useContext(LabelFormContext);

  useEffect(() => {
    if (data) {
      updateInputValue(name, data);
    }
  }, [data, name]);

  const addPropsToChildren = (children: React.ReactNode): React.ReactNode => {
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === 'input') {
        return React.cloneElement(child as ReactElement, {
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;
            updateInputValue(name, value);
          },
        });
      }
      return child;
    });
  };

  return (
    <ContentField className={`[&>input]:w-full ${className}`} variant={variant} size={size}>
      {addPropsToChildren(children)}
    </ContentField>
  );
};

interface DescriptionProps {
  children: ReactNode;
}
const Description = ({ children }: DescriptionProps) => {
  return <div className="text-gray-400 text-xs font-normal leading-4 mt-2">{children}</div>;
};

interface SubmitProps {
  children: ReactNode;
  disabled?: boolean;
  callBack?: () => void;
  className?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}
const Submit = ({ children, disabled, callBack, className, size = 'default' }: SubmitProps) => {
  return (
    <Button variant={disabled ? 'disabled' : 'default'} size={size} className={className} onClick={callBack}>
      {children}
    </Button>
  );
};

const SubLabelType = (<SubLabel />).type;
const LabelType = (<Label />).type;

LabelForm.Title = Title;
LabelForm.Label = Label;
LabelForm.SubLabel = SubLabel;
LabelForm.Content = Content;
LabelForm.Description = Description;
LabelForm.Submit = Submit;

export default LabelForm;
