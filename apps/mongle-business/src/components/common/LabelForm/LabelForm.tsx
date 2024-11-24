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
import styles from './LabelForm.module.scss';
import CheckIcon from '@/icons/icon/CheckIcon';
import ContentField from '../ContentField/ContentField';
import Button from '../Button/Button';

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
    (child): child is React.ReactElement =>
      React.isValidElement(child) && child.type === type
  );
  return filterChildArray.length > 0 ? filterChildArray : false;
};

const Title = ({ children, title, className }: TitleProps) => {
  const subLabel = getChildren(children, SubLabelType);
  const label = getChildren(children, LabelType);
  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.TitleContainer}>
        <div className={`${styles.Title} ${className}`}>{title}</div>
        {label && <>{label}</>}
      </div>
      {subLabel && <div className={styles.SubLabel}>{subLabel}</div>}
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
    <div className={styles.LabelRequire}>
      <CheckIcon width={14} height={14} className={styles.CheckIcon} />
      <span className={styles.LabelRequireText}>필수입력</span>
    </div>
  ) : (
    <div className={className}>{children}</div>
  );
};

interface ContentProps<T> {
  children: ReactNode;
  backgroundColor?: 'Gray' | 'White';
  border?: 'Border' | 'None';
  className?: string;
  name: string;
  data?: T;
}
const Content = <T,>({
  children,
  backgroundColor = 'White',
  border = 'Border',
  className,
  name,
  data,
}: ContentProps<T>) => {
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
    <ContentField
      className={`${styles.Content} ${className}`}
      backgroundColor={backgroundColor}
      border={border}
    >
      {addPropsToChildren(children)}
    </ContentField>
  );
};

interface DescriptionProps {
  children: ReactNode;
}
const Description = ({ children }: DescriptionProps) => {
  return <div className={styles.Description}>{children}</div>;
};

interface SubmitProps {
  children: ReactNode;
  disabled?: boolean;
  callBack?: () => void;
  className?: string;
}
const Submit = ({ children, disabled, callBack, className }: SubmitProps) => {
  return (
    <Button
      buttonType={disabled ? 'Disabled' : 'Primary'}
      className={className}
      onClick={callBack}
    >
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
