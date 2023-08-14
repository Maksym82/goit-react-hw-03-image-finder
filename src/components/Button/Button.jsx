import PropTypes from 'prop-types';


export default function Button({ onClick }) {
    return <LoadButton onClick={onClick}>Load more</LoadButton>;
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}