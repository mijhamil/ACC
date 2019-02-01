class Day extends React.Component{
    constructor(props) {
      super(props)
  
    }

    calculateData() {
      var score = 100
      // console.log(this.props.data[this.props.day])
      score = score * (1 - this.props.data['cloudCover'])
      console.log("the Score is " + score)

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

    render() {
      return (
          <div>
        {/* <p>{JSON.stringify(this.props.data, null, 2)} </p> */}
        <h3>Day = {this.props.day}</h3>
        {this.renderData()}
        {this.calculateData()}
        </div>
      )
    }
  }

  export default Day