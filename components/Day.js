const dayStyle = {
  margin: '40px',
  padding: '10px',
  border: '2px solid',
  borderRadius: '15px',
  display: 'inline-block',
  
}

// const dayText = {
//   margin: '40px',
//   padding: '10px',
//   border: '2px solid',
//   borderRadius: '15px',
//   display: 'inline-block',
//   color: {calculateColor()}
// }

class Day extends React.Component{
    constructor(props) {
      super(props)
  
    }

    calculateColor() {
      var colorScore = this.calculateData()
      colorScore = (colorScore / 100) * 255
      return "rgb(" + (100 - colorScore) + "," + colorScore + ",0)"
    
    }

    calculateData() {
      var score = 100
      // console.log(this.props.data[this.props.day])
      score = score * (1 - this.props.data['cloudCover'])
      console.log("the Score is " + score)
      return score.toFixed(0);

    }

    renderData() {
      let children = []
      for (var property in this.props.data) {
          if (this.props.data.hasOwnProperty(property)) {
            children.push(
            <p> {property} = {this.props.data[property]}</p>

            )
          }
        }
        return children
    }

    displayDate() {

      var d = new Date(parseInt(this.props.data.time.toString() + "000") );
      // d = d.split(' ')[0]
      return d.toDateString()
    }

    render() {
      return (
          <div style={dayStyle}>
        {/* <p>{JSON.stringify(this.props.data, null, 2)} </p> */}
        <h3>Day = {this.props.day}</h3>
        <h3>{this.displayDate()}</h3>
        {/* {this.renderData()} */}
        <h4 style={{color: this.calculateColor()}}>Score: {this.calculateData() }</h4>
        </div>
      )
    }
  }

  export default Day