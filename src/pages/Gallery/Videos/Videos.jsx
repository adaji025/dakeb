import video from "../../../assets/videos/maize-video.mp4";
const Videos = () => {
  return (
    <div className="h-screen flex items-center max-w-[1240px] mx-auto mb-10">
      <div className="sm:mt-[10rem] overflow-hidden">
        <div className="flex gap-6 md:gap-14">
          <div className="grid grid-cols-2 gap-6 md:gap-14">
            <div>
              <video width="" controls className="h-[292px] sm:w-[355px] ">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div>
              <video width="" controls className="h-[292px] sm:w-[355px] ">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div>
              <video width="" controls className="h-[292px] sm:w-[355px] ">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <div>
              <video width="" controls className="h-[292px] sm:w-[355px] ">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
          <div>
            <div>
              <video width="" controls className="h-[292px] sm:w-[355px] ">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
