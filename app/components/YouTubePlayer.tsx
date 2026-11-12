interface YouTubePlayerProps {
    videoId: string;
    title: string;
}

export default function YouTubePlayer({
    videoId,
    title,
}: YouTubePlayerProps) {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "800px",
                margin: "20px auto",
            }}
        >
            <h2>{title}</h2>

            <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: "none" }}
            />
        </div>
    );
}
