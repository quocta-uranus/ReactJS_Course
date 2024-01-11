import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return  (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d34ca3b463143762c67371c416475e2d.jpeg?lk3s=a5d48078&x-expires=1705028400&x-signature=8GnGkfqRict9Oibc4CZ0YcW%2BeeA%3D" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                   <span> Tran Anh Quoc </span>
                   <FontAwesomeIcon className={cx('check')} icon = {faCheckCircle} />
                    
                    </h4>
                <span className={cx('username')}>TranAnhQuoc</span>

            </div>
        </div>
    );
}

export default AccountItem;