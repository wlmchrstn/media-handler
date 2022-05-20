import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';

const MyUploader = () => {
    const Preview = ({ meta }) => {
        const { name, percent, status } = meta
        return (
          <span style={{ alignSelf: 'flex-start', margin: '10px 3%', fontFamily: 'Helvetica' }}>
            {name}, {Math.round(percent)}%, {status}
          </span>
        )
    }

    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            PreviewComponent={Preview}
            minSizeBytes={1024 * 1024}
            maxSizeBytes={1024 * 1024 * 3}
            accept="application/pdf"
        />
    )
}

export default MyUploader;
