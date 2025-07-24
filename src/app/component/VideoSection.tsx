export default function VideoSection() {
  return (
    <>
      
      <div className="aspect-video bg-slate-800">
        <div>
          <video controls>
            <source src="/video.mp4" type="video/mp4" />
          </video>

        </div>
      </div>
    </>
  );
}
