import React from "react";
import './styles.css';

class TextField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e){
        const data = e.target.value;
        this.props.setInputData(data);
        this.setState({data})
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.isClear && prevProps.isClear !== this.props.isClear) {
            this.setState({
                data: ''
            })
        }
    }

    render() {

        return (
            <div className="text-field">
                <input type="text"
                       placeholder="Add New todo"
                       autoFocus={true}
                       onChange={this.onChange}
                       value={this.state.data}
                />
            </div>
        )
    }


}

export default TextField;