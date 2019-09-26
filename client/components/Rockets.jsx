class Rockets extends Component {
    render() {
        return(
            <svg width="100%" height="100%">
                {/* Ellipse */}}
                <ellipse cx="190" cy="110" rx="50" ry='100' stroke="black" stroke-width="1" fill="grey" />
                {/* Body (clockwise) */}
                <polygon points="140 100 240 100 240 400 140 400" fill='grey' stroke='black' stroke-width='1' />
                {/* Windows (top to bottom) (clockwise) */}
                <polygon points='200 170 200 200 180 200 180 170' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='200 240 200 270 180 270 180 240' fill='aqua' stroke='black' stroke-width='1' />
                <polygon points='200 310 200 340 180 340 180 310' fill='aqua' stroke='black' stroke-width='1' />
                {/* Thruster (clockwise) */}
                <polygon points='230 400 230 420 150 420 150 400' fill='gray' stroke='black' stroke-width='1' />
                {/* Right Wing (clockwise)*/}
                <polygon points="240 170 330 340 330 480 240 310" fill='grey' stroke='black' stroke-width='1' />
                {/* Left Wing (mirror right wing) */}
                <polygon points="140 170  50 340 50 480 140 310" fill='grey' stroke='black' stroke-width='1' ry='1' />
            </svg>
        )
    }
}