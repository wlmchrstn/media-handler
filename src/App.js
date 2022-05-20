import MyUploader from './components/dropzone/dropzone';
import CustomModal from './components/modal-image/modal-image';
import Player from './components/react-player/react-player';

function App() {
    return (
        <div>
            <MyUploader />
            <Player />
            <CustomModal />
        </div>
    );
}

export default App;
