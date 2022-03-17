import React from "react";
import ModalVideo from "react-modal-video";
import { RiPlayCircleLine } from "react-icons/ri";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class VideoModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="WVPfu1yOOko"
          onClose={() => this.setState({ isOpen: false })}
        />
        <div className="video-btn">
          <ul>
            <li>
              <button className="video-btn" onClick={this.openModal}>
                <i className="video-btn">
                  <RiPlayCircleLine size={70} />
                </i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default VideoModal;
