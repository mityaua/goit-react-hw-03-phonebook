import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';

import styles from './AddContactButton.module.scss';

const AddContactButton = ({onClick}) => {
  return (
    <div className={styles['add-wrapper']}>
      <IconButton
        onClick={onClick}
        title="Add contact"
        aria-label="Add contact"
      >
        <AddIcon width="75px" height="75px" fill="#2196f3" />
      </IconButton>
    </div>
  );
};

export default AddContactButton;
