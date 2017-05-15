import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    if (this.props.benches[0]){
      const allBenches = this.props.benches.map((bench, idx) => (
        <BenchIndexItem key={idx} bench={bench} />));

      return (
        <ul>
          {
            allBenches
          }
        </ul>
      );
    }
    else{ return <div></div>; }

  }
}

export default BenchIndex;
