import React from 'react';

class Index extends React.Component {
    render() {
        return (
            <div onClick={() => {this.props.test();}}>
                {this.props.indexState.message}
            </div>
        );
    }
}

export default Index;
