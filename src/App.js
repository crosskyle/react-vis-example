import React, { Component } from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalBarSeries,
  makeWidthFlexible,
  Hint
} from 'react-vis'

const FlexibleXYPlot = makeWidthFlexible(XYPlot)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    const {value} = this.state;
    return (
      <div className="App" >
        <FlexibleXYPlot stackBy="x" margin={{left: 30, right: 70}}
          yType={'ordinal'}

          height={300}>
          <XAxis />
          <YAxis style={{text: {marginLeft: 20}}}/>

          <HorizontalBarSeries
            data={[
              {x:1,y:'a', title:'hi', weight: 10},
              {x:2,y:'b', title:'yo', weight: 11}
            ]}
            onValueMouseOver={v => this.setState({value: v})}
            onValueMouseOut={() => this.setState({value: null})}
          />
          <HorizontalBarSeries
            data={[
              {x:1,y:'a', title:'hi', weight: 10},
              {x:2,y:'b', title:'yo', weight: 11}
            ]}
            onValueMouseOver={v => this.setState({value: v})}
            onValueMouseOut={() => this.setState({value: null})}
          />
          {value ?
            <Hint value={value}>
                <div/>
                <p>{value.title}</p>
                <p>{value.weight}</p>
            </ Hint> : null
          }
        </FlexibleXYPlot>
      </div>
    )
  }
}

export default App