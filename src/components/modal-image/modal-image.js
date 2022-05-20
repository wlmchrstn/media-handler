import ModalImage from "react-modal-image";
import small from '../../assets/small.jpeg';
import big from '../../assets/big.webp';

const CustomModal = () => {
    return (
        <ModalImage
            small={small}
            large={big}
            alt="ANYA"
            showRotate={true}
            hideZoom={false}
            hideDownload={false}
        />
    )
};

export default CustomModal;
