import { useState } from "react";
import styles from "./imagewithmodal.module.css";
import CloseIcon from "@mui/icons-material/Close";

const IMAGE = ({ img, alt }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <img
        onClick={() => setShowModal(true)}
        className={styles.img}
        src={img}
        alt={alt}
      />
      {showModal && (
        <div className={styles.background}>
          <div className={styles.modalWrapper}>
            <img src={img} alt={alt} className={styles.modalImg} />
            <CloseIcon
            className={styles.closeModalButton}
              aria-label="close-modal"
              onClick={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default IMAGE;
