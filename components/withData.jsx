import React from 'react'

const withData = Component => (
  class extends React.Component {
    static async getInitialProps(context) {
      const { data } = context.query;

      const defaultData = { heading: 'Default Heading', title: 'Default Title' };
      const parsedData = data ? JSON.parse(data) : defaultData;

      return { ...parsedData };
    }

    render() {
      return (
        <Component {...this.props} />
      )
    }
  }
)

export default withData;
