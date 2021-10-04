import React from 'react'
import { connect } from 'react-redux'

function SuperfansList({superfans}) {
    return (
        
        <div className="show-div">
            <p>Thank you to our most recent superfan!!</p>
            {superfans.reduce((i, superfan) => i = i > superfan.id ? i : (superfan.firstname), 0)}
            
        </div>
    )}

const mapStateToProps = (state) => {
    return { superfans: state.superfans }
}
export default connect(mapStateToProps)(SuperfansList)