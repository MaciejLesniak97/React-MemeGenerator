import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "https://i.imgflip.com/qqsk4.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {

    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input 
                        type = "text"
                        name = "topText"
                        placeholder = "Top text"
                        value = {this.state.topText}
                        onChange = {this.handleChange}
                    />
                    <input 
                        type = "text"
                        name = "bottomText"
                        placeholder = "Bottom text"
                        value = {this.state.bottomText}
                        onChange = {this.handleChange}
                    />

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator