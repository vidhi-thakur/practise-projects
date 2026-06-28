import styles from "./styles/Media.module.css";

function Media({ type, video, image }) {
  return (
    <div className={styles.root}>
      {type === "image" && <img src={image} alt="image media" />}
      {type === "video" && (
        <>
          <video width="400" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </>
      )}
    </div>
  );
}

export default Media;
