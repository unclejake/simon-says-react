import React from 'react';

class Screen extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
};

export default Screen;
