import musics from "./music";
export default function Home() {
  return (
    <main className="pb-16">
      <div className="p-8" data-role="now available">
        <ul className="flex flex-col gap-4">
          {musics.map((item, index) => {
            return (
              <li className="flex gap-4 bg-card-music p-4" key={index}>
                <span>
                  Name: {item.name}
                  <br />
                  Owner: {item.author}
                  <br />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
