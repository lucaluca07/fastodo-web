import React, { createRef } from 'react';
import cx from 'classnames';
import './index.global.scss';

interface Props {
  task?: string;
  placeholder?: string;
  className?: string;
  initText?: string;
  autoFocus?: boolean;
  onEnter?: () => void;
}

class Input extends React.Component<Props> {
  editorRef: React.RefObject<HTMLDivElement>;


  constructor(props: Props) {
    super(props);
    this.editorRef = createRef();
  }

  componentDidMount() {
  }

  

  render() {
    const { className } = this.props;
    return (
      <div className={cx('input', className)}>
        <div className="task-input" ref={this.editorRef} />
      </div>
    );
  }
}

export default Input;
