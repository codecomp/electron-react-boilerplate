import React, {Component} from 'react'
import {shell} from 'electron'
import styles from './styles.css'

class Link extends Component {

    link(url) {
        shell.openExternal(url)
    }

    render() {
        console.log(styles);
        return (
            <a href='#' onClick={ () => {this.link(this.props.to)} } className={styles.link}>
                {this.props.children}
            </a>
        )
    }
}

export default Link
