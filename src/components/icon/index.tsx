import classnames from 'classnames';
import * as React from 'react';
import './style.scss'
export interface IconProps {
  type: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  style?: React.CSSProperties;
}

const Icon: React.SFC<IconProps> = ({ type, onClick, className, style }) => {
  const classString = classnames('iconfont', className, {
    [`icon-${type}`]: !!type,
  });

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <i
      style={style}
      role="button"
      tabIndex={0}
      className={classString}
      onClick={onClick}
    />
  );
};
export default Icon;
