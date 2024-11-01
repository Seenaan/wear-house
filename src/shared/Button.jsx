
import PropTypes from 'prop-types'


function Button({children, version, type, isDisabled}) 
{
  return (
    <button tupe={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    version: PropTypes.string,
    isDisabled: PropTypes.bool
    
}

export default Button
