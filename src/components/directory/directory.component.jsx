import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import { createStructuredSelector } from 'reselect'; 
import { selectDirectorySections } from '../../redux/directory/directory.selectors'; 
import { connect } from 'react-redux';

const Directory = ({ sections} ) => {
        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...otherParams}) => (
                        <MenuItem key={id} {...otherParams}></MenuItem>
                    ))
                }
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);