import { FC } from "react";

const Home: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <a
        style={{
          cursor: "pointer",
        }}
        href={`/blog`}
      >
        blog
      </a>
    </div>
  );
};

export default Home;
