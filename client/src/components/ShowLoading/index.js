import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CommonEnum } from '@/enums'

import './index.less'

export default function ShowLoading(props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      {props.showLoading ? (
        <div className="loading-info" id={CommonEnum.LOADING_ID}>
          - 加载中 -
        </div>
      ) : (
        <div className="loading-info">- 没有更多数据啦 -</div>
      )}
    </div>
  );
}

ShowLoading.defaultProps = {
  showLoading: true,
};

ShowLoading.propTypes = {
  showLoading: PropTypes.bool,
};
