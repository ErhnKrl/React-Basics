class Hello extends React.Component {

    static defaultProps = {
        from: 'Anonymous',
        bangs: 3
    }

    render () {

        let bangs = '!'.repeat(this.props.bangs);
        return (
            <div>
                <h1>Hello {this.props.to} from {this.props.from}{bangs}</h1>
                <img src={this.props.img} />
            </div>
        )
    }
}
