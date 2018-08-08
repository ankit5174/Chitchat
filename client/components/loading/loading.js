import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactLoading from 'react-loading';
import Media from "react-media";
import './loading.css';

export default class Loading extends Component {

    render() {
        let {loading} = this.props;
        let loadingClasses = loading ? 'loading-container show': 'loading-container';
        return (
            <div className={loadingClasses}>
                <div className="loading-container-content">
                    <Media query="(max-width: 448px)">
                        {matches =>
                            matches ? (
                                <ReactLoading type="bars" color="#dd4b39" height={100} width={100}/>
                            ) : (
                                <ReactLoading type="bars" color="#dd4b39" height={200} width={200}/>
                            )
                        }
                    </Media>
                </div>
            </div>
        );
    }
}

Loading.propTypes = {
    loading: PropTypes.bool
};